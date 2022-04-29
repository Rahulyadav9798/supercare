import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/DayCare/DayCareWhoNeed.css'
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import 'react-calendar/dist/Calendar.css';
import careOptionStorage from '../LocalStorage/CareOptionStorage';

const ChildCareWhoNeed = () => {
    const [counter, setCounter] = useState(1);
    const [dob, setDOB] = useState("")
    const navigate = useNavigate()
    const handleClick = () => {
        setCounter(counter + 1);
    };

    const onSubmit = (e) => {
        e.preventDefault()
        let dobObj = {};
        let sr = 0;
        const formData = new FormData(e.currentTarget);
        for (let [key, value] of formData.entries()) {
            dobObj[sr++] = value;
        }
        careOptionStorage("DOB", dobObj)
        navigate("account")
    }
    return (
        <>
            <div className='whoCare-section'>
                <div className='whoCare-container'>
                    <div className='mid-box'>
                        <h2>Who needs care?</h2>
                    </div>
                    <form onSubmit={onSubmit}>
                        {Array.from(Array(counter)).map((c, index) => {
                            return <label htmlFor="addChild" key={c}>
                                <p className='child-heading'>Child {index + 1}</p>
                                <span className='dob'>Date of Birth</span>
                                <input type="date" name="date[]" placeholder='dd-mm-yyyy' min="2017-01-01" required="required" />
                            </label>;
                        })}
                        <div className='another-child'>
                            {/* <AddCircleIcon onClick={handleClick} style={{ color: "#3b71aa", cursor: "pointer" }} /> */}
                            <span style={{ fontSize: "18px", margin: "0 10px", fontWeight: "400" }}>Add another child</span>
                        </div>
                        <div className='next-btn'>
                            <button type='submit'>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChildCareWhoNeed
