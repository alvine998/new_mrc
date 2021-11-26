import React, { Component } from 'react';
import { mrc_logo } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./video.css"

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Navbar galeri="active"/>
                <div className="imgContainer-about">
                    <img src={mrc_logo} />
                </div>

                <div className="container" style={{paddingBottom:30}}>
                    <div>
                        <h2><u>Video</u></h2>
                        <div className="row" style={{paddingTop:30}}>
                            <div className="col">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/?listType=playlist&list=PLQ0YYmziJNSXTU9Rz4PXZxba1FPsc8vj3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="col">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/?listType=playlist&list=PLQ0YYmziJNSVxThl6dVjntuprIiWawdTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="col">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/?listType=playlist&list=PLQ0YYmziJNSX-rPkdEMUIF414UVIpv0NN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="col">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/?listType=playlist&list=PLQ0YYmziJNSXa0emsIHtu4iZj05G4ZM6L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Video;