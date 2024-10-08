import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <nav class="navbar bg-primary ">
                <div class="container-fluid">
                    <a class="navbar-brand ">User Data</a>
                    <Link className="btn btn-outline-light" to="/adduser">
                        Add User
                    </Link>
                </div>
            </nav>
        </div>
    )
}