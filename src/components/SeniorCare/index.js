import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/SeniorCare/SeniorCare.css'
const SeniorCare = () => {
    return (
        <div className='container-fluid senior-section'>
            <div className='container senior-container'>
                <div className='trust-box'>
                    <p className='trust-para'>Find trusted senior care near you</p>
                </div>
                <div className='mid-box'>
                    <h2>What type of care are you interested in?</h2>
                </div>
                <Link to="help-type">
                    <div className='box'>In-home Care</div>
                </Link>
                <Link to='who-need-care'>
                    <div className='box'>Senior living community</div>
                </Link>
                <div className='box'>I am not sure yet</div>
            </div>
        </div>
    )
}
export default SeniorCare
