import React from 'react'

const Footer = () => {
    return (
        <footer class="footer grey-bg">
            <div class="primary-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            {/* <div class="footer-logo mb-3">
                                <img id="footer-logo-img" class="img-fluid" src="vendors/images/logo.png" alt="" />
                            </div> */}
                            <p class="mb-3">Our purpose is to help every family at each stage of care and today, we’re helping millions of families at home and at work across 17+ countries and growing.</p> <a
                                class="btn-simple" href="#"><span>Read More <i class="ms-2 fas fa-long-arrow-alt-right"></i></span></a>
                        </div>
                        <div class="col-lg-3 col-md-6 mt-5 mt-md-0 footer-list ps-lg-5">
                            <h5>About <span class="text-theme">Supercare</span></h5>
                            <ul class="list-unstyled">
                                <li><a href="outpatient-depertment.html">About us</a>
                                </li>
                                <li><a href="pediatrics-depertment.html">News coverage</a>
                                </li>
                                <li><a href="neurology-depertment.html">Careers</a>
                                </li>
                                <li><a href="dental-depertment.html">Terms of use</a>
                                </li>
                                <li><a href="cardiology-depertment.html">Privacy policy</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-6 col-md-12 mt-5 mt-lg-0 ps-lg-5">
                            <div class="row">
                                <div class="col-sm-5 footer-list">
                                    <h5>Get <span class="text-theme">Help</span></h5>
                                    <ul class="list-unstyled">
                                        <li><a href="about-us.html">Safety</a>
                                        </li>
                                        <li><a href="contact-1.html">Articles & Guides</a>
                                        </li>
                                        <li><a href="privacy-policy.html">Help Center</a>
                                        </li>
                                        <li><a href="terms-and-conditions.html">Terms & Condition</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-7 mt-5 mt-sm-0">
                                    <h5>Get In <span class="text-theme">Touch</span></h5>
                                    <ul class="media-icon list-unstyled">
                                        <li class="mb-4"> <i class="flaticon-paper-plane"></i>
                                            <p class="mb-0">423B, Road Wordwide Country, USA</p>
                                        </li>
                                        <li class="mb-4"> <i class="flaticon-email"></i>
                                            <a href="mailto:themeht23@gmail.com">supercare23@gmail.com</a>
                                        </li>
                                        <li> <i class="flaticon-phone-call"></i>
                                            <a href="tel:+912345678900">+91-234-567-8900</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col">
                                    <div class="subscribe-form">
                                        <form id="mc-form" class="group row align-items-center g-0">
                                            <div class="col-sm-8">
                                                <input type="email"  name="EMAIL" class="email box-shadow" id="mc-email"
                                                    placeholder="Email Address" required />
                                            </div>
                                            <div class="col-sm-4 mt-2 mt-sm-0">
                                                <input class="btn btn-theme btn-circle" type="submit" name="subscribe" value="Subscribe" />
                                            </div>
                                            <label for="mc-email" class="subscribe-message"></label>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col">
                            <div class="social-icons social-colored social-fullwidth">
                                <ul class="list-inline mb-0">
                                    <li class="social-facebook"><a href="#"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li class="social-twitter"><a href="#"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li class="social-gplus"><a href="#"><i class="fab fa-google-plus-g"></i></a>
                                    </li>
                                    <li class="social-linkedin"><a href="#"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li class="social-skype"><a href="#"><i class="fab fa-skype"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="secondary-footer text-center">
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col"> <span>Copyright 2018 Supercare by <a target="_blank">
                                Supercare.com </a> | All Rights Reserved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
