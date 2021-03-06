import React from 'react';
import {ProductConsumer} from '../../context';
import styled from 'styled-components';
import Title from '../Title';
import Product from '../Product';
import ProductFilter from './ProductFilter';

export default function Products() {
    return <ProductConsumer>
        {value => {
            const {filteredProducts} = value;

            return <section className = "py-5">
                <div className="container">
                    {/* TITLE */}
                   <Title title = "our products" center/> 
                   { /* product filter */ }
                   <ProductFilter/>
                   
                    { /* total count */ }
                    <div className="row col-10 mx-auto">
                        <h6 className = "text-title">total products: {filteredProducts.length}</h6>
                    </div>
                    { /* products */ }
                    <div className="row py-5">
                        {   filteredProducts.length === 0? (
                            <div className = "col text-center text-title">
                                sorry, no items matched your search
                            </div>) : 
                            (filteredProducts.map(product => {
                            return <Product  key = {product.id} product = {product} />
                        }))}
                    </div>

                </div>


            
            
            
            </section>
        }}
    
    
    
    
    </ProductConsumer>
};
