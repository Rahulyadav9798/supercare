import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/SeniorCare/SeniorLocation.css'
import ZipCodeLocation from '../UI/ZipCodeLocation'


const zipProps = {
    heading: "Where do you need care?",
    link: "type"
}
const TutoringLocation = () => {
    return (
        <ZipCodeLocation {...zipProps} />
    )
}

export default TutoringLocation
