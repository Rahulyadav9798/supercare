import React from 'react'
import ZipCodeLocation from '../UI/ZipCodeLocation'

const zipProps ={
    heading:"Where do you need care?",
    link:"need"
}

const DayCareLocation = () => {
  return (
    <div>
      <ZipCodeLocation {...zipProps}/>
    </div>
  )
}

export default DayCareLocation
