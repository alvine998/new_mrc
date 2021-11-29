import axios from 'axios';
import React, { Component } from 'react';
import swal from 'sweetalert';
import NavAdmin from '../../components/NavAdmin';
import Sidebar from '../../components/Sidebar';

class TambahBanner extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            image:null,
            imageName:null
         };
    }

    onUploadImage(){
        let formdata = new FormData()
        formdata.append("gambar", this.state.image)

        axios.post('http://localhost:4000/upload/', formdata).then(
            res => {
                console.log(res.data)
            }
        )
    }

    onSaveData(){
        const data = {
            gambar: 'gambar-' + this.state.image.name,
        }
        console.log("Kirim : " , data)

        axios.post(`http://localhost:4000/banners/`, data).then(
            res => {
                console.log("Sukses Save : ", res.data)
                this.setState({gambar:''})
                swal("Sukses Publish", {icon:'success'})
                
            }
        )
    }

    onImageChange(e){
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0]
            this.setState({image: img,imageName: URL.createObjectURL(img)})
        }   
    }

    render() {
        return (
            <div>
                <div>
                    <NavAdmin/>
                </div>
                <div className="row">
                    <div className="col-2 sider">
                        <Sidebar banner="active"/>
                    </div>
                    <div className="col dash">
                        <h2><u>Tambah Banner</u></h2>
                        <form>
                            <div>
                                <h5 style={{float:'left'}}>Input Gambar</h5>
                                <input type="file" className="form-control" onChange={this.onImageChange.bind(this)}/>
                            </div>
                            <div style={{marginTop:20}}>
                                <img src={this.state.imageName} className="img-banner" />
                            </div>
                            <div style={{paddingTop:20}}>
                                <a className="btn btn-primary btn-simpan" onClick={()=> {this.onUploadImage();this.onSaveData()}}>Simpan</a>
                            </div>
                            <div style={{paddingTop:10}}>
                                <a className="btn btn-danger btn-simpan" href="/admin/banner">Keluar</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TambahBanner;