import * as React from "react";
import "./index.scss";

import Input from "../../UI/Input";
import Button from "../../UI/Button";

export default function Login() {
  const [showRegister, setShowRegister] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // Bei der Registrirung soll der User optinal ein Profilbild hochladen können.
  const [profilePic, setProfilePic] = React.useState();

  if (showRegister) {
    // Registierung-Formular
    return (
      <div className="Login">
        <div className="wrapper">
          <form onSubmit="" className="form-box">
            <div className="head">
              <h1>Register Formular</h1>
              <div
                className="toggle-register"
                onClick={() => setShowRegister(false)}
              >
                Ich habe bereits einen Account!
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
              id="profilbild"
              label="Profilbild"
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
            <div className="actions">
              <Button type="submit" className="btn">
                Abschicken
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="Login">
      <div className="wrapper">
        <form onSubmit="" className="form-box">
          <div className="head">
            <h1>Login Formular </h1>
            <div
              className="toggle-register"
              onClick={() => setShowRegister(true)}
            >
              Ich habe noch keinen Account!
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
            Fetching
          </button>
        </form>
      </div>
    </div>
  );
}
