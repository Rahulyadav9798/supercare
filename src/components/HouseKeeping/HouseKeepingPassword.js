import React from 'react'
import Password from '../UI/Password'

const passwordProps={
    heading:"Setup your password.",
    link:"#"
}

const HouseKeepingPassword = () => {
  return (
    <div>
      <Password {...passwordProps}/>
    </div>
  )
}

export default HouseKeepingPassword
