import * as React from "react";
import "./index.scss";

import Layout from "../../Layout";
import { useParams } from "react-router-dom";

export default function Question() {
  const params = useParams();
  const [question, setQuestion] = React.useState(null);

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

  if (!question) {
    return (
      <Layout>
        <h2>Loaing...</h2>
      </Layout>
    );
  }

  return (
    // 4. Bei den Antworten soll das Profilbild angezeigt werden falls es vorhanen ist.
    // dazu brauchen den profileImage field auf user im Backend user sowie auf antwort  zu papulaten im questionsController

    <Layout>
      <div className="QuestionId">
        <div className="wrapper">
          <section className="question-box">
            <div className="head">
              <h1 className="title">{question.title}</h1>
              <span className="name">{question.user.name}</span>
            </div>
            <div className="description">{question.description}</div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
