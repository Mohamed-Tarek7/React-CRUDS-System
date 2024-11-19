import React, { Component } from 'react'

export default class child extends Component {
  state = {};

  render() {
    return (
      <div className="row m-5 g-4">
        {this.props.products.map((currentItem, i) => {
          return(
            <div key = {i} className="col-md-4">
              <div className="card position-relative p-3">
                <h6 className="text-dark"> Name: {this.props.products[i].name} </h6>
                <h6 className="text-dark"> Price: {this.props.products[i].price} </h6>
                <h6 className="text-dark"> Count: {this.props.products[i].count} </h6>
                <button className = "btn btn-outline-secondary bg-danger text-white m-1" onClick = {() => this.props.deleteProduct(this.props.products[i].id)}> Delete Product </button>
                <button className = "btn btn-outline-secondary bg-success text-white m-1" onClick = {() => this.props.updateProduct(i)}> Update Product </button>
                {(this.props.products[i].onSale ? <div className="sale top-0 end-0 p-1 position-absolute bg-warning text-white rounded-2 m-1">
                  <h6> On Sale </h6>
                </div> : <></>)}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
