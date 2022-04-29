import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/UI/Name.css'
import careOptionStorage from '../LocalStorage/CareOptionStorage'
import ScrollTop from './ScrollTop'

const Name = (props) => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const navigate = useNavigate()

    const fnameHandleChange = (e) => {
        setFname(e.target.value)
    }
    const lnameHandleChange = (e) => {
        setLname(e.target.value)
    }

    const toComponentAccount = () => {
        careOptionStorage("f_name", fname)
        careOptionStorage("l_name", lname)
        navigate(props.link)
    }

    return (
        <div className='name-section'>
            <div className='name-container'>
                <div className='mid-box'>
                    <h2>{props.heading}</h2>
                </div>
                <div className='box'>
                    <input type='text' onChange={fnameHandleChange} placeholder='First Name' />
                </div>
                <div className='box'>
                    <input type='text' onChange={lnameHandleChange} placeholder='Last Name' />
                </div>
                <div className='next-btn'>
                    {/* <Link to={props.link}  onClick={ScrollTop}>Next</Link> */}
                    <button type='submit' onClick={toComponentAccount}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Name
