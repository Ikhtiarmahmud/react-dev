import React from 'react';
import './loader.css';


const Loader = () => {

    return (
        <>
            <div className="spinner-box">
                <div className="circle-border">
                    <div className="circle-core"></div>
                </div>  
            </div>
        </>
    )
}

export default Loader;