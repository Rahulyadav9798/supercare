import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/HouseKeeping/HouseKeepingWhatTask.css'
const HouseKeepingWhatTask = () => {
    return (
        <div className='container-fluid housetask-section'>
            <div className='container housetask-container'>
                <div className='mid-box'>
                    <h2>What tasks do you expect your housekeeper to complete?</h2>
                    <p className='mid-para'>Click all that apply</p>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Bathroom cleaning</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Kitchen cleaning</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>General room cleaning</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Window washing</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Carpet shampooing</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Furniture treatment</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>Laundry</h6>
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

export default HouseKeepingWhatTask
