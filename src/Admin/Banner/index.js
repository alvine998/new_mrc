import React, { Component } from 'react';
import "./banner.css"
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: []
        };
    }

    getDataBanner() {
        axios.get(`http://localhost:4000/banners/`).then(
            res => {
                const collection = res.data;
                this.setState({ collection })
            }
        )
    }

    deleteBanner(id){
        axios.delete(`http://localhost:4000/banners/${id}`).then(
            res => {
                console.log("Sukses Delete : ", res.data)
            }
        )
    }

    componentDidMount() {
        this.getDataBanner();
    }

    render() {
        return (
            <div>
                <div>
                    <NavAdmin />
                </div>
                <div className="row">
                    <div className="col-2 sider">
                        <Sidebar banner="active" />
                    </div>
                    <div className="col dash">
                        <div className="container">
                            <div className="btn-left">
                                <a href="/admin/tambah-banner" className="btn btn-primary">Tambah Banner</a>
                            </div>
                            <div className="space-top">
                                <table class="table table-responsive table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Tanggal</th>
                                            <th scope="col">Gambar Banner</th>
                                            <th scope="col">Tools</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.collection.reverse().map((result, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <th scope="row">{result.createdAt.substr(0,10)}</th>
                                                        <td><img src={`http://localhost:4000/upload/images/${result.gambar}`} className="img-banner" /></td>
                                                        <td>
                                                            <a className="btn btn-danger" onClick={() => this.deleteBanner(result._id)} >Hapus</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;