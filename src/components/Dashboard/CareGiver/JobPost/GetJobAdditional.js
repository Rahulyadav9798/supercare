import React, { useState, useEffect } from 'react'

const GetJobAdditional = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        const getData = async () => {
            const url = "http://daycare.uveoustech.com/api/JobAdditional/GetCareServices";

            try {
                const resp = await fetch(url);
                const data = await resp.json();
                // Do anything you need to do to
                // data before this call:
                setServices(data);
            } catch (err) {
                console.error(err);
            }
        }
        getData();
    }, []);
    console.log(services)
    return (
        <>
            {services && services.map((s, index) => (
                <label htmlFor={s.Text} key={index}>
                    <input type="checkbox" value={s.value} id={s.Text} />
                    {s.Text}
                </label>
            ))}


        </>
    )
}

export default GetJobAdditional

