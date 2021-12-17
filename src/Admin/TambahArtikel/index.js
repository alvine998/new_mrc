import React, { Component } from 'react';
import "./tambahartikel.css"
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';
import swal from 'sweetalert';

class TambahArtikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            judul: '',
            image: null,
            imageName: null,
            photo: '',
            paragraph1: '',
            paragraph2: '',
            paragraph3: '',
            status: 'published',
            penulis: ''
        };
    }

    onChangeJudul(e) {
        this.setState({ judul: e.target.value })
    }

    onChangePenulis(e) {
        this.setState({ penulis: e.target.value })
    }

    onImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            this.setState({ image: img, imageName: URL.createObjectURL(img) })
        }
    }

    onChangeParagraph1(e) {
        this.setState({ paragraph1: e.target.value })
    }

    onChangeParagraph2(e) {
        this.setState({ paragraph2: e.target.value })
    }

    onChangeParagraph3(e) {
        this.setState({ paragraph3: e.target.value })
    }

    onUploadImage() {
        let formdata = new FormData()
        formdata.append("gambar", this.state.image)

        axios.post('http://localhost:4000/upload/', formdata).then(
            res => {
                console.log(res.data)
            }
        )
    }

    onChangeStatus(e){
        this.setState({status: e.target.value})
    }

    componentDidMount() {
   
    }

    onSaveData(e) {
        if (!this.state.judul) {
            alert("Harap isi judul artikel")
        } else if (!this.state.penulis) {
            alert("Harap isi penulis artikel")
        } else if (!this.state.paragraph1) {
            alert("Harap isi paragraph 1 artikel")
        } else if (!this.state.paragraph2) {
            alert("Harap isi paragraph 2 artikel")
        } else {


            const data = {
                judul: this.state.judul,
                gambar: 'gambar-' + this.state.image.name,
                paragraph1: this.state.paragraph1,
                paragraph2: this.state.paragraph2,
                paragraph3: this.state.paragraph3,
                status: this.state.status,
                penulis: this.state.penulis
            }
            console.log("Kirim : ", data)

            axios.post(`http://localhost:4000/artikels/`, data).then(
                res => {
                    console.log("Sukses Save : ", res.data)
                    this.setState({ judul: '', gambar: null, paragraph1: '', paragraph2: '', paragraph3: '' })
                    swal("Sukses Publish", { icon: 'success', buttons: () => { this.props.history.push('/admin/blog') } })

                }
            )
        }

    }

    render() {
        return (
            <div>
                <NavAdmin />
                <div className="row">
                    <div className="col-2 siders">
                        <Sidebar blog="active" />
                    </div>
                    <div className="col dash">
                        <h2><u>Input Artikel</u></h2>
                        <div style={{ paddingTop: 20 }}>
                            <form encType='multipart/form-data'>

                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="judul-width">
                                                <h5 style={{ float: 'left' }}>Judul</h5>
                                                <input className="form-control form-control-lg" onChange={this.onChangeJudul.bind(this)} type="text" placeholder="Tulis disini ..." />
                                            </div>

                                            <div className="judul-width" style={{ paddingTop: 20 }}>
                                                <h5 style={{ float: 'left' }}>Penulis</h5>
                                                <input className="form-control form-control-lg" onChange={this.onChangePenulis.bind(this)} type="text" placeholder="Nama lengkap" />
                                            </div>

                                            <div style={{ paddingTop: 20 }}>
                                                <h5 style={{ float: 'left' }}>Status : </h5>
                                                <select className='form-select' value={this.state.status} onChange={this.onChangeStatus.bind(this)}>
                                                    <option value={"published"}>Published</option>
                                                    <option value={"draft"}>Draft</option>
                                                </select>
                                            </div>

                                            <div className="judul-width" style={{ paddingTop: 20 }}>
                                                <h5 style={{ float: 'left' }}>Tambah Gambar</h5>
                                                <input className="form-control form-control-sm" type="file" onChange={this.onImageChange.bind(this)} />
                                                <img src={this.state.imageName} className="img-artikel" />
                                            </div>
                                        </div>

                                        <div className="col btn-pad">
                                            <a className="btn btn-primary btn-width" onClick={() => { this.onSaveData(); this.onUploadImage()}}>Publish</a>
                                            <a href="/admin/blog" className="btn btn-danger btn-width" style={{ marginTop: 20 }}>Back to blog</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="judul-width-lg" style={{ paddingTop: 20 }}>
                                    <h5 style={{ float: 'left' }}>Paragpraph 1</h5>
                                    <textarea className="form-control" onChange={this.onChangeParagraph1.bind(this)} style={{ height: 200 }} type="text" />
                                </div>

                                <div className="judul-width-lg" style={{ paddingTop: 20 }}>
                                    <h5 style={{ float: 'left' }}>Paragpraph 2</h5>
                                    <textarea className="form-control form-control" onChange={this.onChangeParagraph2.bind(this)} style={{ height: 200 }} type="text" />
                                </div>

                                <div className="judul-width-lg" style={{ paddingTop: 20 }}>
                                    <h5 style={{ float: 'left' }}>Paragpraph 3 (Opsional)</h5>
                                    <textarea className="form-control form-control" onChange={this.onChangeParagraph3.bind(this)} style={{ height: 200 }} type="text" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TambahArtikel;