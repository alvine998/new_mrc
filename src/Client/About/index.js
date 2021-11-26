import React, { Component } from 'react';
import { mrc_logo } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./about.css"

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar tentang="active" />
                </div>

                <div>
                    <div className="imgContainer-about">
                        <img src={mrc_logo} />
                    </div>

                    {/* Definisi MRC */}
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="square-mrc-about">
                                    <h5>Apa itu MRC Therapy ?</h5>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="square-mrc-about">
                                    <h5>Image</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our team */}
                    <div>
                        <h2><u>Our Team</u></h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <div className="box-our-team">
                                        <h5>Pak Denny</h5>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="box-our-team">
                                        <h5>Alvine</h5>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="box-our-team">
                                        <h5>Bagas</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default About;