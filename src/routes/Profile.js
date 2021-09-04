import { authService } from "fb";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({refreshUser, userObj}) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        const ok = window.confirm("Are you sure you want to log out?")
        if(ok) {
            authService.signOut();
            history.push("/");
        }
    };
    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewDisplayName(value);
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({
                displayName : newDisplayName,
            })
            refreshUser();
        }
    }
    return (    
        <da className="profile">
        <form className="profile_form" onSubmit={onSubmit}>
            <input className="profile_form_input" type="text" onChange={onChange} placeholder="Display Name" value={newDisplayName} />
            <input className="profile_form_submit" type="submit" value="Update Profile" />
        </form>
        <button className="logout" onClick={onLogOutClick}>Log Out</button>
        <footer>Nwitter Version 0.0 Last Editied: 2021.8.30</footer>
        </da>
    )
}

export default Profile;