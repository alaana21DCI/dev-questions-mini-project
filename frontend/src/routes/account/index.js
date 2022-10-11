import * as React from "react";
import "./index.scss";
import Layout from "../../Layout";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import useUser from "../../store/useUser";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const user = useUser();
  const navigate = useNavigate();
  const [name, setName] = React.useState(user.data.name);
  const [profilePic, setProfilePic] = React.useState("");
  // wenn die Update success war zeig das:
  const [showSuccess, setShowSuccess] = React.useState(false);

  const logoutHandler = async () => {
    await user.logout();
    navigate("/login");
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    const status = await user.update({
      name: name,
      profilePic: profilePic,
    });

    if (status === 200) {
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }
  };

  return (
    <Layout>
      <div className="Account">
        <div className="title">
          <span>Wellcom back {user.data.name} !</span>
          <Button onClick={logoutHandler}>Logout</Button>
        </div>

        <form className="update-box" onSubmit={updateHandler}>
          <Input
            label="Name"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="ProfileImage"
            type="file"
            accept="image/*"
            placeholder="ProfileImage..."
            onChange={(e) => setProfilePic(e.target.files[0])}
          />

          <Button type="submit">
            {user.isFetching ? "Fetching..." : "Update"}
          </Button>
          {user.error && <div className="error">{user.error}</div>}
          {showSuccess && <div className="success"> Update was success!</div>}
        </form>
      </div>
    </Layout>
  );
};

export default Account;
