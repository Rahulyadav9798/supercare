import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Tutoring/Tutoring.css'
import '../../styles/DayCare/DayCareKind.css'
const Tutoring = () => {
    const [when, setWhen] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(when)
    };
    const handleChange = (e) => {
        const whenNeed = (e.target.value)
        setWhen(whenNeed)
    }
    // return (
    //     <div className='container-fluid tutoring-section'>
    //         <div className='container tutoring-container'>
    //             <div className='mid-box'>
    //                 <h2>What level is this for?</h2>
    //             </div>
    //             <div className='box'>Adult</div>
    //             <div className='box'>College</div>
    //             <div className='box'>High school</div>
    //             <div className='box'>Middle school</div>
    //             <div className='box'>Elementry school</div>
    //             <div className='next-btn'>
    //                 <Link to="need">Next</Link>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <div className='dayCareKind-section'>
            <div className='dayCareKind-container'>
                <div className='mid-box'>
                    <h2>What level is this for?</h2>
                </div>
                <form onSubmit={onSubmit}>
                    <div className='radioBox'>
                        <input type="radio" value="Adult" id="Adult"
                            onChange={handleChange} name="whenNeed" />
                        <label htmlFor="Adult" className='box'>Adult</label>
                    </div>
                    <div className='radioBox'>
                        <input type="radio" value="College" id="College"
                            onChange={handleChange} name="whenNeed" />
                        <label htmlFor='College' className='box'>College</label>
                    </div>
                    <div className='radioBox'>
                        <input type="radio" value="HighSchool" id="High"
                            onChange={handleChange} name="whenNeed" />
                        <label htmlFor='High' className='box'>High school</label>
                    </div>
                    <div className='radioBox'>
                        <input type="radio" value="ElementrySchool" id="Elementry"
                            onChange={handleChange} name="whenNeed" />
                        <label htmlFor='Elementry' className='box'>Elementry school</label>
                    </div>
                    <div className='next-btn'>
                        <Link to="need">
                            <button type="submit">Submit</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Tutoring
