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

                <div style={{paddingTop:20}}>

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
                            <div className="col-md-5">
                                <div className="square-mrc-about">
                                    <img src={mrc_logo} className="w-100 h-100 responsive-img" />
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
                                <div className="col-md-5">
                                    <div className="square-mrc-about">
                                        <img className="w-100 h-100" src={ust_denny} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="faq-bot">
                        <h2 className="bottom-about"><u>FAQ</u></h2>
                        {/* Collapse Start */}
                        <div className="container">
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button className="btn position-collapse" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <p className="p-hover">Saya Ingin Berkonsultasi Secara Langsung, Apa Yang Harus Saya Lakukan ? (Klik Disini)</p>
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body text-position">
                                            Untuk dapat konsultasi secara langsung dapat mendatangi
                                            alamat Kami di D'Kranji Residence 1 No.67, Kranji, Bekasi Barat,
                                            Kota Bekasi, atau melalui telepon dan Whatsapp di 0812-2044-4409
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button class="btn collapsed position-collapse" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <p className="p-hover">Berapa biaya yang perlu dikeluarkan ? (Klik Disini)</p>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body text-position">
                                            Anda hanya cukup mengeluarkan biaya sebesar Rp 200.000,- s/d Rp 250.000,- untuk sekali terapi.
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h2 class="mb-0">
                                            <button class="btn collapsed position-collapse" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <p className="p-hover">Apakah MRC Theraphy ini bisa mengobati penyakit ? (Klik Disini)</p>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div class="card-body text-position">
                                            Ya, Inshaallah dengan izin Allah segala penyakit baik
                                            dari medis maupun non medis dapat disembuhkan dengan khasiat dari bacaan
                                            Al-Qur'an dan herbal sesuai anjuran Nabi.
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingFour">
                                        <h2 class="mb-0">
                                            <button class="btn collapsed position-collapse" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <p className="p-hover">Apakah MRC Therapy ini juga bisa ruqyah rumah ? (Klik Disini)</p>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div class="card-body text-position">
                                            Ya, jika terdapat banyak gangguan jin atau hal yang tidak wajar di rumah
                                            maka Kami dapat dipanggil langsung ke rumah Anda untuk mengatasinya.
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingFive">
                                        <h2 class="mb-0">
                                            <button class="btn collapsed position-collapse" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                <p className="p-hover">Keluhan Apa Saja Yang Bisa Ditangani ? (Klik Disini)</p>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                        <div class="card-body text-position">
                                            Kami terbiasa menangani penyakit non medis seperti gangguan
                                            tidak terdeteksi baik sihir maupun santet, serta ruqyah tempat usaha atau rumah.
                                            Untuk penyakit medis, kami biasa menangani penyakit seperti asam lambung, gerd,
                                            vertigo, pegal disekitar leher dan punggung.
                                        </div>
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