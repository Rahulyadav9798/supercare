import React from 'react'
import '../../styles/ChildCare/ChildCareTimeTable.css'

const ChildCareTimeTable = () => {
    return (
        <>
            <div className='container-fluid childCareTimeTable-section'>
                <div className='container childCareTimeTable-container'>
                    <div className='head-box'>
                        <p>We have over 103 caregivers, let's find the best fit for you</p>
                        <h2>When do you need pet care?</h2>
                    </div>
                    <div className='btns-box'>
                        <input type="radio" id='recurring' value="recurring" name="type" />
                        <label htmlFor="recurring" className='btnn btnn1'>Recurring</label>
                        <input type="radio" id='OneTime' value="OneTime" name="type" />
                        <label htmlFor="OneTime" className='btnn btnn2'>One Time</label>
                    </div>
                    <form>
                        <div className='date-box'>
                            <label htmlFor="#" className='date-para'>Estimated start date
                                <input
                                    type="date" />
                            </label>
                            <label htmlFor="#" className='date-para'>Estimated end date (optional)
                                <input
                                    type="date" />
                            </label>
                            <label htmlFor="flexible" className='flexible'>
                                <input type="checkbox" name='flexible' id='flexible' />
                                My Start date is flexible
                            </label>
                            <div className='head-box'>
                                <h2>Which days?</h2>
                            </div>
                        </div>
                        <div className='week_days'>
                            <label htmlFor="sunday"><input type="checkbox" id='sunday' value='sunday' name='sunday' /> Sun</label>
                            <label htmlFor="monday"> <input type="checkbox" id='monday' value='monday' name='monday' /> Mon </label>
                            <label htmlFor="tuesday"><input type="checkbox" id='tuesday' value='tuesday' name='tuesday' /> Tue </label>
                            <label htmlFor="wednesday"><input type="checkbox" id='wednesday' value='wednesday' name='wednesday' /> Wed  </label>
                            <label htmlFor="thursday"><input type="checkbox" id='thursday' value='thursday' name='thursday' /> Thu </label>
                            <label htmlFor="friday"><input type="checkbox" id='friday' value='friday' name='friday' /> Fri </label>
                            <label htmlFor="saturday"><input type="checkbox" id='saturday' value='saturday' name='saturday' /> Sat </label>
                        </div>
                    </form>
                    {/*
                    <div className='bottom'>
                        <div>
                            Sunday  9:00 AM - 5 :00 PM
                        </div>
                        <div>  <i class="fa-solid fa-angle-down"></i></div>

                    </div>

                    <div>
                        <label className='checkbtn' >
                            <input type="checkbox" />
                            <span className='btn'>My schedule may vary</span>
                        </label>
                    </div>
                    <div className='head-box'>
                        <h2>What would you like to pay per hour?</h2>
                    </div>
                    <p>The average range in your area is $15 - $25.</p>
                    <div>
                        <Slider
                            value={value}
                            onChange={rangeSelector}
                            valueLabelDisplay="auto"
                        />
                    </div>

                    <div className='last'>per hour</div> */}

                    {/* <div className='next-btn'>
                        <a href="#">Next</a>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ChildCareTimeTable
