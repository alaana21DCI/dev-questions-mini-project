import * as React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";

const Question = () => {
  const params = useParams();
  return <h1>Question [{params.id}] </h1>;
};

export default Question;
