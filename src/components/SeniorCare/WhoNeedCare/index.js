import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/SeniorCare/WhoNeedCare.css'
const WhoNeedCare = () => {
    const getInitialState = () => {
        const value = "Orange";
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className='container-fluid whoNeedCare-section'>
            <div className='container whoNeedCare-container'>
                <div className='mid-box'>
                    <h2>Let’s get started by learning more about your senior care needs</h2>
                    <p>Who Need Care ?</p>
                </div>
                <div className='box'>My Parent</div>
                <div className='box'>My Spouse</div>
                <div className='box'>MySelf</div>
                <div className='box'>Other</div>
                <div className='d-box'>
                    <p>How old are you ?</p>
                    <select className='select' value={value} onChange={handleChange}>
                        <option value="Orange">30's</option>
                        <option value="Radish">40's</option>
                        <option value="Cherry">50's</option>
                        <option value="Cherry">60's</option>
                        <option value="Cherry">70's</option>
                        <option value="Cherry">80's</option>
                        <option value="Cherry">90's</option>
                        <option value="Cherry">100's</option>
                    </select>
                </div>
                <div className='next-btn'>
                    <Link to="describe">Next</Link>
                </div>
            </div>
        </div>
    )
}

export default WhoNeedCare
