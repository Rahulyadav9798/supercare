import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../styles/AfterRegister/WhereLive.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const WhereLive = () => {
    const [mile, setMile] = useState(5)
    useEffect(() => {
        window.initAutocomplete()
    })

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/register`;
        navigate(path);
    }

    const dec = () => {
        if (mile <= 5) {
            return;
        } else {
            setMile(mile - 5);
        }
    }

    return (
        <div className='whereLive-section'>
            <div className='whereLive-container'>
                <h3 className='heading'>Where do you live ?</h3>
                <p>I Live in :</p>
                <div className='inputBox'>
                    <input type='text' id="ziplocation" placeholder='Enter your zip code' />
                </div>
                <div id='map' style={{ width: "70%", height: "300px" }}>
                    <iframe title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30703620.672472216!2d64.41390989859407!3d20.050418843029927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1628857245017!5m2!1sen!2sin"
                        style={{ width: "100%", height: "300px", border: "0" }} allowfullscreen=""
                        loading="lazy">
                    </iframe>
                </div>
                <div className='btmBox'>
                    <p>How far are you willing to travel?</p>
                    <div className='btmBoxIcons'>
                        <RemoveIcon onClick={dec} style={{ color: "#fff", fontSize: 50, background: "#00be8e", borderRadius: "100%", cursor: "pointer" }} />
                        <h1 className='mileTxt'>{mile}
                            <p style={{ fontSize: "18px" }}>MILES</p></h1>
                        <AddIcon onClick={() => setMile(mile + 5)} style={{ color: "#fff", fontSize: 50, background: "#00be8e", borderRadius: "100%", cursor: "pointer" }} />
                    </div>
                    <div className='next-btn'>
                        {/* <Link to="#"> */}
                        <button onClick={routeChange} type="submit">Next</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhereLive
