import React, { Component } from "react";
import './home.css'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OwlCarousel from "react-owl-carousel";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";
import { consult, envelopes, herbal, houses, icon_1, play_store, qr_code } from "../../assets";

const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummy: "https://dummyimage.com/16:9x1080",
            collectionBanner: [],
            publish: [],
            dummyCard: "https://dummyimage.com/286x180",
            dummyOwl: "https://dummyimage.com/350x350",
            vector1: 'https://image.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg'
        };
    }

    getBanner() {
        axios.get(`https://expressmrcweb.herokuapp.com/banners/`).then(
            res => {
                const collectionBanner = res.data;
                this.setState({ collectionBanner })
                console.log(collectionBanner.map((ress, i) => i))
            }
        )
    }

    async sendDataArtikel(id) {
        await localStorage.setItem('idArtikel', id)
    }

    componentDidMount() {
        this.getBanner();
        this.getDataPublished();
    }

    getDataPublished() {
        axios.get(`https://expressmrcweb.herokuapp.com/artikels/published`).then(
            res => {
                const publish = res.data;
                this.setState({ publish })
            }
        )
    }

    render() {
        return (
            <div className="loader">
                {/* <a className="whatsapp" target="_blank"><i class="fa fa-whatsapp my-whatsApp"></i></a> */}
                <Navbar beranda="active" />
                {/* Isi Home */}
                <div>
                    {/* Carousel Start */}
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            {
                                this.state.collectionBanner && this.state.collectionBanner.map((res, i) => {
                                    return (
                                        <div className={"carousel-item " + (i == 0 ? "active" : "")}>
                                            <img src={`https://expressmrcweb.herokuapp.com/upload/images/${res.gambar}`} class="d-block w-100 h-20" alt="..." />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                <h5>{res.gambar}</h5>
                                                <p>{res.gambar}</p>
                                            </div> */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* Carousel End */}

                    {/* MRC Therapy */}
                    <div style={{ paddingTop: 20 }}>
                        <h2><u>MRC Therapy</u></h2>
                        <div className="row row-cols-1 row-cols-md-2 g-2">
                            <div className="col">
                                <img src={this.state.vector1} className="imgMrc" />
                            </div>
                            <div className="col spacing">
                                <p className="responsive-p" style={{ textAlign: 'justify', paddingRight: 40, paddingTop: 40 }}>
                                    MRC Therapy atau Muslim Ruqyah Center Therapy adalah metode pengobatan untuk berbagai penyakit medis maupun non medis melalui ayat-ayat Al-qur'an yang dibacakan atau dido'akan kepada seseorang yang mengalami gangguan penyakit.
                                    <br />
                                    Sebagai penunjang penyembuhan, Kami menggunakan obat-obat herbal yang sesuai dengan anjuran Nabi seperti serbuk bidara, minyak zaitun, kurma aliyah, air zam-zam, madu, serta garam himalaya.
                                </p>

                                <a href="/program-kami"><button className="color-button">Selengkapnya</button></a>
                            </div>
                        </div>
                    </div>

                    {/* Mengapa Harus MRC Therapy */}
                    <div style={{ paddingTop: 0 }}>
                        <div className="square-why">
                            <h2 style={{ paddingBottom: 20 }}><u>Mengapa Harus MRC Therapy ? </u></h2>
                            <OwlCarousel
                                items={1}
                                className="owl-theme"
                                {...options}
                            >
                                <div className="item">
                                    <div className="img">
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <img src={envelopes} className="w-100" />
                                                </div>
                                                <div className="flip-card-back">
                                                    <h2>Langsung Ditangani Oleh Ahlinya</h2>
                                                    <p>
                                                        Pelayanan langsung ditangani oleh pimpinan MRC
                                                        yaitu Ust. Adrian Ibrahim atau Kang Denny bukan
                                                        oleh asisten atau wakilnya.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* #2 item */}
                                <div className="item">
                                    <div className="img">
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <img src={herbal} className="w-100" />
                                                </div>
                                                <div className="flip-card-back">
                                                    <h2>Menggunakan Obat Herbal Alami</h2>
                                                    <p>
                                                        Pengobatan MRC menggunakan herbal yang teruji
                                                        dan sesuai syar'i sehingga tidak ada hal-hal
                                                        yang melanggar hukum islam.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* #3 item */}
                                <div className="item">
                                    <div className="img">
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <img src={houses} className="w-100" />
                                                </div>
                                                <div className="flip-card-back">
                                                    <h2>Therapy di Rumah</h2>
                                                    <p>
                                                        Therapy di MRC kini dapat dilakukan di rumah Anda
                                                        dengan melakukan booking untuk menentukan jadwal terlebih dahulu.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* #4 item */}
                                <div className="item">
                                    <div className="img">
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <img src={consult} className="w-100" />
                                                </div>
                                                <div className="flip-card-back">
                                                    <h2>Konsultasi Aman dan Nyaman</h2>
                                                    <p>
                                                        Anda dapat berkonsultasi tentang berbagai masalah
                                                        kehidupan, asmara, bisnis, dan lain-lain.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>

                    {/* Blog Start */}
                    <center style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <h2><u>Artikel</u></h2>
                        <div className="row row-cols-1 row-cols-md-3 g-2" style={{ paddingTop: 20 }}>
                            {
                                this.state.publish.reverse().map((result, i) => {
                                    while (i < 3) {
                                        return (
                                            <div key={i} className="col">
                                                <div class="card" className="cardImg">
                                                    <img src={`https://expressmrcweb.herokuapp.com/upload/images/${result.gambar}`} class="card-img-top sized" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{result.judul}</h5>
                                                        {/* <p class="card-text">{result.paragraph1.substr(0, 20)}</p> */}
                                                        <a href={`/artikel/isi-artikel?id?=${result._id}`} onClick={() => this.sendDataArtikel(result._id)} class="btn btn-primary colortrue">Lihat</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                            {/* <div className="col">
                                <div class="card h-100" className="cardImg">
                                    <img src={this.state.dummyCard} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary colortrue">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card h-100" className="cardImg">
                                    <img src={this.state.dummyCard} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary colortrue">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card h-100" className="cardImg">
                                    <img src={this.state.dummyCard} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary colortrue">Go somewhere</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </center>
                    {/* Blog End */}

                    {/* Download MRC */}
                    <div style={{ paddingTop: 20 }}>
                        <h2><u>Download Aplikasi MRC-Therapy</u></h2>
                    </div>

                    {/* Download MRC App */}
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <img src={qr_code} className="size-qr" />
                            </div>
                            <div className="col">
                                <a href="https://play.google.com/store/apps/details?id=com.semesta_mrc2"><img className="resp-playstore" src={play_store} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;