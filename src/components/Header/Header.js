import "./Header.scss";

export default function Header({ loggedIn, role }) {
    return (
        <header className="header">
            <p className="header__title">EasyPrompt</p>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item navbar__item--home">HOME</li>
                    <li className="navbar__item navbar__item--sandbox">Sandbox</li>
                    <li className="navbar__item navbar__item--prompts">Prompts</li>
                    <li className="navbar__item navbar__item--tasks">Tasks</li>
                    <li className="navbar__item navbar__item--evals">Evals</li>
                    <li className="navbar__item navbar__item--about">About</li>
                </ul>
            </nav>
            {loggedIn 
                ? <p className="header__login-status">Logged In As <span className="header__emph-text">{role}</span></p> 
                : <p className="header__login-status">Not Logged In</p>}
        </header>
    );
}