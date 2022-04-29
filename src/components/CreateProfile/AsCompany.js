import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/CreateProfile/Register.css'

const AsCompany = ({ setDescribeValue }) => {
    const [describe, setDescribe] = useState("");
    const [services, setServices] = useState("");
    const [companyName, setCompanyName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [zipLocation, setZipLocation] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [hear, setHear] = useState("");

    const describeHandleChange = (e) => {
        setDescribe(e.target.value)
        setDescribeValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("values")
    };
    return (
        <form onSubmit={onSubmit}>
            <div className='describe-box'>
                <select className='select' value={describe} onChange={describeHandleChange}>
                    <option value="select">What best describes you</option>
                    <option value="Individual">Individual</option>
                    <option value="Company">Company</option>
                </select>
            </div>
            <div className='describe-box'>
                <select className='select' value={services} onChange={(e) => setServices(e.target.value)}>
                    <option value="select">What Services do you offer?</option>
                    <option value="babysitter">Babysitter</option>
                    <option value="nanny" >Nanny</option>
                    <option value="specialNeeds" >Special Needs Provider</option>
                    <option value="tutoring" >Tutor</option>
                    <option value="tutoring" >Private Lesson Instructor</option>
                    <option value="seniorCare" >Senior Care Provider</option>
                    <option value="petCare" >Pet Care Provider</option>
                    <option value="housekeeping" >Housekeeper</option>
                    <option value="careGigs" >Errands &amp; Odd Jobs Provider</option>
                </select>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Company Name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div className="input-box">
                <input type="text" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="input-box">
                <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="input-box">
                <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="input-box">
                <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="input-box">
                <input type="text" placeholder='Zip Code' value={zipLocation} onChange={(e) => setZipLocation(e.target.value)} />
            </div>
            <div className="input-box">
                <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-box">
                <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='describe-box box'>
                <select className='select' value={hear} onChange={(e) => setHear(e.target.value)}>
                    <option value="select">How did you hear about us?</option>
                    <option value="streaming">Streaming Video Ad (Hulu, Roku)</option>
                    <option value="fb">Facebook or Instagram</option>
                    <option value="twitter">Other Social Media (Twitter, Pinterest, LinkedIn, TikTok)</option>
                    <option value="radio">Radio/Audio Ad (iHeart, Pandora, Podcast)</option>
                    <option value="cabletv">Cable TV Ad</option>
                    <option value="billboard">Billboard</option>
                    <option value="youtube">YouTube</option>
                    <option value="influencer">Influencer</option>
                    <option value="forum">Parenting Group or Forum</option>
                    <option value="friends">Friends or Family</option>
                    <option value="google">Search Engine (Google, Bing)</option>
                    <option value="magazine">Press Coverage (News, Magazine, Blog)</option>
                    <option value="banner">Banner Ad</option>
                </select>
            </div>
            <div className='next-btn'>
                <Link to="live">
                    <button type="submit">Join Now</button>
                </Link>
            </div>
        </form>
    )
}

export default AsCompany
