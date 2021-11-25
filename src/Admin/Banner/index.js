import React, { Component } from 'react';
import "./banner.css"
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';

class Banner extends Component {
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
                        <Sidebar banner="active" />
                    </div>
                    <div className="col dash">
                        <div className="container">
                            <div className="btn-left">
                                <a href="#" className="btn btn-primary">Tambah Banner</a>
                            </div>
                            <div className="space-top">
                                <table class="table table-responsive table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Gambar Banner</th>
                                            <th scope="col">Tools</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>dkei wjuhkiajun awdhjbawhjubd badhjwabg </td>
                                            <td>
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

export default Banner;