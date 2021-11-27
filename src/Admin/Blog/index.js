import React, { Component } from 'react';
import "./blog.css"
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                                            <th scope="col">No</th>
                                            <th scope="col">Judul</th>
                                            <th scope="col">Isi Artikel</th>
                                            <th scope="col">Gambar</th>
                                            <th scope="col">Tools</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Ruqyah di rumah</td>
                                            <td>Loperm Isum Bretapa sadsdhnaj debawauy swdawj auisdhwb asdkabe ashjbdkei wjuhkiajun awdhjbawhjubd badhjwabg </td>
                                            <td>image.jpg</td>
                                            <td>
                                                <a className="btn btn-success" style={{marginBottom:10}} >Ubah</a>
                                                <a className="btn btn-danger" >Hapus</a>
                                            </td>
                                        </tr>
                                        
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