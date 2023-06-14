import "./LoginPanel.scss";

export default function LoginPanel() {

    const handleCreateAccount = (event) => {
        event.preventDefault();
        console.log("event: ", event);
        console.log(`Tried to create account with username ${event.target.parentNode.username.value} and password ${event.target.parentNode.password.value}!`);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        console.log("event: ", event);
        console.log(`Tried to log in with username "${event.target.username.value}" and password "${event.target.password.value}"!`);
    }

    return (
        <div className="login-panel">
            <p className="login-panel__title">LOG IN TO SAVE YOUR DATA!</p>
            <form className="login-panel__form" onSubmit={handleLogin} action="POST">
                <label htmlFor="username">Username:</label>
                <input className="login-panel__username-input" name="username" type="text" placeholder="Type your username here..."/>
                <label htmlFor="password">Password:</label>
                <input className="login-panel__password-input" name="password" type="password" placeholder="Type your password here..." />
                <button className="login-panel__create-button" onClick={handleCreateAccount}>Create Account</button>
                <button className="login-panel__login-button" type="submit">Log In</button>
            </form>
        </div>
    );
}