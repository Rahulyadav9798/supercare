import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/SeniorCare/SeniorHelpType.css'
const WhoNeedCareHelpType = () => {
    return (
        <div className='container-fluid seniorHelp-section'>
            <div className='container seniorHelp-container'>
                <div className='mid-box'>
                    <h2>What kind of help are you looking for?</h2>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Everyday Tasks</h6>
                            <p>Laundry, and meal prep</p>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Mobility assistance</h6>
                            <p>Lift, transfers, physical activity, etc.</p>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Memory care</h6>
                            <p>Alzheimer's dementia or memory care.</p>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Personal Care</h6>
                            <p>Bathing, dressing and feeding</p>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Companionship</h6>
                            <p>Sharing hobbies and lending an ear</p>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='next-btn'>
                    <Link to="location">Next</Link>
                </div>
            </div>
        </div>
    )
}

export default WhoNeedCareHelpType
