import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/UI/Name.css'
import careOptionStorage from '../LocalStorage/CareOptionStorage'
import ScrollTop from './ScrollTop'

const Password = (props) => {
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const pswrdHandleChange = (e) => {
        setPassword(e.target.value)
        careOptionStorage("password", password)
    }
    const childData = JSON.parse(localStorage.getItem("child_registration"))
    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://daycare.uveoustech.com/api/_Account/Reg",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ITCode: null,
                    Password: "123456789",
                    FirstName: "Rahul",
                    LastName: "yadav",
                    ZipCode: "201301",
                    Email: "iamrahulyadav002@gmail.com",
                    HearAboutUsId: 0,
                    CompanyName: "SuperCare",
                    PhoneNumber: "852369844",
                    Address: "Ithum",
                    AccountType: 0,
                    CompanyType: 0,
                    CareGiver: null
                }),
            }).then(function (response) {
                return response.json();
            })
            .then(data => console.log(data));
        // navigate(props.link)
    }

    return (
        <div className="name-section">
            <div className='name-container'>
                <div className='mid-box'>
                    <h2>{props.heading}</h2>
                </div>
                <div className='box'>
                    <input type='text' onChange={pswrdHandleChange} placeholder='Password' />
                </div>
                <div className='next-btn'>
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Password
