import React, { Component } from 'react';
import Product from '../Product/Product';


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

  render() {
      const {inventoryList} = this.props;
      const productArray = inventoryList.map ((e,i) =>{
        return (
            <div>
            <Product
            key={i} url={e.imageurl} productname={e.productname} price={e.price}
            />
            </div>
        )
      })
    return (
        <div className = "products">
        {productArray}
        </div>
    )
  }
}

export default Dashboard;