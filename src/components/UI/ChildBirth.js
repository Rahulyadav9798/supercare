import React from 'react'

const ChildBirth = () => {
    return (
        <>
            <div className='whoCare-section'>
                <div className='whoCare-container'>
                    <div className='mid-box'>
                        <h2>Who needs care?</h2>
                    </div>
                    <div className="mainBox">
                        <p className='child-heading'>Child 1</p>
                        <span className='dob'>Date of Birth</span>
                        <div className='box' onClick={CalendarHandler}>
                            <span>{date.toDateString()}</span>
                            <span><i className="fa-solid fa-chevron-down"></i></span>
                        </div>
                    </div>
                    <div className='box  another-child'>
                        +  Add another child
                    </div>
                    <div className='next-btn'>
                        <Link to='#'>Next</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChildBirth
