import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./style.css"

import Home from "./home"
// Top menu
import Topmenu from "./utils/topmenu"
import Menu from "./utils/menu"

const MainRouter = () => {

return (
<Router>
  <div className="page-entry">
    <div className="header">
      <Topmenu/>
      <Menu/>
    </div>
    <div className="entry-content">
      <Route exact path="/" component={Home}/>
    </div>
   </div>
</Router>
)
}

export default MainRouter;