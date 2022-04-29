import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/SeniorCare/SeniorCareAccount.css'

const TutoringName = () => {
    const getInitialState = () => {
        const value = "Select";
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className='container-fluid seniorAccount-section'>
            <div className='container seniorAccount-container'>
                <div className='mid-box'>
                    <h2>Almost done, add a few details about yourself.</h2>
                </div>
                <div className='box'>
                    <input type='text' placeholder='First Name' />
                </div>
                <div className='box'>
                    <input type='text' placeholder='Last Name' />
                </div>
                <p>How old are you ?</p>
                <div className='tutor-box box'>
                    <select className='select' value={value} onChange={handleChange}>
                        <option value="Orange">Streaming Video Ad (Hulu, Roku)</option>
                        <option value="Radish">Facebook or Instagram</option>
                        <option value="Cherry">Other Social Media (Twitter, Pinterest, LinkedIn, TikTok)</option>
                        <option value="Cherry">Radio/Audio Ad (iHeart, Pandora, Podcast)</option>
                        <option value="Cherry">Cable TV Ad</option>
                        <option value="Cherry">Billboard</option>
                        <option value="Cherry">YouTube</option>
                        <option value="Cherry">Influencer</option>
                        <option value="Cherry">Parenting Group or Forum</option>
                        <option value="Cherry">Friends or Family</option>
                        <option value="Cherry">Search Engine (Google, Bing)</option>
                        <option value="Cherry">Press Coverage (News, Magazine, Blog)</option>
                        <option value="Cherry">Banner Ad</option>
                    </select>
                </div>
                <div className='next-btn'>
                    <Link to="#">Join Now</Link>
                </div>
            </div>
        </div>
    )
}

export default TutoringName
