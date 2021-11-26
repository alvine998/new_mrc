import React, { Component } from 'react';
import { mrc_logo } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./artikel.css"

class Artikel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>

                {/* Navbar */}
                <div>
                    <Navbar blog="active" />
                </div>

                <div className="imgContainer-about">
                    <img src={mrc_logo} />
                </div>

                <div style={{ paddingBottom: 20 }}>
                    <h2><u>Artikel MRC Therapy</u></h2>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <a href="#">
                                <div className="box-img-artikel">
                                    <h5>Image Artikel</h5>
                                    <h5>Artikel</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="#">
                                <div className="box-img-artikel2">
                                    <h5>Image Artikel</h5>
                                    <h5>Artikel</h5>
                                </div>
                            </a>
                            <a href="#">
                                <div className="box-img-artikel2">
                                    <h5>Image Artikel</h5>
                                    <h5>Artikel</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-3">
                            <a href="#">
                                <div className="box-img-artikel2">
                                    <h5>Image Artikel</h5>
                                    <h5>Artikel</h5>
                                </div>
                            </a>
                            <a href="#">
                                <div className="box-img-artikel2">
                                    <h5>Image Artikel</h5>
                                    <h5>Artikel</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Artikel;