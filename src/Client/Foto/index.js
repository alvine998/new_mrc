import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import "./foto.css"

class FotoClient extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar galeri/>
                </div>

                <div className='container'>
                    <h2><u>Galeri Foto</u></h2>
                    <div className='row'>
                        <div className='col-2'>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FotoClient;