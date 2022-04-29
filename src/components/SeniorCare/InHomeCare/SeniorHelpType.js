import React from 'react'
import CheckType from '../../UI/CheckType'

const checkProps ={
    heading:"What kind of help are you looking for?",
    subHeading1:"Households Tasks",
    subPara1:"Errands, houseKeeping and meal prep",
    subHeading2:"Specialized care",
    subPara2:"Memory care use of special equipment",
    subHeading3:"Transporation",
    subPara3:"Trips to appointments and errands",
    subHeading4:"Personal Care",
    subPara4:"Memory care use of special equipment",
    subHeading5:"Companionship",
    subPara5:"Sharing hobbies and lending an ear",
    link:"location"
}

const SeniorHelpType = () => {
    return (
        <CheckType {...checkProps}/>
    )
}

export default SeniorHelpType
