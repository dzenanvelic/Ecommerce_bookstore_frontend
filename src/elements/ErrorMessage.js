import React from 'react'
import './error.css'
function ErrorMessage(props) {
    return (
        <div className='error'>{props.children}</div>
    )
}

export default ErrorMessage