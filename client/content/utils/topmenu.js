import React from "react";
import {Link} from "react-router-dom";
import iconContact from "../image/mail.png"

const Home = props => {

return (
<div className="topmenu">
<div className="container">
  <nav className="navbar navbar-expand justify-content-end">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="#"><span className="icon myservices"><img src={iconContact} alt="contact" style={{width: "40px", height: "40px"}}/> </span>My services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#"><span className="icon aboutme"><img src={iconContact} alt="contact" style={{width: "40px", height: "40px"}}/> </span>About me</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#"><span className="icon contact"><img src={iconContact} alt="contact" style={{width: "40px", height: "40px"}}/> </span>Contact</Link>
      </li>
    </ul>
  </nav>
</div>
</div>    
)
}

export default Home;