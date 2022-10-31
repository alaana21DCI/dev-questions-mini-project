import * as React from "react";
import "./index.scss";

import Layout from "../../Layout";
import Button from "../../UI/Button";
import Question from "./question_item";

const Overview = () => {
  const [questions, setQuestions] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    fetch(`/questions?category=${category}`).then(
      async (response) => {
        const result = await response.json();

        if (response.status === 200) {
          setQuestions(result);
        }
      }
    );
  }, [category, search]);

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
        <div className="filters-bar-fixed">
          <div className="control search">
            <input
              id="search"
              type="text"
              placeholder="search by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="categories-box">
            <Button
              className={category === "JS" ? "active" : ""}
              onClick={() => categoryClickHandler("JS")}
            >
              J S
            </Button>
            <Button
              className={category === "HTML" ? "active" : ""}
              onClick={() => categoryClickHandler("HTML")}
            >
              H T M L
            </Button>
            <Button
              className={category === "CSS" ? "active" : ""}
              onClick={() => categoryClickHandler("CSS")}
            >
              C S S
            </Button>
          </div>
        </div>

        <section className="questions">
          <h1> Q u e s t i o n s:</h1>
          {questions.map((question) => (
            <Question key={question._id} question={question}></Question>
          ))}
        </section>
      </div>
    </Layout>
  );
};
export default Overview;
