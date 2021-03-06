import React, { Component } from 'react'
import Product from './Product';
import Title from "./Title";
import { ProductConsumer } from "../Context"

export default class ProductList extends Component {
    render() {

        return (
            <React.Fragment> 
                <div className="py-5 p-3">
            <div className="conatiner">
            <Title name="Our" title=" products"/>
                <div className="row">
                <ProductConsumer>
                   { value => {
                       return value.products.map(product => {
                           return <Product key={product.id} product={product}/>;
                       });
                    }} 
                </ProductConsumer>
                </div>
            </div>
                </div>
            </React.Fragment>
            //  <Product />
        );
    }
}
