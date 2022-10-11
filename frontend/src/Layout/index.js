import { Link } from "react-router-dom";
import "./index.scss";
import { BiUser } from "react-icons/bi";
import useUser from "../store/useUser";
const Layout = (props) => {
  const user = useUser();
  // wenn der User vorhanden (/angemeldet)ist (nicht null) wird der icon button zur account seite navigiert werden , sonst wird zum login weitergeleitet wenn er auf dise icon clickst
  // mit hilfe der useUser hook bekommen wir den user
  const accountLink = user.data ? "/account" : "/login";
  return (
    <div className="Layout">
      <header className="main-header">
        <nav className="nav">
          <Link className="logo-link" to="/">
            Dev-Q
          </Link>
          <Link to={accountLink} className="account-link">
            <BiUser size={30} color="#fddabf" />
          </Link>
          <Link to="/create-question" className="create-question-link ">
            Add A Question
          </Link>
        </nav>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
