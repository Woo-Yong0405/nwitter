import { authService, firebaseInstance } from "fb";
import React, {useState} from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true); 
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name==="email") {
           setEmail(value); 
        } else if (name==="password") {
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(
                    email, password
                );
            } else {
                data = await authService.signInWithEmailAndPassword(
                    email, password
                );
            }
            console.log(data); 
        } catch (error) {
            setError(error.message);
        }
    }
    const toggleAccount = () => setNewAccount(prev => !prev);
    const onSocialCLick = async (event) => {
        const {target:{name},
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        } else if (name === "facebook") {
            provider = new firebaseInstance.auth.FacebookAuthProvider();
        }
        await authService.signInWithPopup(provider);
    }
return (
    <div className="login" >
        <h1>Welcome to Nwitter!</h1>
        <form className="formform" onSubmit={onSubmit}>
            <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange} />
            <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange} />
            <input type="submit" value={newAccount ? "Sign Up" : "Log In"} />
            {error}
        </form>
        <span className="loginsignup" onClick={toggleAccount}>{newAccount ? "Log In" : "Sign Up"}</span>
        <div className="sociallogin">
            <button onClick={onSocialCLick} name="google">Google</button>
            <button onClick={onSocialCLick} name="github">Github</button>
            <button onClick={onSocialCLick} name="facebook">Facebook</button>
        </div>
        <div className="footer">
            <footer>Nwitter Version 0.0 Last Editied: 2021.8.30</footer>
        </div>
    </div>
)}
export default Auth;