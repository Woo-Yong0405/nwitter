import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

function app() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return <AppRouter isLoggedIn = {isLoggedIn} />
}

export default App;