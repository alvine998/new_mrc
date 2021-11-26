import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoFooter:'https://lh3.google.com/u/0/d/1-hKBD5URTnqVH52ScICOvBRMSuJsiLRB=w1366-h625-iv1'
        };
    }
    render() {
        return (
            <div>
                <footer class="w-100 py-4 flex-shrink-0">
                    <div class="container py-4">
                        <div class="row gy-4 gx-5">
                            <div class="col-lg-4 col-md-6">
                                <img src={this.state.logoFooter} className="imgStyle" />
                                <p class="small text-muted">Alamat : <br/>D'Kranji Residence 1 No.67 <br/> Kranji, Bekasi Barat, Kota Bekasi, Jawa Barat 17136</p>
                                <p class="small text-muted mb-0">&copy; Copyrights by MRC Therapy 2021</p>
                            </div>
                            <div class="col-lg-2 col-md-6">
                                <h5 class="text-white mb-3">Profil</h5>
                                <ul class="list-unstyled text-muted">
                                    <li><a href="/tentang-kami">Tentang Kami</a></li>
                                    <li><a href="/program-kami">Program Kami</a></li>
                                    <li><a href="#">Kontak Kami</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <h5 class="text-white mb-3">Sosial Media</h5>
                                <ul class="list-unstyled text-muted">
                                    <li><a href="https://id-id.facebook.com/MuslimRuqyahCenter/">Facebook : Muslim Ruqyah</a></li>
                                    <li><a href="https://www.instagram.com/ruqyah_muslim/">Instagram : @ruqyah_muslim</a></li>
                                    <li><a href="https://www.youtube.com/c/semestakutv">Youtube : Semestaku TV</a></li>
                                    <li><a href="https://www.tiktok.com/@semestakutv">Tiktok : semestakutv</a></li>
                                    <li><a href="https://api.whatsapp.com/send?phone=6281220444409&text=Assalamualaikum">Telpon : 0812-2044-4409</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <h5 class="text-white mb-3">Operasional</h5>
                                <p class="small text-muted">
                                    Setiap hari pukul 09.00 s/d 20.00 <br/>
                                    * Harap membuat janji terlebih dahulu
                                </p>
                                <a href="https://api.whatsapp.com/send?phone=6281220444409&text=Assalamualaikum"><button className="whatsapp"><i className="fa fa-whatsapp"></i> Booking via whatsapp</button></a>
                                
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;