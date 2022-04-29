import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/DayCare/DayCareKind.css'
import RadioForm from '../UI/RadioForm';


const DayCareKind = () => {
  const [when, setWhen] = useState('')
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(when)
  };
  const handleChange = (e) => {
    const whenNeed = (e.target.value)
    setWhen(whenNeed)
  }
  return (
    <div className='dayCareKind-section'>
      <div className='dayCareKind-container'>
        <div className='mid-box'>
          <h2>When do you need care?</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className='radioBox'>
            <input type="radio" value="Now" id="Now"
              onChange={handleChange} name="whenNeed" />
            <label htmlFor="Now" className='box'>Right now</label>
          </div>
          <div className='radioBox'>
            <input type="radio" value="week" id="week"
              onChange={handleChange} name="whenNeed" />
            <label htmlFor='week' className='box'>Within a week</label>
          </div>
          <div className='radioBox'>
            <input type="radio" value="months" id="months"
              onChange={handleChange} name="whenNeed" />
            <label htmlFor='months' className='box'>In 1-2 months</label>
          </div>
          <div className='radioBox'>
            <input type="radio" value="browsing" id="browsing"
              onChange={handleChange} name="whenNeed" />
            <label htmlFor='browsing' className='box'>Just browsing</label>
          </div>
          <div className='next-btn'>
            <Link to='who-care'>
              <button type="submit">Submit</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
    // <RadioForm/>
  );

}

export default DayCareKind
