import './App.css';
import React, { Component } from 'react'
import Axios from "axios";

class App extends Component {

    constructor(props) {
        super(props)

        this.state = { username: 'TT' }
    }

    callAPI() {
        Axios({
            method: "GET",
            url: "http://localhost:3001/user",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            this.setState({username: res.data.username})
        });
    }

    componentDidMount() {
        this.callAPI()
    }

    render() {
        return (
            <div className="App">
                <h1>Hello {this.state.username}, this is React.</h1>
            </div>
        );
    }
}

export default App;
