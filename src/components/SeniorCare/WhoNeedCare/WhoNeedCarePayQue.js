import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/SeniorCare/SeniorHelpType.css'
const WhoNeedCarePayQue = () => {
    return (
        <div className='container-fluid seniorHelp-section payque-section'>
            <div className='container seniorHelp-container'>
                <div className='mid-box'>
                    <h2>Which of the following benefits do you have access to?</h2>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Private pay</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Long-term care insurance</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>A home you own</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Veteran's benefits</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>None of the above</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='next-btn'>
                    <Link to="account">Next</Link>
                </div>
            </div>
        </div>
    )
}
export default WhoNeedCarePayQue
