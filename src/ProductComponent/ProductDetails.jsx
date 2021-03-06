import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from './../LoaderComponent/LoaderComponent';


const ProductDetails = ({productList}) => {
    const [loader, setLoader] = useState(true);
    const [product, setProduct] = useState({});
    const params = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
             .then(res => {
                setProduct(res.data);
                console.log(res.data);
                setLoader(false);
             }).catch(err => {
                 console.log(err.response);
             })
    }, []);

    if (loader) {
        return <Loader />
    } else {
        return (
            <>
              {
                product ?
                <div style={card}>
                    <img src={product.image} style={imgStyle}/>
                    <p><b>Name</b> : {product.title}</p>
                    <p><b>Description</b> : {product.description}</p>
                    <p><b>Price</b> : {product.price}</p>
                    <p><b>Category</b> : {product.category}</p>
                    <button>Buy Now</button>
                </div> : <h1>404! Not Found!</h1>
              }
            </>
        )
    }
}

const card = {
    padding: '30px',
    margin: '100px',
}

const imgStyle = {
    width: '200px',
    height: '200px'
}

export default ProductDetails