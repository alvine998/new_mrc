import React, { Component } from 'react';
import "./dashboard.css"
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';
import MixedChart from '../../components/MixedChart';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jumlah_artikel:0
        };
    }

    getJumlahArtikel(){
        axios.get(`http://localhost:4000/artikels/`).then(
            res => {
                const collection = res.data;
                this.setState({jumlah_artikel: collection.length})
            }
        )
    }


    componentDidMount(){
        this.getJumlahArtikel();
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <NavAdmin />
                        <div className="row">
                            <div className="col-2 sider">
                                <Sidebar dashboard="active"/>
                            </div>
                            <div className="col dash">

                                {/* Card */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div class="card card-visitor">
                                                <div class="card-body">
                                                    <p class="card-text">Jumlah Visitor : </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div class="card card-artikel">
                                                <div class="card-body">
                                                    <p class="card-text">Jumlah Artikel : {this.state.jumlah_artikel}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-3">
                                            <div class="card card-">
                                                <img class="card-img-top" src="..." alt="Card image cap" />
                                                <div class="card-body">
                                                    <p class="card-text">Jumlah Datang</p>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <div className="col-md-3">
                                            <div class="card">
                                                <img class="card-img-top" src="..." alt="Card image cap" />
                                                <div class="card-body">
                                                    <p class="card-text">Jumlah Stok</p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>


                                {/* Grafik */}
                                <div className="container" style={{ paddingTop: 20 }}>
                                    <div className="square-grafik">
                                        <div>
                                            <MixedChart/>
                                        </div>
                                    </div>
                                </div>

                                {/* Latest Post */}
                                <div className="container container-dashboard">
                                    <div className="row">
                                        <div className="col-md-6">
                                            Latest Post
                                            <div className="latestpost">
                                                <h4>Post Terbaru</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            Popular Post
                                            <div className="popularpost">
                                                <h4>Komentar</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;