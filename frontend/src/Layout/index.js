import { Link } from "react-router-dom";
import "./index.scss";
import { BiUser } from "react-icons/bi";

const Layout = (props) => {
  return (
    <div className="Layout">
      <header className="main-header">
        <nav className="nav">
          <Link className="logo-link" to="/">
            Dev-Q
          </Link>
          <Link to="/account" className="account-link">
            <BiUser size={30} color="#fddabf" />
          </Link>
          <Link to="/create-question" className="create-question-link ">
            Create A Question
          </Link>
        </nav>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
