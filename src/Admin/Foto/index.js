import axios from 'axios';
import React, { Component } from 'react';
import swal from 'sweetalert';
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';
import './style.css';

class FotoAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            judul: '',
            foto: null,
            fotoName: '',
            collection: []
        };
    }

    getDataFoto() {
        axios.get(`https://expressmrcweb.herokuapp.com/fotos`).then(
            res => {
                const collection = res.data;
                this.setState({ collection })
            }
        )
    }

    componentDidMount() {
        this.getDataFoto();
    }

    saveFoto() {
        const data = {
            judul: this.state.judul,
            uri: 'gambar-' + this.state.foto.name
        }

        let formdata = new FormData()
        formdata.append("gambar", this.state.foto)

        axios.post('https://expressmrcweb.herokuapp.com/upload/', formdata).then(
            res => {
                console.log(res.data)
            }
        )

        axios.post('https://expressmrcweb.herokuapp.com/fotos', data).then(
            res => {
                this.setState({judul:'', fotoName:'', foto:null})
                swal("Foto Telah Ditambahkan", { icon: 'success' })
                console.log("Sukses Post", res.data)
                this.getDataFoto()
            }
        )
    }

    deleteFoto(id){
        axios.delete(`https://expressmrcweb.herokuapp.com/fotos/${id}`).then(
            res => {
                swal("Foto Telah Dihapus", { icon: 'error' })
                this.getDataFoto()
            }
        )
    }

    handleJudul(e) {
        this.setState({ judul: e.target.value })
    }

    handleFoto(e) {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            this.setState({ foto: img, fotoName: URL.createObjectURL(img) })
        }
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
                                                    <h5 class="modal-title">Form Input Foto Baru</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <div>
                                                        <form className="form">
                                                            <div>
                                                                <h5 style={{ float: 'left' }}>Judul</h5>
                                                                <input className="form-control" onChange={this.handleJudul.bind(this)} placeholder="Ketik disini ..." type="text" />
                                                            </div>

                                                            <div style={{ paddingTop: 20 }}>
                                                                <h5 style={{ float: 'left' }}>Upload Foto</h5>
                                                                <input className="form-control" onChange={this.handleFoto.bind(this)} placeholder="Ketik disini ..." type="file" />
                                                                <img src={this.state.fotoName} className='img-foto' />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
                                                    <button type="button" class="btn btn-primary" onClick={() => this.saveFoto()} data-dismiss="modal">Simpan</button>
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
                                            {
                                                this.state.collection.reverse().map((res, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th scope="row">{i + 1}</th>
                                                            <td>{res.judul}</td>
                                                            <td><img src={`https://expressmrcweb.herokuapp.com/upload/images/${res.uri}`} className='img-foto' /></td>
                                                            <td><a className="btn btn-danger" onClick={()=>this.deleteFoto(res._id)}>Hapus</a></td>
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

export default FotoAdmin;