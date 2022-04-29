import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/DayCare/DayCareKind.css'
import careOptionStorage from '../LocalStorage/CareOptionStorage'


const ChildCareKind = () => {
    const [kind, setKind] = useState('Nannies')
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(kind)
    };
    const handleChange = (e) => {
        const kindNeed = (e.target.value)
        setKind(kindNeed)
    }
    const toComponentAccount = () => {
        navigate('who-need')
        careOptionStorage("Needkinds", kind)
    }

    return (
        <div className='dayCareKind-section'>
            <div className='dayCareKind-container'>
                <div className='mid-box'>
                    <h2>What kind of care?</h2>
                </div>
                <form onSubmit={onSubmit}>
                    <div className='radioBox'>
                        <input type="radio" value="Nannies" id="Nannies"
                            onChange={handleChange} name="kindNeed" checked />
                        <label htmlFor="Nannies" className='box'>Nannies / recurring babysitters</label>
                    </div>
                    <div className='radioBox'>
                        <input type="radio" value="oneTimeBbySitters" id="oneTimeBbySitters"
                            onChange={handleChange} name="kindNeed" />
                        <label htmlFor='oneTimeBbySitters' className='box'>One-time babysitters</label>
                    </div>
                    <div className='radioBox'>
                        <input type="radio" value="DayCareCenters" id="DayCareCenters"
                            onChange={handleChange} name="kindNeed" />
                        <label htmlFor='DayCareCenters' className='box'>Daycare centers</label>
                    </div>
                    <div className='next-btn'>
                        <button type="submit" onClick={toComponentAccount}>Submit</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChildCareKind
