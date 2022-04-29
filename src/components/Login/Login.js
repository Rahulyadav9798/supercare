import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import '../../styles/Login/Login.css'
import MetaData from "../UI/MetaData";


function Login() {
    const [loginAccount, setLoginAccount] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [statusCode, setStatusCode] = useState("")
    const [userType, setUserType] = useState("parent")
    const navigate = useNavigate();

    const userTypeHandle = (event) => {
        setUserType(event.target.value)
    }

    const accountHandleChange = (e) => {
        setLoginAccount(e.target.value)
    };
    const passwordHandleChange = (e) => {
        setLoginPassword(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://daycare.uveoustech.com/api/_Account/LoginJwt",
            {
                method: "POST",
                dataType: "json",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Account: loginAccount,
                    Password: loginPassword,
                    IsReload: true
                }),
            }).then(function (response) {
                setStatusCode(response.status)
                return response.json();
            })
        // .then(data => console.log(data));
    }
    if (statusCode == 200) {
        navigate('/home')
    }
    return (
        <>
            <MetaData title="Login" />
            <section className="fullscreen-banner banner-2 text-center grediant-overlay p-0 overflow-hidden bg-pos-r"
                data-bg-img="vendors/images/bg/06.jpg"
            >
                <div className="align-center pt-0">
                    <div className="container login-section">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-8 me-auto">
                                <div className="white-bg box-shadow pt-5">
                                    <h2 className="title mb-4">Login <span>Now!</span></h2>
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group mx-5 mb-4">
                                            <input id="form_email1" type="text" name="account" className="form-control" placeholder="Your Account"
                                                required="required"
                                                value={loginAccount}
                                                onChange={accountHandleChange}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group mx-5 mb-4">
                                            <input id="form_name1" type="password" name="password" className="form-control" placeholder="Your Password"
                                                required="required" data-error="Password is required."
                                                value={loginPassword}
                                                onChange={passwordHandleChange}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <button type="submit" className="btn btn-theme btn-block mt-5">
                                            <span>Log in</span>
                                        </button>
                                    </form>
                                    <div className="forgot-Password">
                                        <Link to='#'>FORGOT PASSWORD?</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;