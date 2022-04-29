import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/CreateProfile/Register.css'

const HireCaregiver = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [zipLocation, setZipLocation] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [hear, setHear] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://daycare.uveoustech.com/api/_Account/Reg",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ITCode: email,
                    Password: password,
                    FirstName: firstName,
                    LastName: lastName,
                    ZipCode: zipLocation,
                    Email: email,
                    HearAboutUsId: 0,
                    CompanyName: null,
                    PhoneNumber: phone,
                    Address: null,
                    AccountType: 0,
                    CompanyType: 0,
                    CareGiver: null
                }),
            }).then(function (response) {
                return response.json();
            })
            .then(data => console.log(data));
        // navigate(props.link)
    }


    return (
        <div className='hirecaregiver-section'>
            <form onSubmit={onSubmit}>
                <div className="input-box">
                    <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Zip Code' value={zipLocation} onChange={(e) => setZipLocation(e.target.value)} />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
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
                    <button type="submit">Join Now</button>
                </div>
            </form>
        </div>
    )
}

export default HireCaregiver
