import React from 'react'
import Name from '../UI/Name'

const nameProps ={
    heading:"Almost done, add a few details about yourself.",
    link:"password"
}

const HouseKeepingName = () => {
  return (
    <div>
      <Name {...nameProps}/>
    </div>
  )
}

export default HouseKeepingName
