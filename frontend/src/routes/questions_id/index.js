import * as React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";

const Question = () => {
  const params = useParams();
  return (
    <Layout>
      <h1>Question [{params.id}] </h1>
    </Layout>
  );
};

export default Question;
