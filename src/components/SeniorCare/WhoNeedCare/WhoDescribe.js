import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/SeniorCare/WhoNeedCare.css'
const WhoDescribe = () => {
    return (
        <div className='container-fluid whoNeedCare-section'>
            <div className='container whoNeedCare-container'>
                <div className='mid-box'>
                    <h2>How would you describe yourself?</h2>
                </div>
                <Link to='help-type'>
                    <div className='box'>Independent</div>
                </Link>
                <Link to='help-type'>
                    <div className='box'>Needs monitoring or extra help</div>
                </Link>
                <Link to='help-type'>
                    <div className='box'>Requires constant supervision</div>
                </Link>
                <Link to='help-type'>
                    <div className='box'>I’m not sure</div>
                </Link>
            </div>
        </div>
    )
}

export default WhoDescribe
