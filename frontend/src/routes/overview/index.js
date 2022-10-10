import * as React from "react";
import "./index.scss";

import Layout from "../../Layout";
import Button from "../../UI/Button/";
import { Link } from "react-router-dom";

const Overview = () => {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3001/questions`).then(async (response) => {
      const result = await response.json();

      if (response.status === 200) {
        setQuestions(result);
      }
    });
  }, [questions]);

  //console.log(questions);

  return (
    <Layout>
      <div className="Overview">
        <div className="filters">
          <div className="control">
            <input
              id="search"
              type="text"
              placeholder="Search by title/description..."
              value=""
              onChange=""
            />
          </div>

          <div className="categories">
            <Button className="" onClick="">
              JS
            </Button>
            <Button className="" onClick="">
              HTML
            </Button>
            <Button className="" onClick="">
              CSS
            </Button>
          </div>
        </div>

        <section className="questions">
          <h1>Developer Questions:</h1>
          {questions.map((question) => (
            <Link
              className="question"
              key={question._id}
              to={"/questions/" + question._id}
            >
              <h4>{question.title}</h4>
              {/* <p>{question.answers.length} Answers </p> */}
              <div className="profile">
                {question.user.profileImage && (
                  <div>
                    <img
                      className="profileImage"
                      src={question.user.profileImage}
                      width="24"
                      height="24"
                      alt="ProfileImage"
                    />
                    <h5>&nbsp;{question.user.name}</h5>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  );
};
export default Overview;
