import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Loader from './../LoaderComponent/LoaderComponent';

const Product = () => {
    const [loader, setLoader] = useState(true)
    const[products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
             .then(res => {
                 setProducts(res.data);
                 setLoader(false);
             }).catch(err => {
                 console.log(err.response);
             })
    }, []);

    const history = useHistory();

    const getProduct = (id) => {
        history.push(`/product-details/${id}`);
    }


    if (loader) {
        return <Loader />
    } else {
        return (
            <> {
                products.map((product, index) => {
                    return (
                        <div key={index}
                            style={card}>
                                <img src={product.image} style={{width : '100%'}}/>
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                            <p>Category : {product.category}</p>
                            <button onClick={
                                () => getProduct(product.id)
                            }>Details</button>
                        </div>
                    )
                })
                } 
            </>
            )
        }
    }

const card = {
    padding: '10px',
    border: '1px solid black',
    width: '200px',
    margin: '20px',
    display: 'inline-block',
}
export default Product;
