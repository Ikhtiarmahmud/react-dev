import React,{useState, useEffect} from 'react';
import './loader.css';


const ProductDetails = (props) => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
         setTimeout(() => {
            setLoader(false)
         }, 500)
    },[])

    if (loader) {
        return (
            <>
                <div className="spinner-box">
                <div className="circle-border">
                    <div className="circle-core"></div>
                </div>  
                </div>
            </>
        )
    } else {
        return (
            <>
                <p><b>Name</b> : {props.details.name}</p>
                <p><b>Description</b> : {props.details.description}</p>
                <p><b>Price</b> : {props.details.price}</p>
                <p><b>Category</b> : {props.details.category}</p>
            </>
        )
    }
  
}

export default ProductDetails