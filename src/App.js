import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Product from "./components/Product/Product";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventoryList: []
    }
  }

  getFavorites() {
    axios
      .get("/api/inventory")
      .then(response => this.setState({ inventoryList: response.data }))
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App">
      <div className = "header"><Header/></div>
      <Dashboard className = "dashboard" inventoryList = {this.state.inventoryList}/>
      <div className = "form"><Form className = "Form"/></div>
      </div>
    );
  }
}

export default App;
