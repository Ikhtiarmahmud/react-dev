import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'


const Navigation = () => {

    return (
        <>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <br/>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <br/>
                <li>
                    <Link to='/product'>Product</Link>
                </li>
            </ul>
        </>
    )
}

export default Navigation;