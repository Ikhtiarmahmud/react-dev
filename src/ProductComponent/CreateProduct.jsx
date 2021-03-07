import React, {useState} from 'react';
import axios from 'axios';

const ProductCreate = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const CreateProductHandler = () => {
        axios.post('https://fakestoreapi.com/products', {
            title, price, description, category
        }).then(res => {
            console.log("Product Added Successfully!", res.data)
        }).catch(err => err.response);
    }

    return (
        <>
            <div style={card}>
                <h1>Create A Product !</h1>

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
                    <button onClick={() => CreateProductHandler()}>Create</button>
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

export default ProductCreate;