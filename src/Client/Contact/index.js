import React, { Component } from 'react';
import { fb, ig, mrc_logo, tktk, yt } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./contact.css"

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {/* Navbar */}
                <div>
                    <Navbar kontak="active" />
                </div>

                {/* <div className="imgContainer-about">
                    <img src={mrc_logo} />
                </div> */}

                <div className="container container-contact">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.345393775506!2d106.96399137418736!3d-6.240956781929802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dfe84a78543%3A0x837c1873680a77fb!2sMRC%20Ruqyah%20Center%20Bekasi%20Therapy%20Keluarga%20sehat!5e0!3m2!1sid!2sid!4v1637911383593!5m2!1sid!2sid" className="maps" allowfullscreen="" loading="lazy" />
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4 style={{ fontWeight: 'bold' }}>Alamat MRC Therapy :</h4>
                            <div>
                                <p style={{textAlign:'left'}}>
                                    D'Kranji Residence 1 No.67 <br />
                                    Kranji, Bekasi Barat, Kota Bekasi, Jawa Barat 17136
                                </p>
                            </div>

                            {/* Kontak */}
                            <div style={{paddingTop:20}}>
                                <h4 style={{ fontWeight: 'bold' }}>Kontak</h4>
                                <div>
                                    <p style={{textAlign:'left'}}><i className="fa fa-phone"></i> 0812-2044-4409</p>
                                    <p style={{textAlign:'left'}}><i className="fa fa-envelope"></i> info@mrc-therapy.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h5 style={{ fontWeight: 'bold' }}>Follow Sosial Media Kami :</h5>
                            <div className="container sosmed">
                                <div className="row">
                                    <div className="col-2">
                                        <a href="https://id-id.facebook.com/MuslimRuqyahCenter/"><img src={fb} className="imgContainer" /></a>
                                        <p>Facebook</p>
                                    </div>
                                    <div className="col-2">
                                        <a href="https://www.instagram.com/ruqyah_muslim/"><img src={yt} className="imgContainer" /></a>
                                        <p>Youtube</p>
                                    </div>
                                    <div className="col-2">
                                        <a href="https://www.youtube.com/c/semestakutv"><img src={ig} className="imgContainer" /></a>
                                        <p>Instagram</p>
                                    </div>
                                    <div className="col-2">
                                        <a href="https://www.tiktok.com/@semestakutv"><img src={tktk} className="imgContainer" /></a>
                                        <p>Tiktok</p>
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

export default Contact;