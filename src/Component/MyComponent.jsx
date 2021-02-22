import React from 'react'

export const Home = (props) => {
    return (
        <>
            <p>This is <b>{props.info.pageName}</b> Page</p>
            <p>Name : {props.info.name}</p>
            <p>Occupation : {props.info.occupation}</p>
        </>
    )
}

export const Contact = (props) => {
    return (
        <>
            <p>This is <b>{props.info.pageName}</b> Page</p>
            <p>Email : {props.info.email}</p>
            <p>Phone : {props.info.mobile}</p>
        </>
    )
}