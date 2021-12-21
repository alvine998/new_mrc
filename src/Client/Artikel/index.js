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
        axios.get(`https://expressmrcweb.herokuapp.com/artikels/published`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                this.setState({ collection })
            }
        )
    }

    async sendIdArtikel(id) {
        await localStorage.setItem('idArtikel', id)
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
                                            <div>
                                                {
                                                    res.status == 'published' ? (
                                                        <a key={i} href={`/artikel/isi-artikel?id=${res._id}`} onClick={() => this.sendIdArtikel(res._id)}>
                                                            <div className="box-img-artikel">
                                                                <img className="img-artikels w-100 h-100" src={`https://expressmrcweb.herokuapp.com/upload/images/${res.gambar}`} />
                                                                <h5 className="judul-artikel">{res.judul}</h5>
                                                            </div>
                                                        </a>
                                                    ) : (<div />)
                                                }
                                            </div>
                                        )
                                    }
                                })
                            }

                        </div>
                        <div className="col-3">
                            {
                                this.state.collection.sort(() => Math.random() - Math.random()).find(() => true) && this.state.collection.map((res, i) => {
                                    while (i < 2) {
                                        return (
                                            <a key={i} href={`/artikel/isi-artikel?id=${res._id}`} onClick={() => this.sendIdArtikel(res._id)}>
                                                <div className="box-img-artikel2">
                                                    <img src={`https://expressmrcweb.herokuapp.com/upload/images/${res.gambar}`} alt={res.judul} className='img-artikel2' />
                                                    <h5 className='judul-artikel'>{res.judul}</h5>
                                                </div>
                                            </a>
                                        )
                                    }
                                })
                            }

                            {/* <a href="/artikel/isi-artikel">
                                <div className="box-img-artikel2">
                                    <h5>Image Artikel</h5>
                                    <h5>Artikel</h5>
                                </div>
                            </a> */}
                        </div>

                        <div className="col-3">
                            {
                                this.state.collection.sort(() => Math.random() - Math.random()).find(() => true) && this.state.collection.map((res, i) => {
                                    while (i < 2) {
                                        return (
                                            <a key={i} href={`/artikel/isi-artikel?id=${res._id}`} onClick={() => this.sendIdArtikel(res._id)}>
                                                <div className="box-img-artikel2">
                                                    <img src={`https://expressmrcweb.herokuapp.com/upload/images/${res.gambar}`} alt={res.judul} className='img-artikel2' />
                                                    <h5 className='judul-artikel'>{res.judul}</h5>
                                                </div>
                                            </a>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>

                {
                    this.state.collection.map((result, i) => {
                        if (result.status == 'published') {
                            return (
                                <div key={i} className="container">
                                    <div className="box-artikels">
                                        <div className="row">
                                            <div className="col-2">
                                                <img className="img-artikels" src={`https://expressmrcweb.herokuapp.com/upload/images/${result.gambar}`} />
                                            </div>
                                            <div className="col">
                                                <h5 style={{ fontWeight: 'bold' }}>{result.judul}</h5>
                                                <p style={{ textAlign: 'justify', padding: 20 }}>
                                                    {result.paragraph1.substr(0, 200)}....
                                                </p>
                                            </div>
                                            <div className="col-2">
                                                <a className="btn btn-primary w-100 margin-img-artikels" href={`/artikel/isi-artikel?id=${result._id}`} onClick={() => this.sendIdArtikel(result._id)}>Baca</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
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