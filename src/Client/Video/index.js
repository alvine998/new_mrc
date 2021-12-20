import axios from 'axios';
import React, { Component } from 'react';
import { mrc_logo } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./video.css"

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: []
        };
    }

    getDataVideo() {
        axios.get(`http://localhost:4000/videos`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                this.setState({ collection });
            }
        )
    }

    componentDidMount() {
        this.getDataVideo()
    }
    render() {
        return (
            <div>
                <Navbar galeri="active" />
                {/* <div className="imgContainer-about">
                    <img src={mrc_logo} />
                </div> */}

                <div className="container" style={{ paddingBottom: 30, paddingTop:20 }}>
                    <div>
                        <h2><u>Video</u></h2>
                        <div className="row" style={{ paddingTop: 30 }}>
                            {
                                this.state.collection.map((res, i) => {
                                    return (
                                        <div key={i} className="col">
                                            <iframe className='video-size' src={res.uri} title={res.judul} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Video;