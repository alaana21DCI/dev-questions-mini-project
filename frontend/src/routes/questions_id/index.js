import * as React from "react";
import "./index.scss";

import Layout from "../../Layout";
import Button from "../../UI/Button";
import { useParams } from "react-router-dom";

const Question = () => {
  const params = useParams();

  const [question, setQuestion] = React.useState(null);
  const [answer, setAnswer] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:3001/questions/" + params.id, {
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

    const response = await fetch("http://localhost:3001/answers", {
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

    if (response.status === 200) {
      setAnswer("");
      // refetch questions
      fetch("http://localhost:3001/questions/" + params.id, {
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
        <div className="wrapper">
          <section className="question-box">
            <div className="head">
              <h1 className="title">{question.title}</h1>
              <span className="name">{question.user.name}</span>
            </div>
            <div className="description">
              <strong>
                <span>Q : </span>
              </strong>
              {question.description}
            </div>
          </section>

          <section className="answers-box">
            {question.answers.map((answer) => (
              <div key={answer._id} className="card">
                <div className="annotation">
                  <div className="user">
                    {answer.user.profileImage && (
                      <div className="image">
                        <img
                          src={answer.user.profileImage}
                          width="34"
                          height="34"
                          alt=""
                        />
                      </div>
                    )}

                    <h5>{answer.user.name}</h5>
                    <p>has answered:</p>
                  </div>
                </div>
                <div className="description">
                  <p> {answer.description}</p>
                </div>
              </div>
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
              <Button type="submit">Submit</Button>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  );
};
export default Question;
