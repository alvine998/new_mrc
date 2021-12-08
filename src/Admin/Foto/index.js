import React, { Component } from 'react';
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';

class FotoAdmin extends Component {
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
                        <Sidebar foto />
                    </div>
                    <div className="col dash">
                        <div className="container">
                            <h2>Galeri Foto MRC</h2>
                            <div>
                                <a style={{ float: "left", marginBottom: 20 }} className="btn btn-primary" data-toggle="modal" data-target="#urlModal">Tambahkan Foto Baru</a>

                                {/* Modal */}
                                <div>
                                    <div class="modal fade" tabindex="-1" role="dialog" id="urlModal" aria-labelledby="urlModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Form URL Baru</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <div>
                                                        <form className="form">
                                                            <div>
                                                                <h5 style={{ float: 'left' }}>Judul</h5>
                                                                <input className="form-control" placeholder="Ketik disini ..." type="text" />
                                                            </div>

                                                            <div style={{ paddingTop: 20 }}>
                                                                <h5 style={{ float: 'left' }}>Upload Foto</h5>
                                                                <input className="form-control" placeholder="Ketik disini ..." type="file" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
                                                    <button type="button" class="btn btn-primary">Simpan</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Judul</th>
                                                <th scope="col">Foto</th>
                                                <th scope="col">Tools</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td><a className="btn btn-danger">Hapus</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td><a className="btn btn-danger">Hapus</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FotoAdmin;