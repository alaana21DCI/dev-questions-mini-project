import * as React from "react";
import "./question_item.scss";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card";

const Question = (props) => {
  const question = props.question;
  const navigate = useNavigate();

  return (
    <Card
      className="question_item"
      key={question._id}
      onClick={() => navigate("/questions" + "/" + question._id)}
    >
      <div className="head">
        <h4>{question.title}</h4>
        <div className="count">
          <span>
            <strong> {question.answers.length}</strong>
          </span>
          <span>a n s w e r s</span>
        </div>
      </div>

      <div className="annotation">
        {question.user.profileImage && (
          <div className="avatar">
            <a href="/account">
              <img
                className="profileImage"
                src={question.user.profileImage}
                alt="profileImage"
              />
            </a>

            <h5>&nbsp;{question.user.name}</h5>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Question;
