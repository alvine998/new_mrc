import React, { Component } from "react";
import './home.css'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummy: "https://dummyimage.com/16:9x1080",
            dummyCard:"https://dummyimage.com/286x180"
        };
    }
    render() {
        return (
            <div>
                <Navbar />
                {/* Isi Home */}
                <div>
                    {/* Carousel Start */}
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
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
                            </div>
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

                    {/* Blog Start */}
                    <center style={{paddingTop:20}}>
                        <h2 style={{paddingBottom:20}}><u>Artikel</u></h2>
                        <div className="row row-cols-1 row-cols-md-4 g-2">
                            <div className="col">
                                <div class="card h-100" className="cardImg">
                                    <img src={this.state.dummyCard} class="card-img-top" alt="..."/>
                                    <div class ="card-body">
                                    <h5 class ="card-title">Card title</h5>
                                    <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class ="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card h-100" className="cardImg">
                                    <img src={this.state.dummyCard} class="card-img-top" alt="..."/>
                                    <div class ="card-body">
                                    <h5 class ="card-title">Card title</h5>
                                    <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class ="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card h-100" className="cardImg">
                                    <img src={this.state.dummyCard} class="card-img-top" alt="..."/>
                                    <div class ="card-body">
                                    <h5 class ="card-title">Card title</h5>
                                    <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class ="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card h-100" className="cardImg">
                                    <img src={this.state.dummyCard} class="card-img-top" alt="..."/>
                                    <div class ="card-body">
                                    <h5 class ="card-title">Card title</h5>
                                    <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class ="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </center>
                    {/* Blog End */}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;