import React from 'react'
import ZipCodeLocation from '../../UI/ZipCodeLocation'
// import { Link } from 'react-router-dom'
// import '../../../styles/SeniorCare/SeniorLocation.css'

const zipProps ={
    heading:"Where do you need care ?",
    link:"account"
}

const SeniorCareLocation = () => {
    return (
        <ZipCodeLocation {...zipProps}/>
    )
}

export default SeniorCareLocation
