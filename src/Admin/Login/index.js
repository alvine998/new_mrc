import React, { Component } from 'react';
import { mrc_logo } from '../../assets';
import './login.css'
import swal from "sweetalert"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            navigate:''
        };
    }

    handleEmail(e){
        this.setState({email: e.target.value})
    }

    handlePass(e){
        this.setState({password: e.target.value})
    }

    componentDidMount(){
    }

    onLogin(){
        if(this.state.email == 'admin@mrc-therapy.com' && this.state.password == 12345678){
            alert("Berhasil Login")
            this.setState({navigate: '/admin/dashboard'})
            window.location.reload()
        } else {
            return(
                alert("Login gagal")
            )
        }
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
                                    <input type="email" class="form-control" id="exampleInputEmail1" value={this.state.email} onChange={this.handleEmail.bind(this)} aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="form-group" style={{paddingTop:10, paddingBottom:20}}>
                                    <label for="exampleInputPassword1" className="texts">Password</label>
                                    <input type="password" onKeyDown={this.listener} class="form-control" value={this.state.password} onChange={this.handlePass.bind(this)} id="exampleInputPassword1" placeholder="Password"/>
                                </div>

                                <a onClick={() => this.onLogin()} href={this.state.navigate} className="btn btnSize btnColor">Sign In</a>
                                <a href="/" className="btn btnSize btnColor2">Go To Website</a>
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