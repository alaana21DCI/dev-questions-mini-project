import * as React from "react";
import "./index.scss";
import Answer from "./answer";
import Layout from "../../Layout";
import Button from "../../UI/Button";
import { useParams } from "react-router-dom";
import Card from "../../UI/Card";

const Question = () => {
  const params = useParams();
  const [question, setQuestion] = React.useState(null);
  const [answer, setAnswer] = React.useState("");
  const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(() => {
    fetch("/questions/" + params.id, {
      method: "GET",
      credentials: "include",
    }).then(async (response) => {
      const result = await response.json();

      if (response.status === 200) {
        setQuestion(result);
      }
    });
  }, [params.id]);

  const submitAnswerHandler = async (event) => {
    event.preventDefault();
    setIsFetching(true);

    const response = await fetch("/answers", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: answer,
        question: question._id,
      }),
    });
    setIsFetching(false);

    if (response.status === 200) {
      setAnswer("");

      // refetch questions
      fetch("/questions/" + params.id, {
        method: "GET",
        credentials: "include",
      }).then(async (response) => {
        const result = await response.json();

        if (response.status === 200) {
          setQuestion(result);
        }
      });
    }
  };

  if (!question) {
    return (
      <Layout>
        <h2>Loading...</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="QuestionId">
        <Card className="question-box">
          <div className="head">
            <h1 className="title">{question.title}</h1>

            <span className="name">{question.user.name}</span>
          </div>
          <div className="description">
            <p>{question.description}</p>
          </div>
        </Card>

        <section className="answers-box">
          {question.answers.map((answer) => (
            <Answer answer={answer} key={answer._id}></Answer>
          ))}
        </section>

        <section className="answer-box">
          <form onSubmit={submitAnswerHandler}>
            <h2>My Answer:</h2>
            <textarea
              rows={5}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            ></textarea>
            <Button type="submit">
              {" "}
              {isFetching ? "Fetching..." : "Submit"}
            </Button>
          </form>
        </section>
      </div>
    </Layout>
  );
};
export default Question;
