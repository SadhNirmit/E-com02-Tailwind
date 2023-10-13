import React from 'react';
import {ApiTopPropducts} from '../ApiFolder/TopProductsApi'
import Product from './Product';

function Products() {
  return (
    <div className="flex flex-wrap p-5 items-center justify-center">
        {
            ApiTopPropducts.map((product,index) => (
                <Product item={product} key={index} />
            ))
            
        }
    </div>
  )
}

export default Products