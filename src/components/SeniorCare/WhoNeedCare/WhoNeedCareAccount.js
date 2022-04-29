import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/SeniorCare/SeniorCareAccount.css'

const WhoNeedCareAccount = () => {
  return (
    <div className='container-fluid seniorAccount-section'>
            <div className='container seniorAccount-container'>
                <div className='mid-box'>
                    <h2>Almost there! Please create a free account to continue.</h2>
                </div>
                <div className='box'>                  
                        <input type='text' placeholder='Email Address'/>                   
                </div>
                <div className='next-btn'>
                    <Link to="details">Next</Link>
                </div>
            </div>
        </div>
  )
}

export default WhoNeedCareAccount
