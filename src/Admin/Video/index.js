import React, { Component } from 'react';
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';
import swal from 'sweetalert';

class VideoAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            judul: '',
            uri: '',
            collection: []
        };
    }

    handleJudul(e) {
        this.setState({ judul: e.target.value })
    }

    handleUri(e) {
        this.setState({ uri: e.target.value })
    }

    saveVideo() {
        const data = {
            judul: this.state.judul,
            uri: this.state.uri
        }
        axios.post(`https://expressmrcweb.herokuapp.com/videos/`, data).then(
            res => {
                console.log(res.data);
                swal("Berhasil Simpan URL", { icon: 'success', })
                this.getDataVideo();
            }
        )
    }

    getDataVideo() {
        axios.get(`https://expressmrcweb.herokuapp.com/videos/`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                this.setState({ collection })
            }
        )
    }

    deleteVideo(id){
        axios.delete(`https://expressmrcweb.herokuapp.com/videos/${id}`).then(
            res => {
                console.log("Delete : ", res.data);
                swal("Berhasil Hapus URL", { icon: 'success', })
                this.getDataVideo();
            }
        )
    }

    componentDidMount(){
        this.getDataVideo();
    }

    render() {
        return (
            <div>
                <div>
                    <NavAdmin />
                </div>
                <div className="row">
                    <div className="col-2 sider">
                        <Sidebar video />
                    </div>
                    <div className="col dash">
                        <div className="container">
                            <h2>Video URL Playlist Youtube</h2>
                            <div>
                                <a style={{ float: "left", marginBottom: 20 }} className="btn btn-primary" data-toggle="modal" data-target="#urlModal">Tambahkan URL Baru</a>

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
                                                                <input className="form-control" onChange={this.handleJudul.bind(this)} placeholder="Ketik disini ..." type="text" />
                                                            </div>

                                                            <div style={{ paddingTop: 20 }}>
                                                                <h5 style={{ float: 'left' }}>URL Youtube</h5>
                                                                <input className="form-control" onChange={this.handleUri.bind(this)} placeholder="Ketik disini ..." type="text" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
                                                    <button type="button" class="btn btn-primary" onClick={() => this.saveVideo()}>Simpan</button>
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
                                                <th scope="col">URL</th>
                                                <th scope="col">Tools</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.collection.reverse().map((res, i, c) => {
                                                    c = i + 1;
                                                    return (
                                                        <tr key={i}>
                                                            <th scope="row">{c}</th>
                                                            <td>{res.judul}</td>
                                                            <td>{res.uri}</td>
                                                            <td><a className="btn btn-danger" onClick={()=>this.deleteVideo(res._id)}>Hapus</a></td>
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
            </div>
        );
    }
}

export default VideoAdmin;