import axios from 'axios';
import React, { Component } from 'react';
import { mrc_logo } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./artikel.css"

class Artikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: []
        };
    }

    getDataArtikels() {
        axios.get(`http://localhost:4000/artikels`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                this.setState({ collection })
            }
        )
    }

    componentDidMount() {
        this.getDataArtikels();
    }

    render() {
        return (
            <div>

                {/* Navbar */}
                <div>
                    <Navbar blog="active" />
                </div>

                {/* <div className="imgContainer-about">
                    <img src={mrc_logo} />
                </div> */}

                <div style={{ paddingBottom: 20, paddingTop: 70 }}>
                    <h2><u>Artikel MRC Therapy</u></h2>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            {
                                this.state.collection.reverse() && this.state.collection.map((res, i) => {
                                    while (i < 1) {
                                        return (
                                            <a key={i} href="/artikel/isi-artikel">
                                                <div className="box-img-artikel">
                                                    <img className="img-artikels w-100 h-100" src={`http://localhost:4000/upload/images/${res.gambar}`} />
                                                    <h5 className="judul-artikel">{res.judul}</h5>
                                                </div>
                                            </a>
                                        )
                                    }
                                })
                            }

                        </div>
                        <div className="col-3">
                            <a href="/artikel/isi-artikel">
                                <div className="box-img-artikel2">
                                    <h5>Image Artikel</h5>
                                    <h5>Artikel</h5>
                                </div>
                            </a>
                            <a href="/artikel/isi-artikel">
                                <div className="box-img-artikel2">
                                    <h5>Image Artikel</h5>
                                    <h5>Artikel</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-3">
                            <a href="/artikel/isi-artikel">
                                <div className="box-img-artikel2">
                                    <h5>Image Artikel</h5>
                                    <h5>Artikel</h5>
                                </div>
                            </a>
                            <a href="/artikel/isi-artikel">
                                <div className="box-img-artikel2">
                                    <h5>Image Artikel</h5>
                                    <h5>Artikel</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {
                    this.state.collection.map((result, i) => {
                        return (
                            <div key={i} className="container">
                                <div className="box-artikels">
                                    <div className="row">
                                        <div className="col-2">
                                            <img className="img-artikels" src={`http://localhost:4000/upload/images/${result.gambar}`} />
                                        </div>
                                        <div className="col">
                                            <h5 style={{ fontWeight: 'bold' }}>{result.judul}</h5>
                                            <p style={{ textAlign: 'justify', padding: 20 }}>
                                                {result.paragraph1.substr(0, 200)}....
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <a className="btn btn-primary w-100 margin-img-artikels">Baca</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                {/* <div className="container">
                    <div className="box-artikels">
                        <div className="row">
                            <div className="col-2">
                                <img className="img-artikels" />
                            </div>
                            <div className="col">
                                <h5>Judul</h5>
                                <p>
                                    Preview
                                </p>
                            </div>
                            <div className="col-2">
                                <a className="btn btn-primary w-100 margin-img-artikels">Baca</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Footer */}
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Artikel;