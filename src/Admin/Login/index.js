import React, { Component } from 'react';
import { mrc_logo } from '../../assets';
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="square">
                    <div>
                        <img src={mrc_logo} className="imgLogo" />
                        <h4>Please sign in</h4>
                        <div style={{paddingTop:10}}>
                            <form className="sizes">
                                <div className="form-group">
                                    <label for="exampleInputEmail1" className="texts">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="form-group" style={{paddingTop:10, paddingBottom:20}}>
                                    <label for="exampleInputPassword1" className="texts">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>

                                <a href="#" className="btn btnSize btnColor">Sign In</a>
                            </form>
                        </div>
                        <div style={{paddingTop:20}}>
                            <p className="small">&copy; Copyright by MRC Therapy 2021</p>    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;