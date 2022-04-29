
import React, { useState, useEffect } from 'react'
import axios from "axios"

const GetJobKidsLove = () => {
    const [kidLove, setKidLove] = useState()

    useEffect(() => {
        const getJobKidsLove = async () => {
            const url = "http://daycare.uveoustech.com/api/JobKidsLove/GetKidsLoves";

            try {
                const resp = await fetch(url);
                const data = await resp.json();
                // Do anything you need to do to
                // data before this call:
                setKidLove(data);
            } catch (err) {
                console.error(err);
            }
        }
        getJobKidsLove();
    }, []);
    return (
        <>
            {kidLove && kidLove.map((k, index) => (
                <label htmlFor={k.Text} key={index}>
                    <input type="checkbox" value={k.value} id={k.Text} />
                    {k.Text}
                </label>
            ))}
        </>
    )
}

export default GetJobKidsLove

