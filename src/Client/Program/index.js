import React, { Component } from 'react';
import Navbar from '../../components/Navbar';

class Program extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Navbar program="active"/>
            </div>
        );
    }
}

export default Program;