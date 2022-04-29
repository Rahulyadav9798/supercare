import React from 'react'
import Password from '../UI/Password'

const passwordProps = {
  heading: "You're one step closer to finding your perfect caregiver.",
  link: "care-time"
}

const ChildCarePassword = () => {
  return (
    <Password {...passwordProps} />
  )
}

export default ChildCarePassword