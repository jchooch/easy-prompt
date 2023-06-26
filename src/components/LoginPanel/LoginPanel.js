// IMPORT LIBRARIES
import axios from "axios";
// IMPORT REACT PAGES
// IMPORT REACT COMPONENTS
// IMPORT STYLES
import "./LoginPanel.scss";

export default function LoginPanel({ loginProps }) {

    const handleCreateAccount = async (event) => {
        event.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_EASYPROMPT_API_BASE_URL}/users/`, {
            username: event.target.parentNode.username.value,
            password: event.target.parentNode.password.value,
            role: "Engineer"
        });
        if (response.data.error = "username_taken") {
            alert("Username is already taken. Please choose another.");
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await axios.get(`${process.env.REACT_APP_EASYPROMPT_API_BASE_URL}/users/${event.target.username.value}`);
        if (response.data.password === event.target.password.value) {
            loginProps.setLoggedIn(true);
            sessionStorage.setItem("loggedIn", true);
            loginProps.setMyUserID(response.data.id);
            sessionStorage.setItem("myUserID", response.data.id);
            loginProps.setMyUsername(response.data.username);
            sessionStorage.setItem("myUsername", response.data.username);
            loginProps.setMyRole(response.data.role);
            sessionStorage.setItem("myRole", response.data.role);
        } else {
            alert("Password DOES NOT match stored password for that username!");
        }
        console.log(`Tried to log in with username "${event.target.username.value}" and password "${event.target.password.value}"!`);
    }

    if (loginProps.loggedIn) {
        return (
            <div className="login-panel">
                <p className="login-panel__title">LOGGED IN</p>
                <p>Welcome, <b style={{color:"red"}}>{loginProps.myUsername}</b>.</p>
                <p>You are an <b>{loginProps.myRole}</b>.</p>
            </div>
        );
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