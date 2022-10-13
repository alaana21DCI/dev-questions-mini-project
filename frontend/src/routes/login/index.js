import * as React from "react";
import "./index.scss";
import useUser from "../../store/useUser";
import { useNavigate } from "react-router-dom";
import Input from "../../UI/Input";

const Login = () => {
  const [showSignup, setShowSignup] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [profilePic, setProfilePic] = React.useState();
  const user = useUser();
  const navigate = useNavigate();

  const signUpHandler = async (event) => {
    event.preventDefault();

    const status = await user.signup({
      email: email,
      password: password,
      name: name,
      profilePic: profilePic,
    });

    if (status === 200) {
      navigate("/account");
    }
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    const status = await user.login({
      email: email,
      password: password,
    });

    if (status === 200) {
      navigate("/account");
    }
  };
  if (showSignup) {
    return (
      <div className="Login">
        <div className="wrapper">
          <form onSubmit={signUpHandler} className="form-box">
            <div className="head">
              <h1>Join Us Now!</h1>
              <div
                className="toggle-register"
                onClick={() => setShowSignup(false)}
              >
                I have Already an account!
              </div>
            </div>
            <Input
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              id="name"
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              id="profileImage"
              label="profileImage"
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
            <div className="actions">
              <button type="submit" className="btn">
                {user.isFetching ? "Fetching..." : "Send"}
              </button>
            </div>
            {user.error && <div className="error">{user.error}</div>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="Login">
      <div className="wrapper">
        <form onSubmit={loginHandler} className="form-box">
          <div className="head">
            <h1>Login</h1>
            <div
              className="toggle-register"
              onClick={() => setShowSignup(true)}
            >
              I don't have an Account!
            </div>
          </div>
          <Input
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">
            {user.isFetching ? "Fetching..." : "Send"}
          </button>
          {user.error && <div className="error">{user.error}</div>}
        </form>
      </div>
    </div>
  );
};
export default Login;
