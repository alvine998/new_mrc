import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./isiartikel.css"

class IsiArtikel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar blog="active" />
                </div>

                <div className="container" style={{ paddingBottom: 20 }}>
                    <h2>Artikel</h2>
                    <div className="row">
                        <div className="col">
                            <div className="box-img">
                                <h5>Image</h5>
                                <h5>Judul Artikel</h5>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="box-side">
                                <h5>Image</h5>
                                <h5>Judul Artikel</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ paddingBottom: 20 }}>
                        <div className="col">
                            <div className="box-artikel">
                                <h5>Image</h5>
                                <h5>Judul Artikel</h5>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>

                {/* Footer */}
                <div className="position">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default IsiArtikel;