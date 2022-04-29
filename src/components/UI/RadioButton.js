import React from 'react'
import '../../styles/DayCare/DayCareKind.css'
const RadioButton = (props) => {
    return (
        <div className='radioBox'>
            <input type="radio" value={props.value} id={props.id}
                onChange={props.handleChange} name={props.name} />
            <label htmlFor={props.htmlFor} className='box'>{props.label}</label>
        </div>
    )
}

export default RadioButton
