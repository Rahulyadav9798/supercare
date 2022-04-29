import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/UI/BoxModal.css'
import ScrollTop from './ScrollTop'
const BoxModal = (props) => {
    return (
        <div className='boxModal-section'>
            <div className='boxModal-container'>
                <div className='mid-box'>
                    <h2>{props.heading}</h2>
                </div>
                <div className='box'>{props.value1}</div>
                <div className='box'>{props.value2}</div>
                <div className='box'>{props.value3}</div>
                {props.value4 ? <div className='box'>{props.value4}</div> : null}

                <div className='next-btn'>
                    <Link to={props.link} onClick={ScrollTop}>Next</Link>
                </div>
            </div>
        </div>
    )
}

export default BoxModal

