import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/UI/EmailAccount.css'
import careOptionStorage from '../LocalStorage/CareOptionStorage'
import ScrollTop from './ScrollTop'

const EmailAccount = (props) => {
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    const emailhandleChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = () => {
        if (email <= 0) {
            return;
        }
        careOptionStorage("email", email)
        navigate(props.link)
        ScrollTop()
    }
    return (
        <div className='emailAccount-section'>
            <div className='emailAccount-container'>
                <div className='mid-box'>
                    <h2>{props.heading}</h2>
                </div>
                <div className='box'>
                    <input type='text' onChange={emailhandleChange} placeholder='Email Address' />
                </div>
                <div className='next-btn'>
                    <button onClick={onSubmit}>Next</button>
                </div>
            </div>
        </div>
    )
}
export default EmailAccount
