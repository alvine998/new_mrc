import React, { Component } from 'react';
import "./sidebar.css"

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    handleChevron() {
        this.setState({ isActive: !this.state.isActive })
    }
    render() {
        return (
            <div>
                <div className="nav justify-content">
                    <a href="/admin/dashboard" className={"nav-link a-sidebar " + (this.props.dashboard ? "active" : "")}><i className="fa fa-home"></i> Dashboard</a>
                    <a href="/admin/blog" className={"nav-link a-sidebar " + (this.props.blog ? "active" : "")}><i className="fa fa-pencil"></i> Blog</a>
                    <a href="/admin/banner" className={"nav-link a-sidebar " + (this.props.banner ? "active" : "")}><i className="fa fa-picture-o"></i> Banner</a>
                    <a href="/admin/profil" className={"nav-link a-sidebar " + (this.props.profil ? "active" : "")}><i className="fa fa-user"></i> Profil</a>
                    <a href="/admin/profil" className={"nav-link a-sidebar " + (this.props.programs ? "active" : "")}><i className="fa fa-building"></i> Program</a>
                    {/* 
                    <div className="nav-link a-sidebar dropdown">
                        <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-picture-o"></i> Galeri</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a href="#" className="dropdown-item"><i className="fa fa-camera"></i> Foto</a>
                            <a href="#" className="dropdown-item"><i className="fa fa-video-camera"></i> Video</a>
                        </div>
                    </div> */}

                    <div class="accordion centering" id="accordionExample">
                        <div class="card color-card transparent">
                            <div class="card-header" id="headingOne">
                                <h2 style={{ color: "white" }} class="mb-0">
                                    <button style={{ color: "white" }} onClick={() => this.handleChevron()} class="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i className="fa fa-picture-o"></i> Galeri <i className={"fa " + (this.state.isActive ? "fa-chevron-up" : "fa-chevron-down")}></i>
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse a-sidebar" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <a style={{ color: "white" }} className={this.props.foto ? "active" : ""} href="/admin/galeri-foto"><i className="fa fa-camera"></i> Foto</a>
                                </div>
                                <div class="card-body">
                                    <a style={{ color: "white" }} className={""+(this.props.video ? "active" : "")} href="/admin/galeri-video"><i className="fa fa-video-camera"></i> Video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;