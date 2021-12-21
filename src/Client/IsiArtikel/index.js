import axios from 'axios';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./isiartikel.css"

class IsiArtikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,
            para1: '',
            para2: '',
            para3: '',
            judul: '',
            penulis: '',
            collection: []
        };
    }

    getAllArtikel() {
        axios.get(`https://expressmrcweb.herokuapp.com/artikels/published`).then(
            res => {
                const collection = res.data;
                this.setState({ collection })
            }
        )
    }

    async getDataArtikel() {
        let artikel = localStorage.getItem('idArtikel');
        // let artikels = localStorage.getItem()
        console.log("id : ", artikel);

        axios.get(`https://expressmrcweb.herokuapp.com/artikels/${artikel}`).then(
            res => {
                const result = res.data;
                this.setState({
                    images: result.gambar,
                    judul: result.judul,
                    para1: result.paragraph1,
                    para2: result.paragraph2,
                    para3: result.paragraph3,
                    penulis: result.penulis
                })
            }
        )
    }

    async sendIdArtikel(id) {
        await localStorage.setItem('idArtikel', id)
    }

    componentDidMount() {
        this.getDataArtikel();
        this.getAllArtikel();
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar blog="active" />
                </div>

                <div className="container" style={{ paddingBottom: 20 }}>
                    <h2>Artikel</h2>
                    <div style={{ paddingTop: 50, paddingLeft: 20 }}>
                        <p style={{ float: 'left' }}>/ <a href='/artikel'>Artikel</a> / <a>{this.state.judul}</a></p>
                    </div>
                    <div className="box-img">
                        <img className='img-isi-artikel' src={`http://localhost:4000/upload/images/${this.state.images}`} />
                    </div>

                    {/* <div className="col-3">
                            <div className="box-side">
                                <h5>Artikel Lain</h5>
                            </div>
                        </div> */}
                    <div className="row" style={{ paddingBottom: 30 }}>
                        <div className="col">
                            <div className="box-artikel">
                                <h2>{this.state.judul}</h2>
                                <p style={{ textAlign: 'left' }}>Penulis : {this.state.penulis}</p>
                                <p style={{ textAlign: 'justify', lineHeight: 2 }}>
                                    {this.state.para1}<br /><br />
                                    {this.state.para2}<br /><br />
                                    {this.state.para3}
                                </p>
                                <hr />
                                <h5 style={{ textAlign: 'left' }}>Kata Kunci : </h5>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="box-side">
                                <h5>Artikel Lain</h5>
                                {
                                    this.state.collection.sort(() => Math.random() - Math.random()).find(() => true) && this.state.collection.map((res, i) => {
                                        if (res.status == 'published') {
                                            while (i < 3) {
                                                return (
                                                    <div className='card' key={i} style={{ marginBottom: 20 }}>
                                                        <img className='card-img-top img-side' src={`http://localhost:4000/upload/images/${res.gambar}`} alt={res.judul} />
                                                        <div className='card-body'>
                                                            <h5 className='card-title'>{res.judul}</h5>
                                                            {/* <p className='card-text'>{res.paragraph1.substr(0,20)}</p> */}
                                                            <a className='btn btn-primary' href={`/artikel/isi-artikel?id=${res._id}`} onClick={() => this.sendIdArtikel(res._id)}>Selengkapnya</a>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }
                                    })
                                }
                            </div>
                        </div>
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