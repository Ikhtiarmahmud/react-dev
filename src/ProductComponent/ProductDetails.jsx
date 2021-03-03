import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './loader.css';


const ProductDetails = ({productList}) => {
    const [loader, setLoader] = useState(true)
    const params = useParams()

    const details = productList[params.id]

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
                <p><b>Name</b> : {details.name}</p>
                <p><b>Description</b> : {details.description}</p>
                <p><b>Price</b> : {details.price}</p>
                <p><b>Category</b> : {details.category}</p>
            </>
        )
    }
  
}

export default ProductDetails