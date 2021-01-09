import React from "react"
import {Link} from "react-router-dom";

const Home = props => {

return (
<div className="main-menu" id="menu-principal">
  <div className="container">
    <nav className="navbar navbar-expand">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <Link className="nav-link" to="#">Active</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="#">Link</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="#">Link</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link disabled" to="#">Disabled</Link>
        </li>
        </ul>
    </nav>
  </div>
</div>   
)
}

export default Home;