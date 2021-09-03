import React from "react";
import {Link} from "react-router-dom";
import "components/Styles.css";

const Navigation1 = ({userObj}) => <nav>
    <div id="navds">
        <p><Link to="/" className="link" >Home</Link></p>
    </div>
    <div>
        <p><Link to="/profile" className="link" >{userObj.displayName}'s Profile</Link></p>
    </div>
</nav>

export default Navigation1;