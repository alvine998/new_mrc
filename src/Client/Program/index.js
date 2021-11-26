import React, { Component } from 'react';
import "./program.css"
import { mrc_logo } from '../../assets';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

class Program extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar program="active" />
                </div>

                <div>
                    <div className="imgContainer-about">
                        <img src={mrc_logo} />
                    </div>

                    <h2><u>Program MRC Therapy</u></h2>

                    {/* Card Program */}
                    <div className="container" style={{paddingTop:100, paddingBottom:100}}>
                        <div className="row">
                            <div className="col-3">
                                <a><button className="btn-ruqyah">Ruqyah Terapi Syar'i</button></a>
                            </div>
                            <div className="col-3 right">
                                <a><button className="btn-terapi">Terapi Reposisi Tulang</button></a>
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

export default Program;