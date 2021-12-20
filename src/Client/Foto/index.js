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
        axios.get('http://localhost:4000/fotos').then(
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
                                        <img src={`http://localhost:4000/upload/images/${res.uri}`} className='foto-box-img' alt={res.judul} />
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