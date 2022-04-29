import React, { useState } from 'react'
import '../../styles/CreateProfile/Register.css'
import AsCompany from './AsCompany'
import AsIndividual from './AsIndividual'
import HireCaregiver from './HireCaregiver'

const Register = () => {
    const [form, setForm] = useState("hire")
    const [describeValue, setDescribeValue] = useState("Individual")

    const handleChange = (event) => {
        setForm(event.target.value)
    }
    return (
        <>
            <div className='register-section'>
                <div className='register-container'>
                    <h1 className='heading'>Try SuperCare.com today!</h1>

                    <div className='sub-container'>
                        <p>What would you like to do?*</p>
                        <div className="radio-container">
                            <div className='radioBox'>
                                <input type="radio" value="hire" id="hire"
                                    name="hire"
                                    checked={form === 'hire'}
                                    onChange={handleChange} />
                                <label htmlFor="hire">Parent</label>
                            </div>
                            <div className='radioBox'>
                                <input type="radio" value="apply" id="apply"
                                    name="apply"
                                    checked={form === 'apply'}
                                    onChange={handleChange}
                                />
                                <label htmlFor="apply" className='box'>Babysitter</label>
                            </div>
                        </div>
                        {form === 'hire' ?
                            <HireCaregiver />
                            : <div>
                                {describeValue === "Individual" ?
                                    <AsIndividual setDescribeValue={setDescribeValue} />
                                    : <AsCompany setDescribeValue={setDescribeValue} />
                                }
                            </div>
                        }

                    </div>
                </div >
            </div >
        </>

    )
}

export default Register
