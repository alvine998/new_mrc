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
            judul:'',
            image:null,
            paragraph1:'',
            paragraph2:'',
            paragraph3:'',
        };
    }

    onChangeJudul(e){
        this.setState({judul: e.target.value})
    }

    onImageChange(e){
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            })
        }
    }

    onChangeParagraph1(e){
        this.setState({paragraph1: e.target.value})
    }

    onChangeParagraph2(e){
        this.setState({paragraph2: e.target.value})
    }

    onChangeParagraph3(e){
        this.setState({paragraph3: e.target.value})
    }

    onSaveData(){
        const data = {
            judul: this.state.judul,
            gambar: this.state.image,
            paragraph1: this.state.paragraph1,
            paragraph2: this.state.paragraph2,
            paragraph3: this.state.paragraph3,
        }
        console.log("Kirim : " , data)

        axios.post(`http://localhost:4000/artikels/`, data).then(
            res => {
                console.log("Sukses Save : ", res.data)
                this.setState({judul:'', gambar:null, paragraph1:'', paragraph2:'', paragraph3:''})
                swal("Sukses Publish", {icon:'success'})
                
            }
        )
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
                            <form>

                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="judul-width">
                                                <h5 style={{ float: 'left' }}>Judul</h5>
                                                <input className="form-control form-control-lg" onChange={this.onChangeJudul.bind(this)} type="text" placeholder="Tulis disini ..." />
                                            </div>

                                            <div className="judul-width" style={{ paddingTop: 20 }}>
                                                <h5 style={{ float: 'left' }}>Tambah Gambar</h5>
                                                <input className="form-control form-control-sm" type="file" onChange={this.onImageChange.bind(this)} />
                                                <img src={this.state.image} className="img-artikel" />
                                            </div>
                                        </div>

                                        <div className="col btn-pad">
                                            <a className="btn btn-primary btn-width" onClick={() => this.onSaveData()}>Publish</a>
                                            <a href="/admin/blog" className="btn btn-danger btn-width" style={{marginTop:20}}>Back to blog</a>
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
                                    <h5 style={{ float: 'left' }}>Paragpraph 3</h5>
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