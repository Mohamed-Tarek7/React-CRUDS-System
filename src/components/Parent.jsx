import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
  state = {
    products: [
      {id: 1, name: "Samsung", price: 1000, count: 5, onSale: true},
      {id: 2, name: "IPhone", price: 1200, count: 3, onSale: false},
      {id: 3, name: "Oppo", price: 800, count: 12, onSale: true},
      {id: 4, name: "PC", price: 3000, count: 14, onSale: false},
      {id: 5, name: "Laptop", price: 2500, count: 4, onSale: true},
      {id: 6, name: "Playstation", price: 2000, count: 21, onSale: false},
      {id: 7, name: "Xbox", price: 1900, count: 17, onSale: false},
      {id: 8, name: "Mouse", price: 400, count: 9, onSale: true},
      {id: 9, name: "Keyboard", price: 500, count: 3, onSale: true},
    ],

    deleteProduct: (itemId) => {
      let products = [...this.state.products];
      products = products.filter((currentItem, i) => products[i].id != itemId);
      this.setState({products});
    },

    updateProduct: (i) => {
      let products = [...this.state.products];
      ++products[i].count;
      this.setState({products});
    },
  };

  render() {
    return (
      <div className="container">
        <Child products = {this.state.products} deleteProduct = {this.state.deleteProduct} updateProduct = {this.state.updateProduct}/>
      </div>
    );
  }
}
