import React, { Component } from 'react';
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';
import "./profil.css"

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                                                <input type="text" placeholder="Ketik disini ..." className="form-control" />
                                            </div>

                                            <div className="alamatpt">
                                                <h5 style={{ float: "left" }}>Alamat Perusahaan</h5>
                                                <textarea type="text" placeholder="Ketik disini ..." className="form-control alamat" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="namapt">
                                                <h5 style={{ float: "left" }}>Logo Perusahaan</h5>
                                                <input type="file" className="form-control" />

                                                <img src="" className="img-logo" />
                                            </div>
                                            <a href="#" className="btn btn-primary btn-simpan">Ganti Gambar</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="deskripsipt">
                                    <h5 style={{ float: "left" }}>Deskripsi Perusahaan</h5>
                                    <textarea type="text" placeholder="Ketik disini ..." className="form-control alamat" />
                                </div>
                                <div className="container" style={{paddingTop:20}}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="alamatpt">
                                                <h5 style={{ float: "left" }}>Tentang Ust Denny</h5>
                                                <textarea type="text" placeholder="Ketik disini ..." className="form-control tentang-ust" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="namapt" style={{paddingTop:20}}>
                                                <h5 style={{ float: "left" }}>Foto Ust Denny</h5>
                                                <input type="file" className="form-control" />

                                                <img src="" className="img-logo" />
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