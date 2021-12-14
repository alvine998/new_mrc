import axios from 'axios';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./isiartikel.css"

class IsiArtikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:null,
            para1:'',
            para2:'',
            para3:'',
            judul:''
        };
    }

    async getDataArtikel(){
        let artikel = localStorage.getItem('idArtikel');
        // let artikels = localStorage.getItem()
        console.log("id : ", artikel);

        axios.get(`http://localhost:4000/artikels/${artikel}`).then(
            res => {
                const result = res.data;
                this.setState({
                    images: result.gambar,
                    judul: result.judul,
                    para1: result.paragraph1,
                    para2: result.paragraph2,
                    para3: result.paragraph3,
                })
            }
        )
    }

    componentDidMount(){
        this.getDataArtikel();
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
                            <div style={{paddingTop:50, paddingLeft:20}}>
                                <p style={{float:'left'}}>/ <a href='/artikel'>Artikel</a> / <a>{this.state.judul}</a></p>
                            </div>
                            <div className="box-img">
                                <img className='img-isi-artikel' src={`http://localhost:4000/upload/images/${this.state.images}`} />
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
                                <h2>{this.state.judul}</h2>
                                <p style={{textAlign:'justify', lineHeight:2}}>
                                    {this.state.para1}<br/>
                                    {this.state.para2}<br/>
                                    {this.state.para3}
                                </p>
                            </div>
                        </div>
                        <div className="col-3">
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