import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { title, img, price, info } = this.props.product;
    return (
      <div className="container">
        <div className="images">
          <img src={img} alt="/"/>
        </div>
        <div className="product">
          <p>{title}</p>
          <h2>${price}</h2>
          <p className="desc">{info}</p>
          <div className="buttons">
            <button className="add">Add to Cart</button>
            <button className="like">
              <span>♥</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
