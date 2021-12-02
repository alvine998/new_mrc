import React, { Component } from 'react';
import "./blog.css"
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: []
        };
    }

    getDataArtikel() {
        axios.get(`http://localhost:4000/artikels`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                this.setState({ collection })
            }
        )
    }

    deleteArtikel(id){
        axios.delete(`http://localhost:4000/artikels/${id}`).then(
            res => {
                console.log("Sukses Delete : " , res.data)
                window.location.reload()
            }
        )
    }

    async sendData(id){
        await localStorage.setItem('idKey', id)
    }

    componentDidMount() {
        this.getDataArtikel();
    }

    render() {
        return (
            <div>
                <div>
                    <NavAdmin />
                </div>
                <div className="row">
                    <div className="col-2 sider">
                        <Sidebar blog="active" />
                    </div>
                    <div className="col dash">
                        <div className="container">
                            <div className="btn-left">
                                <a href="/admin/tambah-artikel" className="btn btn-primary">Tambah Artikel</a>
                            </div>
                            <div className="space-top">
                                <table class="table table-responsive table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Tanggal</th>
                                            <th scope="col">Judul</th>
                                            <th scope="col">Penulis</th>
                                            <th scope="col">Isi Artikel</th>
                                            <th scope="col">Gambar</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Tools</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.collection.reverse().map((res, i) => {
                                                return <tr key={i}>
                                                    <th>{res.createdAt.substr(0,10)}</th>
                                                    <td>{res.judul}</td>
                                                    <td>{res.penulis}</td>
                                                    <td>{res.paragraph1.substr(0,20)} ...<br/>{res.paragraph2.substr(0,20)} ...<br/>{res.paragraph3.substr(0,20)} ...</td>
                                                    <th><img src={`http://localhost:4000/upload/images/${res.gambar}`} className="img-blog" /></th>
                                                    <td>{res.status}</td>
                                                    <td>
                                                        <a className="btn btn-success" onClick={() => {this.sendData(res._id);}} href="/admin/edit-artikel" style={{ marginBottom: 10 }} >Ubah</a><br/>
                                                        <a className="btn btn-danger" onClick={() => this.deleteArtikel(res._id)} >Hapus</a>
                                                    </td>
                                                </tr>
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

export default Blog;