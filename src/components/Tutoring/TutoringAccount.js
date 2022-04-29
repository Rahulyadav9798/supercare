import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/SeniorCare/SeniorCareAccount.css'

const TutoringAccount = () => {
  return (
    <div className='container-fluid seniorAccount-section'>
            <div className='container seniorAccount-container'>
                <div className='mid-box'>
                    <h2>Create a free account</h2>
                    <p>See tutors who match your needs. It only takes a few seconds.</p>
                </div>
                <div className='box'>                  
                        <input type='text' placeholder='Email Address'/>                   
                </div>
                <div className='next-btn'>
                    <Link to="name">Next</Link>
                </div>
            </div>
        </div>
  )
}

export default TutoringAccount
