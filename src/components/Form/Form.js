import React, { Component } from 'react';
import "./Form.css";

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
          imageurl: '',
          productname: '',
          price: ''
        };

        this.baseState = this.state
        // BINDING STUFF
    }

    handleUrlInput(url){
      this.setState({imageurl: url});
    }

    handleProductName(name){
      this.setState({productname: name});
    }

    handlePrice(price){
      this.setState({price: price});
    }

    resetForm = () => {
      this.setState(this.baseState);
    }


  render() {
    return (
      <form className="form-container">
      <input className = "input1" onChange = {(e) => this.handleUrlInput( e.target.value )} type ="text"/>
      <input className = "input2" onChange = {(e) => this.handleProductName( e.target.value)} type="text"/>
      <input className = "input3" onChange = {(e) => this.handlePrice( e.target.value)} type="text"/>
      <button className = "cancelbutton" onClick = {this.resetForm} type="button">CANCEL</button>
      <button className="addinventorybutton">ADD</button>
      </form>
    )
  }
}