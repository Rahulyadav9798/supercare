import React, { useState } from 'react'
import '../../styles/DayCare/DayCareKind.css'
import RadioButton from './RadioButton';
import ScrollTop from './ScrollTop';


const RadioForm = () => {
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
                    <RadioButton value="Now" id="Now" name="whenNeed" label="Right now" />
                    <RadioButton value="week" id="week" name="whenNeed" label="Within week" />
                    <RadioButton value="month" id="month" name="whenNeed" label="In 1-2 months" />
                    <RadioButton value="browsing" id="browsing" name="whenNeed" label="Just browsing" />

                    <div className='next-btn'>
                        <button type="submit" onClick={ScrollTop}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default RadioForm
