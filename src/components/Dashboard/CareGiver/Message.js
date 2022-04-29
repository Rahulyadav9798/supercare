import React from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/Dashboard/ParentHome.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Button from '@mui/material/Button';

const Message = () => {
    return (
        <>
                <div className='outlet-card'>
                    <h3><Link to="#">Message from Deo</Link></h3>
                    <p><AccessTimeIcon style={{ color: "#4ab242", fontSize: "20px" }} /> Fri April 22 2022</p>
                    <p>My mail id is demo123@gmail.com</p>
                </div>
        </>
    )
}

export default Message
