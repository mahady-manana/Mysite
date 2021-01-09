import React from "react"
import {Route, Link} from "react-router-dom"
import Menu from "./menu";
import Post from "./post";
import Dashbord from "./dashbord";

const Admin = props => {    


return (
<article className="admin">
    <div className="inner-content">
      <nav className="topnav-admin">
        <div className="menu">
            <nav className="navbar navbar-expand-sm bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/admin/">Dashbord</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/admin/menu/">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/admin/post/">Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#">Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
      </nav>
      <div className="main-admin">
        <Route exact path="/admin/" component={Dashbord}/>
        <Route path="/admin/menu/" component={Menu}/>
        <Route path="/admin/post/" component={Post}/>
      </div>
    </div>
</article>    
)
}

export default Admin;