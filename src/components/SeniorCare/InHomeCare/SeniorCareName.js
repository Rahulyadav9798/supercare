import React from 'react'
import Name from '../../UI/Name'

const careProps ={
    heading:"What is your name ?",
    link:"password"
}

const SeniorCareName = () => {
  return (
    <Name {...careProps}/>
  )
}
export default SeniorCareName
