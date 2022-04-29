import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/SeniorCare/SeniorLocation.css'
import ZipCodeLocation from '../../UI/ZipCodeLocation'

const zipProps ={
    heading:"Where do you need care?",
    link:"paytype"
}

const WhoNeedCareLocation = () => {
    return (
        <ZipCodeLocation {...zipProps}/>
    )
}

export default WhoNeedCareLocation
