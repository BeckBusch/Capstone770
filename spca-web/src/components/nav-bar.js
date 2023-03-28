import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Link to="/dashboard">Log In</Link>
            <Link to="/sign-in">Sign In</Link>
            {/* <ul>
                <li><a href="/sign-in">Sign In</a></li>
                <li><Link to="/sign-in">Sign In</Link></li>
            </ul> */}
        </div> 
    );
}

export default NavBar;