import React, { Component } from "react";
import './home.css'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OwlCarousel from "react-owl-carousel";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";

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
        axios.get(`http://localhost:4000/banners/`).then(
            res => {
                const collectionBanner = res.data;
                this.setState({ collectionBanner })
                console.log(collectionBanner.map((ress, i) => i))
            }
        )
    }

    componentDidMount() {
        this.getBanner();
        this.getDataPublished();
    }

    getDataPublished() {
        axios.get(`http://localhost:4000/artikels/published`).then(
            res => {
                const publish = res.data;
                this.setState({ publish })
            }
        )
    }

    render() {
        return (
            <div className="loader">
                <Navbar beranda="active" />
                {/* Isi Home */}
                <div>
                    {/* Carousel Start */}
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            {/* <div class="carousel-item active">
                                <img src={this.state.dummy} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={this.state.dummy} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={this.state.dummy} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div> */}
                            {
                                this.state.collectionBanner && this.state.collectionBanner.map((res, i) => {
                                    return (
                                        <div className={"carousel-item " + (i == 0 ? "active" : "")}>
                                            <img src={`http://localhost:4000/upload/images/${res.gambar}`} class="d-block w-100 h-20" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>{res.gambar}</h5>
                                                <p>{res.gambar}</p>
                                            </div>
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
                                <p style={{ textAlign: 'justify', paddingRight: 40, paddingTop: 40 }}>
                                    MRC Therapy atau Muslim Ruqyah Center Therapy adalah metode pengobatan untuk berbagai penyakit medis maupun non medis melalui ayat-ayat Al-qur'an yang dibacakan atau dido'akan kepada seseorang yang mengalami gangguan penyakit.
                                    <br />
                                    Sebagai penunjang penyembuhan, Kami menggunakan obat-obat herbal yang sesuai dengan anjuran Nabi seperti serbuk bidara, minyak zaitun, kurma aliyah, air zam-zam, madu, serta garam himalaya.
                                </p>

                                <a href="/program-kami"><button className="color-button">Selengkapnya</button></a>
                            </div>
                        </div>
                    </div>

                    {/* Mengapa Harus MRC Therapy */}
                    <div style={{ paddingTop: 20 }}>
                        <h2><u>Mengapa Harus MRC Therapy ? </u></h2>
                        <div className="square-why">
                            <OwlCarousel items={3}
                                className="owl-theme"
                                loop
                                nav
                                margin={8}
                            >
                                <div className="item"><img className="img" src={this.state.dummyOwl} /></div>
                                <div className="item"><img className="img" src={this.state.dummyOwl} /></div>
                                <div className="item"><img className="img" src={this.state.dummyOwl} /></div>
                                <div className="item"><img className="img" src={this.state.dummyOwl} /></div>
                                <div className="item"><img className="img" src={this.state.dummyOwl} /></div>

                            </OwlCarousel>
                        </div>
                    </div>

                    {/* Blog Start */}
                    <center style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <h2 style={{ paddingBottom: 20 }}><u>Artikel</u></h2>
                        <div className="row row-cols-1 row-cols-md-3 g-2">
                            {
                                this.state.publish.reverse().map((result, i) => {
                                    return (
                                        <div key={i} className="col">
                                            <div class="card h-100" className="cardImg">
                                                <img src={`http://localhost:4000/upload/images/${result.gambar}`} class="card-img-top sized" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{result.judul}</h5>
                                                    <p class="card-text">{result.paragraph1.substr(0,20)}</p>
                                                    <a href="#" class="btn btn-primary colortrue">Lihat</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
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
                        </div>

                    </center>
                    {/* Blog End */}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;