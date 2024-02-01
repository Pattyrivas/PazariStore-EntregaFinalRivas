import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Cartwidget() {
    const [count, useCount] = useState(0);
    return (
        <div className='contenedor-cart'>
            <button className='button-cart inline-flex items-center' onClick={() => useCount(count + 1)}>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: "#03001C", fontSize: "20px" }} />
                <p>{count}</p>
            </button>
        </div>
    )
}

export default Cartwidget