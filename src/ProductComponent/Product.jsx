import React, { useState, useEffect } from 'react'
import ProductDetails from './ProductDetails'

const Product = () => {
    const [products, setProducts] = useState([
        {
            name: 'Apple USB Type-C to USB Adapter',
            description: 'Compatible with Apple iPhone/iPad/Mac USB Type-C Male to USB Type-A Female  USB 3.0 Transfer Rates up to 5 Gb/s',
            price: '6000',
            category: 'Adaptor'
        }, {
            name: 'Apple (MLA02ZA/A) Magic Mouse 2',
            description: 'Type: Bluetooth, Gestures: Scroll, Click, Swipe, Dimensions: 4.47 x 2.25 x 0.85"',
            price: '7000',
            category: 'Mouse'
        }, {
            name: 'Apple USB-C Digital AV HDMI & USB Multiport Adapter',
            description: 'USB Multiport Adapter, HDMI, USB-C',
            price: '8000',
            category: 'Adaptor'
        }, {
            name: 'Apple Pencil',
            description: 'Its Only a Magic Wand Perfectly on point for anything you do 12 hours of battery life',
            price: '7000',
            category: 'Pencil'
        }
    ]);

    const [selectedProduct, setSelectedProduct] = useState({});

    const getProduct = (index) => {
        setSelectedProduct(products[index]);
    }

    if (Object.keys(selectedProduct).length === 0) {
        return (
            <> {
                products.map((product, index) => {
                    return (
                        <div key={index}
                            style={card}>
                            <p>Product One</p>
                            <button onClick={
                                () => getProduct(index)
                            }>Details</button>
                        </div>
                    )
                })
            } </>
        )
    } else {
        return (
            <>
                <ProductDetails details={selectedProduct} />
            </>
        )
    }
}

const card = {
    padding: '10px',
    border: '1px solid black',
    width: '200px',
    margin: '20px'
}
export default Product;
