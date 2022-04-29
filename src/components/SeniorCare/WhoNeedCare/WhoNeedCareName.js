import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/SeniorCare/SeniorCareAccount.css'

const WhoNeedCareName = () => {
    return (
        <div className='container-fluid seniorAccount-section'>
            <div className='container seniorAccount-container'>
                <div className='mid-box'>
                    <h2>Add a few more details about yourself.</h2>
                </div>
                <div className='box'>
                    <input type='text' placeholder='First Name' />
                </div>
                <div className='box'>
                    <input type='text' placeholder='Last Name' />
                </div>
                <div className='box'>
                    <input type='text' placeholder='Phone Number' />
                </div>
                <div className='next-btn'>
                    <Link to="who-password">Next</Link>
                </div>
            </div>
        </div>
    )
}

export default WhoNeedCareName
