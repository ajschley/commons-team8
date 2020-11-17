import React, { Component } from 'react'
import {storeProducts} from '../data'
import Item from './Item'


export default class items extends Component {
    constructor(props) {
        super(props);
        this.state = {storeProducts: storeProducts};
      }


    render() {
        return (
            <div className="grid-container">
            {
                this.state.storeProducts.map((product)=>{
                    return <Item key={product.id} product={product}/>
                })
            }
        </div>
        )
    }
}
