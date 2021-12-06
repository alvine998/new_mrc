import React, { Component } from 'react';
import { mrc_logo, ust_denny } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./about.css"

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar tentang="active" />
                </div>

                <div>
                    <div className="imgContainer-about">
                        <img src={mrc_logo} />
                    </div>

                    {/* Definisi MRC */}
                    <h2 className="bottom-about"><u>Profil MRC Therapy</u></h2>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="square-mrc-about">
                                    <h5>Apa itu MRC Therapy ?</h5>
                                    <p className="paragh-about">
                                        MRC Therapy atau Muslim Ruqyah Center Therapy adalah metode pengobatan 
                                        untuk berbagai penyakit medis maupun non medis melalui ayat-ayat 
                                        Al-qur'an yang dibacakan atau dido'akan kepada seseorang yang mengalami 
                                        gangguan penyakit.

                                        Sebagai penunjang penyembuhan, Kami menggunakan obat-obat herbal 
                                        yang sesuai dengan anjuran Nabi seperti serbuk bidara, minyak zaitun, 
                                        kurma aliyah, air zam-zam, madu, serta garam himalaya.
                                    </p>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="square-mrc-about">
                                    <img src={mrc_logo} className="w-100 h-100" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our team */}
                    <div>
                        <h2 className="bottom-about"><u>Pimpinan MRC Therapy</u></h2>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="square-mrc-about">
                                        <h5>Tentang Pimpinan</h5>
                                        <p className="paragh-ust">
                                            Ustadz Denny Adrian atau biasa disebut Kang Denny merupakan pimpinan dari Semesta Bertasbih Group
                                            yang menaungi MRC Therapy Syar'i. Pemilik sekaligus pimpinan MRC ini
                                            sudah berpengalaman sejak tahun 2005 dalam mengobati orang-orang yang
                                            terkena gangguan jin maupun penyakit ain. Selain melakukan pengobatan
                                            ruqyah secara syar'i, beliau juga dapat melakukan pengobatan terapi
                                            reposisi tulang belakang seperti mengobati syaraf terjepit, sendi
                                            yang kaku karena terjatuh, dan lain-lain.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="square-mrc-about">
                                        <img className="w-100 h-100" src={ust_denny} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default About;