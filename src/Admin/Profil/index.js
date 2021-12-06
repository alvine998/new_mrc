import axios from 'axios';
import React, { Component } from 'react';
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';
import "./profil.css"

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namapt:'',
            alamatpt:'',
            deskripsipt:'',
            logo:null,
            logoName:'',
            tentangust:'',
            fotoust:null,
            fotoName:'',
            collection:[]
        };
    }

    getDataProfil(){
        axios.get(`http://localhost:4000/profils`).then(
            res => {
                const collection = res.data;
                this.setState({collection})
            }
        )
    }

    handleNamapt(e){
        this.setState({namapt: e.target.value})
    }

    handleAlamatpt(e){
        this.setState({alamatpt: e.target.value})
    }

    handleDeskripsipt(e){
        this.setState({deskripsipt: e.target.value})
    }

    handleTentangust(e){
        this.setState({tentangust: e.target.value})
    }

    handleLogo(e){
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            this.setState({ logo: img, logoName: URL.createObjectURL(img) })
        }
    }

    handleFoto(e){
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            this.setState({ fotoust: img, fotoName: URL.createObjectURL(img) })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <NavAdmin />
                </div>
                <div className="row">
                    <div className="col-2 sider">
                        <Sidebar profil />
                    </div>
                    <div className="col dash">
                        <div className="container">
                            <h2><u>Profil Perusahaan</u></h2>
                            <form style={{ paddingTop: 20 }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="namapt">
                                                <h5 style={{ float: "left" }}>Nama Perusahaan</h5>
                                                <input onChange={this.handleNamapt.bind(this)} type="text" placeholder="Ketik disini ..." className="form-control" />
                                            </div>

                                            <div className="alamatpt">
                                                <h5 style={{ float: "left" }}>Alamat Perusahaan</h5>
                                                <textarea onChange={this.handleAlamatpt.bind(this)} type="text" placeholder="Ketik disini ..." className="form-control alamat" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="namapt">
                                                <h5 style={{ float: "left" }}>Logo Perusahaan</h5>
                                                <input onChange={this.handleLogo.bind(this)} type="file" className="form-control" />

                                                <img src={this.state.logoName} className="img-logo" />
                                            </div>
                                            <a href="#" className="btn btn-primary btn-simpan">Ganti Gambar</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="deskripsipt">
                                    <h5 style={{ float: "left" }}>Deskripsi Perusahaan</h5>
                                    <textarea type="text" onChange={this.handleDeskripsipt.bind(this)} placeholder="Ketik disini ..." className="form-control alamat" />
                                </div>
                                <div className="container" style={{paddingTop:20}}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="alamatpt">
                                                <h5 style={{ float: "left" }}>Tentang Ust Denny</h5>
                                                <textarea onChange={this.handleTentangust.bind(this)} type="text" placeholder="Ketik disini ..." className="form-control tentang-ust" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="namapt" style={{paddingTop:20}}>
                                                <h5 style={{ float: "left" }}>Foto Ust Denny</h5>
                                                <input onChange={this.handleFoto.bind(this)} type="file" className="form-control" />

                                                <img src={this.state.fotoName} className="img-logo" />
                                            </div>
                                            <a href="#" className="btn btn-primary btn-simpan">Ganti Foto</a>
                                        </div>
                                    </div>
                                    <div className="btn-bawah">
                                        <a className="btn btn-primary btn-ok">Simpan Data</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profil;