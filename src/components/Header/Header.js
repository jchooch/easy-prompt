// IMPORT LIBRARIES
import { Link } from "react-router-dom";
// IMPORT REACT PAGES
// IMPORT REACT COMPONENTS
// IMPORT STYLES
import "./Header.scss";

export default function Header({ loginProps }) {
  const handleLogOut = async (event) => {
    event.preventDefault();
    loginProps.setLoggedIn(false);
    sessionStorage.setItem("loggedIn", false);
    loginProps.setMyUserID(undefined);
    sessionStorage.setItem("myUserID", undefined);
    loginProps.setMyUsername("");
    sessionStorage.setItem("myUsername", "");
    loginProps.setMyRole("");
    sessionStorage.setItem("myRole", "");
  };

  return (
    <header className="header">
      <Link to="/" className="header__title-link">
        <p className="header__title">
          <span className="header__title header__title--left">Easy</span>
          <span className="header__title header__title--right">Prompt</span>
        </p>
        {/* <p><i>unlock large language models</i></p> */}
      </Link>
      <nav className="navbar">
        <ul className="navbar__list">
          <Link to="/sandbox">
            <li className="navbar__item navbar__item--sandbox">SandBox</li>
          </Link>
          <Link to="/prompts">
            <li className="navbar__item navbar__item--prompts">Prompts</li>
          </Link>
          <Link to="/tasks">
            <li className="navbar__item navbar__item--tasks">Tasks</li>
          </Link>
          <Link to="/evals">
            <li className="navbar__item navbar__item--evals">Evals</li>
          </Link>
          <Link to="/testbox">
            <li className="navbar__item navbar__item--about">TestBox</li>
          </Link>
          {/* <Link to="/about">
            <li className="navbar__item navbar__item--about">About</li>
          </Link> */}
        </ul>
      </nav>
      <div className="header__login-status-box">
        {loginProps.loggedIn ? (
          <>
            <p className="header__login-status">
              Logged In As{" "}
              <span className="emph-italic emph-bold">
                {String(loginProps.myUsername)}
              </span>
            </p>{" "}
            <button className="header__logout-btn" onClick={handleLogOut}>
              Log Out
            </button>
          </>
        ) : (
          <p className="header__login-status">Not Logged In</p>
        )}
      </div>
    </header>
  );
}
