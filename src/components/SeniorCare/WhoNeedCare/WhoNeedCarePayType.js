import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/SeniorCare/WhoNeedCare.css'
const WhoNeedCarePayType = () => {
    return (
        <div className='container-fluid whoNeedCare-section'>
            <div className='container whoNeedCare-container'>
                <div className='mid-box'>
                    <h2>How are you thinking about covering the cost?</h2>
                </div>
                <Link to='account'>
                <div className='box'>                  
                        <div className='left-box'>
                            <h6>Private pay</h6>
                            <p>Payment via your own resources</p>
                        </div>                    
                </div>
                </Link>
                <Link to='pay-question'>
                <div className='box'>
                    <div className='left-box'>
                        <h6>Medicaid and/or Medicare</h6>
                        <p>Typically only individuals with low incomes are eligible for these programs</p>
                    </div>
                </div>
                </Link>
                <Link to='pay-question'>
                <div className='box'>
                    <div className='left-box'>
                        <h6>Help guide me</h6>
                        <p>Answer a quick question to find out</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default WhoNeedCarePayType
