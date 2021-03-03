import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Product = ({productList}) => {
    const history = useHistory();

    const getProduct = (index) => {
        history.push(`/product-details/${index}`);
    }

    return (
        <> {
            productList.map((product, index) => {
                return (
                    <div key={index}
                        style={card}>
                        <p>{product.name}</p>
                        <button onClick={
                            () => getProduct(index)
                        }>Details</button>
                    </div>
                )
            })
        } 
        </>
    )
}

const card = {
    padding: '10px',
    border: '1px solid black',
    width: '200px',
    margin: '20px'
}
export default Product;
