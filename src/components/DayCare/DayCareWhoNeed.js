import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/DayCare/DayCareWhoNeed.css'
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DayCareWhoNeed = () => {
    return (
        <>
            <div className='whoCare-section'>
                <div className='whoCare-container'>
                    <div className='mid-box'>
                        <h2>Who needs care?</h2>
                    </div>
                    <div className="mainBox">
                        <p className='child-heading'>Child 1</p>
                        <span className='dob'>Date of Birth</span>
                        <div className='box'>

                            <input type="date" />
                            <span><i className="fa-solid fa-chevron-down"></i></span>
                        </div>
                    </div>
                    <div className='box  another-child'>
                        +  Add another child
                    </div>
                    <div className='next-btn'>
                        <Link to='#'>Next</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DayCareWhoNeed
