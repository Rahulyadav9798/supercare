import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/UI/CheckType.css'
import ScrollTop from './ScrollTop'

const CheckType = (props) => {
    return (
        <div className='checkType-section'>
            <div className='checkType-container'> 
                <div className='mid-box'>
                    <h2>{props.heading}</h2>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>{props.subHeading1}</h6>
                            <p>{props.subPara1}</p>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>{props.subHeading2}</h6>
                            <p>{props.subPara2}</p>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>{props.subHeading3}</h6>
                            <p>{props.subPara3}</p>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>{props.subHeading4}</h6>
                            <p>{props.subPara4}</p>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='box'>
                    <label>
                        <div className='left-box'>
                            <h6>{props.subHeading5}</h6>
                            <p>{props.subPara5}</p>
                        </div>
                        <input type='checkbox' name="box" id="box" />
                    </label>
                </div>
                <div className='next-btn'>
                    <Link to={props.link} onClick={ScrollTop}>Next</Link>
                </div>
            </div>
        </div>
    )
}

export default CheckType
