import React from 'react'
import Password from '../../UI/Password'

const passwordProps ={
    heading:"You're one step closer to finding your perfect caregiver.",
    link:"#"
}

const SeniorCarePassword = () => {
  return (
    <Password {...passwordProps}/>
  )
}

export default SeniorCarePassword
