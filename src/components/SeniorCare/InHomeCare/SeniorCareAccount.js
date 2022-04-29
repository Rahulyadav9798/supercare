import React from 'react'
import EmailAccount from '../../UI/EmailAccount'

const emailProps ={
    heading:"Create a free account to see caregivers who match your needs.",
    link:"name"
}

const SeniorCareAccount = () => {
    return (
        <EmailAccount {...emailProps}/>
    )
}

export default SeniorCareAccount
