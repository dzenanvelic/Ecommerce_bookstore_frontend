import React from 'react'
import './backlayer.css'
function BackLayer({ closeDrawer }) {
    return (
        <div className='backlayer' onClick={closeDrawer}></div>
    )
}

export default BackLayer