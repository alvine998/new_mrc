import React, { Component } from "react";
import { mrc_logo } from "../../assets";
import "./navbar.css"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: "https://lh3.google.com/u/0/d/1ujzb2svDnZ22bbx7W7ICRe84O9V7kJdc=w1366-h625-iv1",
            isActive: 'active'
        };
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-center navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                            <img src={mrc_logo} className="imgNav" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a className={"nav-link " + (this.props.beranda ? "active" : "")} aria-current="page" href="/">Beranda</a>
                                </li>

                                <li class="nav-item">
                                    <a className={"nav-link " + (this.props.program ? "active" : "")} href="/program-kami">Program Kami</a>
                                </li>

                                <li class="nav-item">
                                    <a className={"nav-link " + (this.props.tentang ? "active" : "")} href="/tentang-kami">Tentang Kami</a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class={"nav-link dropdown-toggle " + (this.props.galeri ? "active" : "")} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Galeri
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="/galeri-foto">Foto</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="/galeri-video">Video</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a className={"nav-link " + (this.props.kontak ? "active" : "")} href="/kontak-kami">Kontak Kami</a>
                                </li>

                                <li class="nav-item">
                                    <a className={"nav-link " + (this.props.blog ? "active" : "")} href="/artikel">Artikel</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;