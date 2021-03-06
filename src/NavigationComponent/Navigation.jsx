import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'


const Navigation = () => {

    return (
        <>
            <ul >
                <li style={disInline}>
                    <Link to='/'>Home</Link>
                </li>
                <li style={disInline}>
                    <Link to='/about'>About</Link>
                </li>
                <li style={disInline}>
                    <Link to='/product'>Product</Link>
                </li>
            </ul>
        </>
    )
}

const disInline = {
    display : 'inline-block',
    marginRight : '5px'
}

export default Navigation;