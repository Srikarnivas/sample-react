import React from "react";

export default function Navbar(){
    return(
        <div>
            <nav class="navbar bg-primary ">
                <div class="container-fluid">
                    <a class="navbar-brand ">User Data</a>
                    <button className="btn btn-outline-light">
                        Add User
                    </button>
                </div>
            </nav>
        </div>
    )
}