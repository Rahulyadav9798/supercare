import React from 'react'
import { Link } from 'react-router-dom'

const WhoNeedCarePayPassword = () => {
    return (
        <div className='container-fluid seniorAccount-section'>
            <div className='container seniorAccount-container'>
                <div className='mid-box'>
                    <h2>One final step.
                        Create a password</h2>
                </div>
                <div className='box'>
                    <input type='password' placeholder='Password' />
                </div>
                <div className='next-btn'>
                    <Link to="#">Submit</Link>
                </div>
            </div>
        </div>
    )
}

export default WhoNeedCarePayPassword
