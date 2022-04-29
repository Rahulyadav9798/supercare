import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header id="site-header" className="header">
                <div id="header-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <Link className="navbar-brand logo" to="/">
                                        {/* <img id="logo-img" className="img-fluid" src="vendors/images/logo.png" alt="" /> */}
                                        <h1 style={{ textShadow: "2px -3px #333", fontSize: "45px", fontWeight: "bold", fontFamily: "cursive", color: "#4ab242" }}>SuperCare</h1>
                                    </Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                                        <ul className="nav navbar-nav ms-auto">
                                            <li className="nav-item"> <Link className="nav-link active" to="/register" >Apply Jobs</Link>
                                            </li>
                                            <li className="nav-item position-static"> <Link className="nav-link" to="login" >Login</Link>

                                            </li>
                                            <li className="nav-item join-btn">
                                                <Link className="join-now" to="/register" >Join Now</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
