import { authService } from "fb";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({refreshUser, userObj}) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
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
        <>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} placeholder="Display Name" value={newDisplayName} />
            <input type="submit" value="Update Profile" />
        </form>
        <button onClick={onLogOutClick}>Log Out</button>
        <footer>Nwitter Version 0.0 Last Editied: 2021.8.30</footer>
        </>
    )
}

export default Profile;