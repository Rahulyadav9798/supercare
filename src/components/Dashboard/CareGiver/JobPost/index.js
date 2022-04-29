import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import TimePicker from 'react-time-picker';
import getJobKidsLove from './GetJobKidsLove';
import GetJobAdditional from './GetJobAdditional';
import '../../../../styles/Dashboard/JobPost.css'
import GetJobKidsLove from './GetJobKidsLove';

const JobPost = () => {
    const [value, onChange] = useState('10:00');
    const [timeFrom, SetTimeFrom] = useState("10:00")
    const [form, setForm] = useState("recurring");
    const [careNeed, setCareNeed] = useState("Immediately");

    const formHandleChange = (e) => {
        setForm(e.target.value)
    }
    const needHandleChange = (e) => {
        setCareNeed(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        let formObj = {};
        const formData = new FormData(e.currentTarget);
        for (let [key, value] of formData.entries()) {
            // console.log(key, value)
            console.log(key, value)
        }
    }
    return (
        <section className='job-section'>
            <div className="job-container">
                <form onSubmit={onSubmit}>
                    <p className='head-para'>Tell us how we can help you.</p>
                    <div className='top-box'>
                        <label htmlFor="title">Job Post Title</label>
                        <input type="text" id='title' name='title' />
                        <label htmlFor="desc">Description</label>
                        <input type="text" id='desc' name='desc' />
                        <div className='job-offer'>
                            <p>How often will this job occur?</p>
                            <input type="radio" id='recurring' name='recurring' value="recurring" onChange={formHandleChange}
                                checked={form === 'recurring'} />
                            <label htmlFor="recurring">Regularly Scheduled</label>
                            <input type="radio" id='occasional' value="occasional" name='occasional' onChange={formHandleChange}
                                checked={form === 'occasional'} />
                            <label htmlFor="occasional">Occasional/One Time</label>
                        </div>
                    </div>
                    <div className='mid-box'>
                        <p>How soon is care needed:</p>
                        <input type="radio" id='Immediately' value='Immediately' name='Immediately' checked={careNeed === "Immediately"} onChange={needHandleChange} />
                        <label htmlFor="Immediately">Immediately</label>
                        <input type="radio" id='WithinDays' value='WithinDays' name='WithinDays' checked={careNeed === "WithinDays"} onChange={needHandleChange} />
                        <label htmlFor="WithinDays">Within Days</label>
                        <input type="radio" id='WithinWeeks' value='WithinWeeks' name='WithinWeeks' checked={careNeed === "WithinWeeks"} onChange={needHandleChange} />
                        <label htmlFor="WithinWeeks">WithinWeeks</label>
                        <input type="radio" id='WithinMonths' value='WithinMonths' name='WithinMonths' checked={careNeed === "WithinMonths"} onChange={needHandleChange} />
                        <label htmlFor="WithinMonths">WithinMonths</label>
                        <input type="radio" id='NotSure' value='NotSure' name='NotSure' checked={careNeed === "NotSure"} onChange={needHandleChange} />
                        <label htmlFor="NotSure">NotSure</label>
                    </div>
                    <div className='zip-box'>
                        <label htmlFor="#">Location Zip Code</label>
                        <input type="text" />
                    </div>
                    <div className='fromTo'>
                        <p>From</p>
                        <TimePicker onChange={onChange} clockIcon={null} clearIcon={null} format="h:m:s a" value={value} />
                        <p>To</p>
                        <TimePicker onChange={onChange} clockIcon={null} clearIcon={null} format="h:m:s a" value={value} />

                    </div>
                    <div className='caregiver-type'>
                        <p> Type of caregiver needed:</p>
                        <label htmlFor="babysitter">
                            <input type="radio" id='babysitter' value='babysitter' />
                            Babysitter
                        </label>
                        <label htmlFor="Nanny">
                            <input type="radio" id='Nanny' value='Nanny' />
                            Nanny
                        </label>
                        <label htmlFor="ChildCareCenter">
                            <input type="radio" id='ChildCareCenter' value='ChildCareCenter' />
                            Child Care Center
                        </label>
                        <label htmlFor="LiveIn">
                            <input type="radio" id='LiveIn' value='LiveIn' />
                            Live-in caregiver
                        </label>
                        <label htmlFor="FamilyChildCare">
                            <input type="radio" id='FamilyChildCare' value='FamilyChildCare' />
                            Family Child Care (In-Home Daycare)
                        </label>
                        <label htmlFor="PartTimeBabysitter">
                            <input type="radio" id='PartTimeBabysitter' value='PartTimeBabysitter' />
                            Part-time Babysitter
                        </label>
                    </div>
                    <div className='NumChildren'>
                        <p>Number of Children</p>
                        <select name="childcount" id="childCount">
                            <option selected disabled>0-6 Mo</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <select name="childcount" id="childCount">
                            <option selected disabled>7 Mo-3 Yrs </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <select name="childcount" id="childCount">
                            <option selected disabled>4-6 Yrs </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <select name="childcount" id="childCount">
                            <option selected disabled>7-11 Yrs </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <select name="childcount" id="childCount">
                            <option selected disabled>12+ Yrs </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className='additional-requirments'>
                        <p>Additional requirments</p>
                        <GetJobAdditional />

                    </div>
                    <div className='myKids-love'>
                        <p>My kids love</p>
                        {/* <label htmlFor="sports"> <input type="checkbox" name='myKidsLove' id='sports' /> Sports</label>
                        <label htmlFor="musicDrama"> <input type="checkbox" name='myKidsLove' id='musicDrama' /> Music / drama</label>
                        <label htmlFor="artsCrafts"> <input type="checkbox" name='myKidsLove' id='artsCrafts' />Arts & crafts</label>
                        <label htmlFor="games"> <input type="checkbox" name='games' id='myKidsLove' />Games</label>
                        <label htmlFor="outdoorActivities"> <input type="checkbox" name='myKidsLove' id='outdoorActivities' />Outdoor activities</label>
                        <label htmlFor="reading"> <input type="checkbox" name='reading' id='myKidsLove' />Reading</label> */}
                        <GetJobKidsLove />
                    </div>
                    <div className='pay-rate'>
                        <p>Education Level</p>
                        <select name="education">
                            <option selected disabled>education</option>
                            <option value="Some high school">Some high school</option>
                            <option value="High school degree">High school degree</option>
                            <option value="Some college">Some college</option>
                            <option value="College degree">College degree</option>
                            <option value="Some Graduate school">Some Graduate school</option>
                            <option value="Some Graduate degree">Some Graduate degree</option>
                        </select>
                    </div>
                    <div className='pay-rate'>
                        <p>Pay Rate</p>
                        <select name="payRate">
                            <option selected disabled>Min</option>
                            <option value="$5/hr">$5/hr</option>
                            <option value="$10/hr">$10/hr</option>
                            <option value="$15/hr">$15/hr</option>
                            <option value="$20/hr">$20/hr</option>
                            <option value="$25/hr">$25/hr</option>
                            <option value="$30/hr">$30/hr</option>
                        </select>
                    </div>
                    <div className='expire-date'>
                        <label htmlFor="expire">Your job post will expire on</label>
                        <input type="text" name='expireDate' />
                    </div>
                    <div className='post-btn'>
                        {/* <button type="submit" onClick={getJobKidsLove}>Post</button>
                        <button type="submit" onClick={getJobAdditional}>Additional</button> */}
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        </section>
    )
}

export default JobPost
