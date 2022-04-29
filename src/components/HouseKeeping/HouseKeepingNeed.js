import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Tutoring/Tutoring.css'
const HouseKeepingNeed = () => {
    return (
        <div className='container-fluid tutoring-section'>
            <div className='container tutoring-container'>
                <div className='mid-box'>
                    <h2>When do you need a housekeeper?</h2>
                </div>
                <div className='box'>Right Now</div>
                <div className='box'>Within a week</div>
                <div className='box'>In 1-2 months</div>
                <div className='box'>Just Browsing</div>
                <div className='next-btn'>
                    <Link to="type">Next</Link>
                </div>
            </div>
        </div>
    )
}

export default HouseKeepingNeed
