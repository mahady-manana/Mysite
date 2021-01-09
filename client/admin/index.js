import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// importing internals components
import AdminRouter from "./admin"

const Admin = () => {

return (
<Router>
    <Route exact path = "/admin" component={AdminRouter}/>
</Router>
)
}

export default Admin;