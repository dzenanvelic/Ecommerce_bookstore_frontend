import React, { Children } from 'react'
import './message.css'
function Message(props) {
    return (
        <div className='message'>{props.children}</div>
    )
}

export default Message