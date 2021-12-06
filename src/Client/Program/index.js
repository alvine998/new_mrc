import React, { Component } from 'react';
import "./program.css"
import { foto_ruqyah, mrc_logo, terapi } from '../../assets';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

class Program extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btns: 'ruqyah'
        };
    }

    renderRuqyah() {
        return (
            <div>
                <div className="box-image-ruqyah">
                    <img src={foto_ruqyah} className="img-ruqyah" />
                    <p className="paragh-pad">
                        Muslimah Ruqyah Center adalah sebuah perusahaan yang Didirikan sejak tahun 2005
                        yang kini telah tersebar di Seluruh Pulau Jawa.
                        Bergerak di bidang Dakwah dan pengobatan melalui metode Al-Qur’an
                        yang sering disebut dengan Ruqyah Syar’iyyah. <br/>
                        Sebagai penunjang penyembuhan, Kami menggunakan obat-obat herbal 
                        yang sesuai dengan anjuran Nabi seperti serbuk bidara, minyak zaitun, 
                        kurma aliyah, air zam-zam, madu, serta garam himalaya.
                    </p>
                </div>
            </div>
        )
    }

    renderTerapi() {
        return (
            <div>
                <div className="box-image-terapi">
                    <img src={terapi} className="img-terapi"/>
                    <p>
                        Coming Soon
                    </p>
                </div>
            </div>
        )
    }

    onRuqyah() {
        this.setState({ btns: 'ruqyah' })
    }

    onTerapi() {
        this.setState({ btns: 'terapi' })
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar program="active" />
                </div>

                <div>
                    <div className="imgContainer-about">
                        <img src={mrc_logo} />
                    </div>

                    <h2><u>Program MRC Therapy</u></h2>

                    {/* Card Program */}
                    <div className="container" style={{ paddingTop: 20, paddingBottom: 100 }}>
                        <div className="row">
                            <div className="col-3">
                                <a><button onClick={() => this.onRuqyah()} className={"btn-ruqyah " + (this.state.btns == 'ruqyah' ? 'actived' : "")}>Ruqyah Terapi Syar'i</button></a>
                            </div>
                            <div className="col-3 right">
                                <a><button onClick={() => this.onTerapi()} className={"btn-terapi " + (this.state.btns == 'terapi' ? 'actived' : "")}>Terapi Reposisi Tulang</button></a>
                            </div>
                        </div>

                        <div>
                            {
                                this.state.btns == 'ruqyah' ? this.renderRuqyah() : this.renderTerapi()
                            }
                        </div>
                        <div>

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

export default Program;