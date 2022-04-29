import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/DayCare/DayCareKind.css'
import careOptionStorage from '../LocalStorage/CareOptionStorage';

const ChildCareNeed = () => {
  const [when, setWhen] = useState('')
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(when)
  };
  const handleChange = (e) => {
    const whenNeed = (e.target.value)
    setWhen(whenNeed)
  }
  const toComponentKind = () => {
    navigate("kind")
    careOptionStorage("whenNeeded", when)
  }
  return (
    <div className='dayCareKind-section'>
      <div className='dayCareKind-container'>
        <div className='mid-box'>
          <h2>When do you need care?</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className='radioBox'>
            <input type="radio" value="Immediately" id="Now"
              onChange={handleChange} name="whenNeed" checked />
            <label htmlFor="Now" className='box'>Immediately</label>
          </div>
          <div className='radioBox'>
            <input type="radio" value="WithinAweek" id="week"
              onChange={handleChange} name="whenNeed" />
            <label htmlFor='week' className='box'>Within a week</label>
          </div>
          <div className='radioBox'>
            <input type="radio" value="In1-2months" id="months"
              onChange={handleChange} name="whenNeed" />
            <label htmlFor='months' className='box'>In 1-2 months</label>
          </div>
          <div className='radioBox'>
            <input type="radio" value="justBrowsing" id="browsing"
              onChange={handleChange} name="whenNeed" />
            <label htmlFor='browsing' className='box'>Just browsing</label>
          </div>
          <div className='next-btn'>
            <button type="submit" onClick={toComponentKind}>Submit</button>


          </div>
        </form>
      </div>
    </div>
  )
}

export default ChildCareNeed
