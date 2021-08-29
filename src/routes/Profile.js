import { authService } from "fb";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "components/Styles.css";

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
        </>
    )
}

export default Profile;