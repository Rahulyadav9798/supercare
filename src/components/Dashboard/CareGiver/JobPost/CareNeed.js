import React from 'react'
import { Link } from 'react-router-dom';
import '../../../../styles/Dashboard/ParentHome.css'

const CareNeed = (props) => {
    return (
        <>
            <div className='outlet-card team-section'>
                <Link to="#" onClick={() => props.setCareNeed(false)}>{'<'} Back</Link>
                <div className='post-job'>
                    <div className='left-box'>
                        <p>1</p>
                    </div>
                    <div className='right-box'>
                        <h3>Child Care</h3>
                        <p>Discover experienced, qualified childcare in your neighborhood.</p>
                        <p><Link to="job">Post now</Link></p>
                    </div>
                </div>
                <div className='post-job'>
                    <div className='left-box'>
                        <p>2</p>
                    </div>
                    <div className='right-box'>
                        <h3>Tutoring & Lessons</h3>
                        <p>Boost their grades and help them learn new skills — find a tutor in your area.</p>
                        <p><Link to="job">Post now</Link></p>
                    </div>
                </div>
                <div className='post-job'>
                    <div className='left-box'>
                        <p>3</p>
                    </div>
                    <div className='right-box'>
                        <h3>Special Needs</h3>
                        <p>Search for local, specialized caregivers that fit your needs.</p>
                        <p><Link to="job">Post now</Link></p>
                    </div>
                </div>
                <div className='post-job'>
                    <div className='left-box'>
                        <p>4</p>
                    </div>
                    <div className='right-box'>
                        <h3>Pet Care</h3>
                        <p>Find fur-friendly caregivers for grooming, dog-walking, pet sitting and more.</p>
                        <p><Link to="job">Post now</Link></p>
                    </div>
                </div>
                <div className='post-job'>
                    <div className='left-box'>
                        <p>5</p>
                    </div>
                    <div className='right-box'>
                        <h3>Senior Care</h3>
                        <p>Find companion, live-in, part-time or respite care.</p>
                        <p><Link to="job">Post now</Link></p>
                    </div>
                </div>
                <div className='post-job'>
                    <div className='left-box'>
                        <p>6</p>
                    </div>
                    <div className='right-box'>
                        <h3>Housekeeper</h3>
                        <p>Look for caregivers that will make your house look its best.</p>
                        <p><Link to="job">Post now</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareNeed
