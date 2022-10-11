import * as React from "react";
import "./index.scss";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";

const CreateQuestion = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("HTML");
  const [error, setError] = React.useState("");
  const [isFetching, setIsFetching] = React.useState(false);

  const navigate = useNavigate();

  const addQuestionHandler = async (event) => {
    event.preventDefault();
    setIsFetching(true);

    const response = await fetch("http://localhost:3001/questions", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        category: category,
      }),
    });

    const result = await response.json();

    setIsFetching(false);

    if (response.status === 200) {
      navigate("/questions/" + result._id);
      setError("");
    } else if (result.errors) {
      setError(result.errors[0].msg);
    } else if (result.error) {
      setError(result.error);
    }
  };

  const categorySubmitHandler = (category) => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      setCategory(category);
    };
  };

  return (
    <Layout>
      <form className="CreateQuestion" onSubmit={addQuestionHandler}>
        <Input
          label="Title:"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="control-textarea">
          <label>Description:</label>
          <textarea
            rows={10}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="control">
          <label>Category:</label>
          <div className="button-list">
            <Button
              className={category === "JS" ? "active" : ""}
              onClick={categorySubmitHandler("JS")}
            >
              JS
            </Button>
            <Button
              className={category === "HTML" ? "active" : ""}
              onClick={categorySubmitHandler("HTML")}
            >
              HTML
            </Button>
            <Button
              className={category === "CSS" ? "active" : ""}
              onClick={categorySubmitHandler("CSS")}
            >
              CSS
            </Button>
          </div>
        </div>

        <Button className="btn" type="submit">
          {isFetching ? "Fetching..." : "Send"}
        </Button>
        {error && <div className="error">{error}</div>}
      </form>
    </Layout>
  );
};
export default CreateQuestion;
