import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/UI/ZipCodeLocation.css'
import ScrollTop from './ScrollTop'
import LocationOn from '@mui/icons-material/LocationOn';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import careOptionStorage from '../LocalStorage/CareOptionStorage';

const ZipCodeLocation = (props) => {
    const [address, setAddress] = useState(null);
    const [error, setError] = useState(false);
    useEffect(() => {
        window.initAutocomplete()
    })
    const navigate = useNavigate();

    const onHandleChange = (val) => {
        setAddress(val.label)
        setError(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (address <= 0) {
            setError(true)
            return;
        }
        setError(false)
        navigate(props.link)
        careOptionStorage("zip_location", address)
        ScrollTop()
    }
    return (
        <>
            <div className='ZipCodeLocation-section'>
                <div className='ZipCodeLocation-container'>
                    <div className='mid-box'>
                        <h2>{props.heading}</h2>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className='box'>
                            <div className='mid-box2'>
                                <LocationOn />
                                <h6>Zip code :</h6>
                            </div>
                            <div className='left-box'>
                                <GooglePlacesAutocomplete
                                    selectProps={{
                                        onChange: onHandleChange,
                                    }}
                                />
                            </div>
                            {error ? <p style={{ color: "red", textAlign: "right", margin: 0 }}>Please fill your address</p> : null}
                        </div>
                        <div className='next-btn'>
                            <button onClick={onSubmit}>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ZipCodeLocation
