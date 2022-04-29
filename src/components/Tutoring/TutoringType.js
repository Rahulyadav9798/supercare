import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/SeniorCare/SeniorHelpType.css'
const TutoringType = () => {
    return (
        <div className='container-fluid seniorHelp-section'>
            <div className='container seniorHelp-container'>
                <div className='mid-box'>
                    <h2>What kind of help are you looking for?</h2>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Online</h6>
                            <p>Widest selection of prices and expertise.</p>
                        </div>
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>In-Person</h6>
                            <p>Face-to-face with a tutor near you.</p>
                        </div>
                       
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Either</h6>
                        </div>
                       
                    </label>
                </div>
                <div className='next-btn'>
                    <Link to="account">Next</Link>
                </div>
            </div>
        </div>
    )
}

export default TutoringType
