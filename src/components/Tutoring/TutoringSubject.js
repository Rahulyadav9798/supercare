import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Tutoring/TutoringSubject.css'
const TutoringSubject = () => {
    return (
        <div className='container-fluid tutorSubject-section'>
            <div className='container tutorSubject-container'>
                <div className='mid-box'>
                    <h2>Which subjects do you need help with?</h2>
                    <p>Select all that apply</p>
                </div>
                
                <div className='btm-Box'>
                <div className='box'>Art</div>
                <div className='box'>Business</div>
                <div className='box'>Computers</div>
                <div className='box'>Dance</div>
                <div className='box'>English</div>
                <div className='box'>Foreign Language</div>
                <div className='box'>Math</div>
                <div className='box'>Music & Drama</div>
                <div className='box'>Musical Instruments</div>
                <div className='box'>Science</div>
                <div className='box'>Special Education</div>
                <div className='box'>Sports & Fitness</div>
                <div className='box'>Test Prep</div>
                <div className='box'>Other</div>
                </div>
                <div className='next-btn'>
                    <Link to="location">Next</Link>
                </div>
            </div>
        </div>
    )
}

export default TutoringSubject
