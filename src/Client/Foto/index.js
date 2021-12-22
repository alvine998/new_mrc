import axios from 'axios';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./foto.css"

class FotoClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: []
        };
    }

    getFotos() {
        axios.get('https://expressmrcweb.herokuapp.com/fotos').then(
            res => {
                const collection = res.data;
                this.setState({ collection });
            }
        )
    }

    componentDidMount() {
        this.getFotos()
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar galeri />
                </div>

                <div className='container'>
                    <h2 style={{ paddingTop: 20 }}><u>Galeri Foto</u></h2>
                    <div className='row'>
                        {
                            this.state.collection.reverse().map((res, i) => {
                                return (
                                    <div key={i} className='col-md-3'>
                                        <a href='#' data-bs-toggle="modal" data-bs-target={"#exampleModal"}>
                                            <img src={`https://expressmrcweb.herokuapp.com/upload/images/${res.gambar}`} className='foto-box-img' alt={res.judul} />
                                        </a>

                                        {/* Modal Image Zoom Out*/}
                                        <div className='modal fade' id='exampleModal' tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className='modal-dialog'>
                                                <div className='modal-content'>
                                                    <div className='modal-header'>
                                                        <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label='Close'></button>
                                                    </div>
                                                    <div className='modal-body'>
                                                        <img src={`https://expressmrcweb.herokuapp.com/upload/images/${res.gambar}`} className='foto-box-img-modal' alt={res.judul} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div style={{ paddingTop: 30 }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default FotoClient;