import "./index.scss";

import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

import useUser from "../store/useUser";

const Layout = (props) => {
  const user = useUser();

  const accountLink = user.data ? "/account" : "/login";
  return (
    <div className="Layout">
      <header className="main-header">
        <nav className="nav">
          <Link className="link logo" to="/">
            D e v- Q
          </Link>
          <Link to={accountLink} className="link account">
            <BiUser size={30} color="#fddabf" />
          </Link>
          <Link to="/create-question" className="link create-question ">
            + Q u e s t i o n
          </Link>
        </nav>
      </header>

      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
