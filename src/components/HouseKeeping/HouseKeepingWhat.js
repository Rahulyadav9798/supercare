import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../../styles/SeniorCare/SeniorCareAccount.css'
import '../../styles/HouseKeeping/HouseKeepingWhat.css'


const HouseKeepingWhat = () => {
    const getInitialState = () => {
        const value = "Select";
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
  return (
    <div className='container-fluid seniorAccount-section housekeeping-section'>
            <div className='container seniorAccount-container'>
                <div className='mid-box'>
                    <h2>Tell us what your housekeeper should know about your home.</h2>
                    <p>How many bedrooms and bathrooms?</p>
                </div>
                <p>Bedrooms</p>
                <div className='tutor-box box'>
                    <select className='select' value={value} onChange={handleChange}>
                        <option value="Orange">1</option>
                        <option value="Orange">2</option>
                        <option value="Orange">3</option>
                        <option value="Orange">4</option>
                        <option value="Orange">5</option>
                        <option value="Orange">6</option>
                        <option value="Orange">7</option>
                        <option value="Orange">8</option>
                        <option value="Orange">9</option>
                        <option value="Orange">10</option>
                        
                    </select>
                </div>
                <p>Bathrooms</p>
                <div className='tutor-box box'>
                    <select className='select' value={value} onChange={handleChange}>
                        <option value="Orange">1</option>
                        <option value="Orange">2</option>
                        <option value="Orange">3</option>
                        <option value="Orange">4</option>
                        <option value="Orange">5</option>
                        <option value="Orange">6</option>
                        <option value="Orange">7</option>
                        <option value="Orange">8</option>
                        <option value="Orange">9</option>
                        <option value="Orange">10</option>
                        
                    </select>
                </div>
                <p className='mid-para'>What should your housekeeper bring?</p>
                <div className='label-box'>
                        <div className='left-box'>
                            <h6>Supplies</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                </div>
                <div className='label-box'>
                        <div className='left-box'>
                            <h6>Equipment</h6>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                </div>
                <div className='next-btn'>
                    <Link to="task">Next</Link>
                </div>
            </div>
        </div>
  )
}

export default HouseKeepingWhat
