import * as React from "react";
import "./index.scss";
import Layout from "../../Layout";
import Button from "../../UI/Button";

import useUser from "../../store/useUser";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const user = useUser();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await user.logout();
    navigate("/login");
  };
  return (
    <Layout>
      <div className="Account">
        <div className="title">
          <span>WILLKOMEN {user.data.name} !</span>
          <Button onClick={logoutHandler}>Logout</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
