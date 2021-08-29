import React from "react";
import {Link} from "react-router-dom";
import "components/Styles.css";

const Navigation = ({userObj}) => <nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/profile">{userObj.displayName}'s Profile</Link>
        </li>
    </ul>
</nav>
export default Navigation;