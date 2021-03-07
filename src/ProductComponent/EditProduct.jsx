import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductEdit = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`).then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setCategory(res.data.category);
            setLoading(false);
        }).catch(err => err.response);
    },[])

    const updateHandler = () => {
        axios.put(`https://fakestoreapi.com/products/${params.id}`, {
            title, price, description, category
        }).then(res => {
            console.log('Product Updated Successfully!', res.data)
        }).catch(err => console.log(err.response))
    }

    return (
        <> 
            <div style={card}>
                <h1>Edit Product !</h1>
                { loading && <p>Loading . . .</p> }

                <div style={mt1}>
                    <label>Title</label>
                    <input style={mr} type="text" value={title} onChange={(event) => {
                        setTitle(event.target.value)
                    }}/>
                </div>
                <div style={mt1}>
                    <label>Price</label>
                    <input style={mr} type="text" value={price}  onChange={(event) => {
                        setPrice(event.target.value)
                    }}/>
                </div>
                <div style={mt1}>
                    <label>Description</label>
                    <input style={mr} type="text" value={description}  onChange={(event) => {
                        setDescription(event.target.value)
                    }}/>
                </div>
                <div style={mt1}>
                    <label>Category</label>
                    <input style={mr} type="text" value={category}  onChange={(event) => {
                        setCategory(event.target.value)
                    }}/>
                </div>
                <div>
                    <button onClick={updateHandler}>Update</button>
                </div>
            </div>
        </>
    )
}

const card = {
    margin: '50px',
    padding: '20px'
}

const mt1 = {
    marginBottom: '20px'
}

const mr = {
    marginLeft: '30px',
}

export default ProductEdit;