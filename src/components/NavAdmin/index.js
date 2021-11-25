import React, { Component } from 'react';
import "./navadmin.css"

class NavAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <nav className="nav justify-content-end bgColor">
                    <div className="left">
                        <a href="/admin/dashboard" className="navbar-brand colour">MRC Therapy</a>
                    </div>
                    <a href="/admin/login" className="nav-link colour">Sign Out</a>
                </nav>
            </div>
        );
    }
}

export default NavAdmin;