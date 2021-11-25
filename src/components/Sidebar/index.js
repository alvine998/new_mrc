import React, { Component } from 'react';
import "./sidebar.css"

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className="nav justify-content">
                    <a href="/admin/dashboard" className={"nav-link a-sidebar " + (this.props.dashboard ? "active" : "")}><i className="fa fa-home"></i> Dashboard</a>
                    <a href="/admin/blog" className={"nav-link a-sidebar " + (this.props.blog ? "active" : "")}><i className="fa fa-pencil"></i> Blog</a>
                    <a href="/admin/banner" className={"nav-link a-sidebar " + (this.props.banner ? "active" : "")}><i className="fa fa-picture-o"></i> Banner</a>
                    <a href="#" className={"nav-link a-sidebar " + (this.props.profil ? "active" : "")}><i className="fa fa-user"></i> Profil</a>
                    <div className="nav-link a-sidebar dropdown">
                        <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-picture-o"></i> Galeri</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a href="#" className="dropdown-item"><i className="fa fa-camera"></i> Foto</a>
                            <a href="#" className="dropdown-item"><i className="fa fa-video-camera"></i> Video</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;