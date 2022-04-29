import React from 'react'
import ZipCodeLocation from '../UI/ZipCodeLocation'

const zipProps ={
    heading:"Let's confirm where you'll need help.",
    link:"account"
}

const HouseKeepingLocations = () => {
  return (
    <div>
      <ZipCodeLocation {...zipProps}/>
    </div>
  )
}

export default HouseKeepingLocations
