import React from 'react'

const myComponent = (props) => {
    if (props.info.pageName == 'Contact') {
        return (
            <>
                <p>This is <b>{props.info.pageName}</b> Page</p>
                <p>Email : {props.info.email}</p>
                <p>Phone : {props.info.mobile}</p>
            </>
        )
    } else {
        return (
            <>
                <p>This is <b>{props.info.pageName}</b> Page</p>
                <p>Name : {props.info.name}</p>
                <p>Occupation : {props.info.occupation}</p>
            </>
        )
    }
}

export default myComponent;