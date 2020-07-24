import React, { Component } from 'react';
import ApiCallData from './other/apiCallData';
import Spinner from 'react-bootstrap/Spinner';
import Navbar from 'react-bootstrap/Navbar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      eSports: [],
      loading: true
    }
  }

  async componentDidMount(){
    const url = 'https://api.pandascore.co/matches/upcoming?token=9ZzUArG-cRA1muOFaLwBAL5xEXeMs44Io0CA-5oOGKLRoZPn-1g';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({loading:false, eSports:data});
    console.log(data)
  
  }

  render(){
    
    if(this.state.loading){
      return <Spinner animation="border" variant="primary" size="xl" />
    }
    if(!this.state.eSports){
      return <div>Error</div>
    }
    return(
      <div>
      <Navbar bg="dark">
        <Navbar.Brand href="/">
          Upcoming eSports Games
        </Navbar.Brand>
      </Navbar>
      
      <ApiCallData eSports={this.state.eSports} />
      </div>
    )
  }
}

export default App;
