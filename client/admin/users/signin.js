import React from "react";

const SignIn = () => {

const submitSignin = event => {
    event.preventDefault();
    console.log("Not ready to do action!")
}
return (
<section className="signin_section">
    <div className="container">
        <div className="from_signin">
            <form onSubmit={submitSignin}>
                <div className="form-group">
                  <label for="email">Email address :</label>
                  <input type="email" className="form-control" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                  <label for="pwd">Password :</label>
                  <input type="password" className="form-control" placeholder="Enter password"/>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    </div>
</section>
)
}

export default SignIn;