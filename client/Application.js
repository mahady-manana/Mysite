import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// importing internals components
// import Private from "./admin/users/auth.controller";
import PublicRouter from "./content/entry";
import Admin from "./admin/admin";

const Application = () => {

return (
<Router>
    <Switch>
        <Route path = "/admin/" component={Admin}/>
        <Route exact path = "*" component={PublicRouter}/>
    </Switch>
</Router>
)
}

export default Application;