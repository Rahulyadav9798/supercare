import React from 'react'
import EmailAccount from '../UI/EmailAccount'

const accountProps ={
    heading:"Create a free account",
    link:"name"
}

const HouseKeepingAccount = () => {
  return (
    <div>
      <EmailAccount {...accountProps}/>
    </div>
  )


}
export default HouseKeepingAccount