import * as React from "react";
import "./index.scss";

import Layout from "../../Layout";
import Button from "../../UI/Button/";
import { Link } from "react-router-dom";

const Overview = () => {
  const [questions, setQuestions] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    fetch(`http://localhost:3001/questions?category=${category}`).then(
      async (response) => {
        const result = await response.json();

        if (response.status === 200) {
          setQuestions(result);
        }
      }
    );
  }, [category, search]);

  //console.log(questions);
  const categoryClickHandler = (selectedCategory) => {
    if (selectedCategory === category) {
      setCategory("");
    } else {
      setCategory(selectedCategory);
    }
  };

  return (
    <Layout>
      <div className="Overview">
        <div className="filters">
          <div className="control">
            <input
              id="search"
              type="text"
              placeholder="search by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="categories">
            <Button
              className={category === "JS" ? "active" : ""}
              onClick={() => categoryClickHandler("JS")}
            >
              JS
            </Button>
            <Button
              className={category === "HTML" ? "active" : ""}
              onClick={() => categoryClickHandler("HTML")}
            >
              HTML
            </Button>
            <Button
              className={category === "CSS" ? "active" : ""}
              onClick={() => categoryClickHandler("CSS")}
            >
              CSS
            </Button>
          </div>
        </div>

        <section className="questions">
          <h1> Dev Q u e s t i o n s:</h1>
          {questions.map((question) => (
            <Link
              className="question"
              key={question._id}
              to={"/questions/" + question._id}
            >
              <h4>{question.title}</h4>
              <p>{question.answers.length} Answers </p>
              <div className="profile">
                {question.user.profileImage && (
                  <div>
                    <img
                      className="profileImage"
                      src={question.user.profileImage}
                      width="24"
                      height="24"
                      alt="profileImage"
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
