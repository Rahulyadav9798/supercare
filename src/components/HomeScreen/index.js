import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Bg from '../../assets/bg/bg.jpg'
import ChildModal from './modals/ChildModal';
import DayCare from './modals/DayCare';
import HouseKeepingModal from './modals/HouseKeepingModal';
import PetCare from './modals/PetCare';
import SeniorModal from './modals/SeniorModal';
import TutoringModal from './modals/TutoringModal';
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/HomeScreen/HomeSection.css';

const HomeScreen = () => {
    const [childModal, setChildModal] = useState(false);
    const [seniorModal, setSeniorModal] = useState(false);
    const [tutoringModal, setTutoringModal] = useState(false);
    const [houseKeepingModal, setHouseKeepingModal] = useState(false);
    const [dayCareModal, setDayCareModal] = useState(false);
    const [petCareModal, setPetCareModal] = useState(false);
    const openChildModal = () => {
        setChildModal(true)
    }
    const openSeniorModal = () => {
        setSeniorModal(true)
    }
    const openTutoringModal = () => {
        setTutoringModal(true)
    }
    const openHouseKeepingModal = () => {
        setHouseKeepingModal(true)
    }
    const openDayCareModal = () => {
        setDayCareModal(true)
    }
    const openPetCareModal = () => {
        setPetCareModal(true)
    }
    return (
        <>
            <div className='homepage-section'>
                {childModal ? <ChildModal onHide={() => setChildModal(false)} /> : null}
                {seniorModal ? <SeniorModal onHide={() => setSeniorModal(false)} /> : null}
                {tutoringModal ? <TutoringModal onHide={() => setTutoringModal(false)} /> : null}
                {houseKeepingModal ? <HouseKeepingModal onHide={() => setHouseKeepingModal(false)} /> : null}
                {petCareModal ? <PetCare onHide={() => setPetCareModal(false)} /> : null}
                {dayCareModal ? <DayCare onHide={() => setDayCareModal(false)} /> : null}
                <Carousel>
                    {/* <Carousel.Item interval={1000}> */}
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={Bg}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className='banner-options'>
                                <h5 className="text-white letter-space-1 mb-3 animated6">Super Care</h5>
                                <h1 className="text-black mb-3 animated8">We <span>Provide <br /> Best</span> Cares</h1>
                                <p className="lead text-black mb-3 animated5">Find trusted caregivers for your every need</p>
                                <Link className="btn btn-theme btn-circle animated6" to="/register">Get Started</Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/vendors/images/bg/03.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <div className='banner-options'>
                                <h5 className="text-white letter-space-1 mb-3 animated6" data-wow-delay="4s">Medical Center</h5>
                                <h1 className="text-black mb-3 animated11">What Makes Us Different Hectolab</h1>
                                <p className="lead text-black mb-3 animated5">We try to make maximum use of all our experience, accumulated potential,
                                    <br />knowledge of modern medicine.</p> <a className="btn btn-theme btn-radius animated7" href="about-us.html">Learn More</a>
                                <a className="btn btn-theme btn-circle animated6" href="about-us.html">Get Started</a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/vendors/images/bg/03.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div className='banner-options'>
                                <h5 className="text-white letter-space-1 mb-3 animated6">Medical Center</h5>
                                <h1 className="text-black mb-3 animated9">We Will <span>Provide Best</span> Hectolab</h1>
                                <p className="lead text-black mb-3 animated5">We try to make maximum use of all our experience, accumulated potential,
                                    <br />knowledge of modern medicine.</p> <a className="btn btn-theme btn-radius animated7" href="about-us.html">Learn More</a>
                                <a className="btn btn-theme btn-circle animated6" href="about-us.html">Get Started</a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>

                <section className='modal-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 mb-3" onClick={openChildModal}>
                                <div className="featured-step custom-step" >
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.00024 42H21.0002V27.5H7.00024V42Z" fill="white"></path><path d="M32.5002 19.5L27.0002 6L14.0002 11.5L19.0002 24.5L32.5002 19.5Z" fill="white"></path><path d="M24.375 15.3L22.125 12.75L22.2 16.2L24.375 15.3Z" fill="white"></path><path d="M23.5005 37.4999L37.5005 41.4999L41.0005 27.4999L27.5005 23.9999L23.5005 37.4999Z" fill="#4ab242"></path><path d="M18.0751 24.6C18.3001 25.125 18.7501 25.425 19.3501 25.425C19.5001 25.425 19.6501 25.425 19.8751 25.35L32.5501 20.325C32.8501 20.175 33.1501 19.95 33.3001 19.65C33.4501 19.35 33.4501 18.975 33.3001 18.6L28.2751 5.84997C27.9751 5.17497 27.2251 4.79997 26.5501 5.09997L13.8001 10.125C13.1251 10.425 12.7501 11.175 13.0501 11.85L18.0751 24.6ZM26.9251 6.59997L31.8001 19.05L19.4251 23.925L14.5501 11.55L26.9251 6.59997Z" fill="#444444"></path><path d="M20.925 26.625H7.27505C6.52505 26.625 5.92505 27.225 5.92505 27.975V41.625C5.92505 42.375 6.52505 42.975 7.27505 42.975H20.925C21.675 42.975 22.275 42.375 22.275 41.625V27.975C22.275 27.225 21.675 26.625 20.925 26.625ZM20.775 41.475H7.42505V28.125H20.775V41.475Z" fill="#444444"></path><path d="M41.1001 26.55L27.9001 23.025C27.1501 22.875 26.4001 23.25 26.2501 24L22.7251 37.2C22.5001 37.875 22.9501 38.625 23.7001 38.85L36.9001 42.375C37.0501 42.375 37.1251 42.45 37.2751 42.45C37.8751 42.45 38.4001 42.075 38.5501 41.475L42.0001 28.2C42.2251 27.45 41.7751 26.7 41.1001 26.55ZM37.1251 40.8L24.2251 37.35L27.6751 24.45L40.5751 27.9L37.1251 40.8Z" fill="#444444"></path><path d="M20.775 19.05C20.775 19.2 20.775 19.275 20.85 19.35C20.925 19.5 21.075 19.65 21.225 19.725C21.45 19.8 21.6 19.8 21.825 19.725C22.05 19.65 22.2 19.5 22.2 19.35C22.275 19.2 22.275 18.9 22.275 18.45V17.4L25.1999 16.2L25.875 16.95C25.95 17.025 26.1 17.175 26.175 17.25C26.325 17.4 26.4 17.475 26.475 17.475C26.55 17.55 26.625 17.55 26.775 17.55C26.85 17.55 26.9999 17.55 27.0749 17.475C27.2999 17.4 27.45 17.25 27.525 17.1C27.6 16.875 27.6 16.725 27.525 16.575C27.45 16.425 27.3 16.2 27 15.9L23.25 11.925C23.1 11.7 22.95 11.55 22.8 11.475C22.65 11.325 22.575 11.25 22.425 11.175C22.275 11.1 22.125 11.025 21.975 11.025C21.825 11.025 21.6 11.025 21.45 11.1C21.225 11.175 21.075 11.25 21 11.4C20.925 11.55 20.85 11.7 20.775 11.85C20.775 12 20.7 12.225 20.7 12.45C20.7 12.675 20.7 12.825 20.7 13.05V18.525C20.775 18.75 20.775 18.9 20.775 19.05ZM24.375 15.3L22.2 16.125L22.125 12.75L24.375 15.3Z" fill="#444444"></path><path d="M12.0001 38.325H14.4001C14.7751 38.325 15.1501 38.325 15.4501 38.25C15.7501 38.175 16.0501 38.175 16.2751 38.025C16.6501 37.875 16.9501 37.575 17.1751 37.275C17.4001 36.9 17.4751 36.525 17.4751 36.075C17.4751 35.1 16.9501 34.5 15.9001 34.2C16.6501 33.825 17.1001 33.3 17.1001 32.475C17.1001 32.25 17.1001 32.025 17.0251 31.8C16.9501 31.575 16.8751 31.425 16.7251 31.275C16.5751 31.125 16.4251 30.975 16.2001 30.825C15.9751 30.675 15.7501 30.6 15.4501 30.525C15.1501 30.45 14.8501 30.45 14.4751 30.45H12.0001C11.6251 30.45 11.4001 30.525 11.2501 30.675C11.1001 30.825 11.0251 31.05 11.0251 31.425V37.275C11.0251 37.65 11.1001 37.875 11.2501 38.025C11.4001 38.25 11.6251 38.325 12.0001 38.325ZM12.6001 31.725H13.8751C14.4751 31.725 14.8501 31.8 15.1501 31.95C15.4501 32.1 15.6001 32.325 15.6001 32.7C15.6001 32.85 15.5251 33.075 15.4501 33.225C15.3001 33.45 15.1501 33.6 14.9251 33.675C14.7001 33.75 14.4001 33.75 14.0251 33.75H12.6001V31.725ZM12.6001 34.875H14.2501C14.7751 34.875 15.2251 34.95 15.5251 35.175C15.8251 35.325 15.9751 35.625 15.9751 36C15.9751 36.75 15.4501 37.125 14.4001 37.125H12.6751V34.875H12.6001Z" fill="#444444"></path><path d="M29.325 34.5C29.475 34.8 29.7 35.1 29.925 35.325C30.15 35.55 30.45 35.775 30.75 35.925C31.05 36.075 31.425 36.225 31.8 36.3C32.325 36.45 32.775 36.45 33.225 36.45C33.675 36.375 34.05 36.225 34.35 36.075C34.65 35.85 34.95 35.625 35.1 35.4C35.325 35.175 35.4 34.875 35.475 34.65C35.55 34.425 35.475 34.275 35.4 34.125C35.325 33.975 35.175 33.825 34.95 33.825C34.725 33.75 34.575 33.825 34.425 33.9C34.275 33.975 34.2 34.125 34.05 34.35C33.75 34.725 33.45 35.025 33.075 35.1C32.7 35.25 32.325 35.25 31.875 35.1C31.5 35.025 31.125 34.8 30.9 34.5C30.675 34.2 30.525 33.9 30.45 33.45C30.375 33 30.45 32.475 30.6 31.95C30.825 31.05 31.2 30.45 31.725 30.075C32.25 29.7 32.775 29.625 33.45 29.775C33.825 29.85 34.125 30.075 34.35 30.3C34.575 30.525 34.725 30.9 34.8 31.35C34.875 31.575 34.95 31.8 35.025 31.95C35.1 32.1 35.25 32.175 35.4 32.175C35.55 32.25 35.775 32.175 35.925 32.1C36.075 32.025 36.15 31.875 36.225 31.65C36.3 31.35 36.3 30.975 36.15 30.525C36 30.075 35.7 29.625 35.25 29.25C34.875 28.875 34.35 28.575 33.75 28.425C33.225 28.275 32.775 28.275 32.25 28.35C31.725 28.425 31.275 28.575 30.9 28.8C30.45 29.025 30.15 29.4 29.775 29.85C29.475 30.3 29.25 30.825 29.1 31.425C29.025 31.8 28.95 32.175 28.95 32.55C28.95 32.925 28.95 33.225 29.025 33.6C29.025 33.9 29.175 34.229.325 34.5Z" fill="#444444"></path></svg>
                                    <h5 className="mb-3">Child Care</h5>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 mt-lg-0" onClick={openSeniorModal}>
                                <div className="featured-step">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.2097 37.8506C20.7775 38.4031 21.4032 38.8602 22.068 39.2326C23.2705 39.9069 24.7501 39.9069 25.9526 39.2326C26.6169 38.8602 27.2426 38.4031 27.8103 37.8506L41.2474 24.7741C44.9424 21.178 44.9424 15.2935 41.2474 11.6975C37.5518 8.10148 31.5059 8.10148 27.8103 11.6975L24.0103 15.3962L20.2097 11.6975C16.5147 8.10148 10.4682 8.10148 6.77321 11.6975C3.0782 15.2935 3.0782 21.178 6.77321 24.7741L20.2097 37.8506Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.7764 37.5315L27.143 31.3354" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.6279 34.4678L23.9945 28.2717" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.4795 31.4041L20.8461 25.208" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.375 28.3687L20.4877 18.7917" stroke="#444444" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M29.0308 20.2809L19.8871 11.3816L19.8746 11.404C16.1581 8.11566 10.3607 8.20669 6.77321 11.6981C3.0782 15.2941 3.0782 21.1786 6.77321 24.7746L10.4582 28.3711L20.4873 18.7927L25.659 23.5625C26.5898 24.4684 28.1 24.4684 29.0308 23.5625C29.9617 22.6565 29.9617 21.1869 29.0308 20.2809Z" fill="#4ab242"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M29.0308 20.2809L19.8871 11.3816L19.8746 11.404C16.1581 8.11566 10.3607 8.20669 6.77321 11.6981C3.0782 15.2941 3.0782 21.1786 6.77321 24.7746L10.4582 28.3711L20.4873 18.7927L25.659 23.5625C26.5898 24.4684 28.1 24.4684 29.0308 23.5625C29.9617 22.6565 29.9617 21.1869 29.0308 20.2809Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round"></path><path d="M13.4121 19.5242C16.836 22.407 20.4625 19.1211 20.4625 19.1211" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    <h5 className="mb-3"> Senior Care</h5>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 mt-3 mt-lg-0" onClick={openTutoringModal}>
                                <div className="featured-step">
                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="9" width="21" height="31" stroke="#444444" stroke-width="1.5" stroke-linejoin="round"></rect><line x1="15.25" y1="11.75" x2="12.75" y2="11.75" stroke="#444444" stroke-width="1.5" stroke-linecap="round"></line><line x1="15.25" y1="16.75" x2="12.75" y2="16.75" stroke="#444444" stroke-width="1.5" stroke-linecap="round"></line><line x1="15.25" y1="21.75" x2="12.75" y2="21.75" stroke="#444444" stroke-width="1.5" stroke-linecap="round"></line><line x1="15.25" y1="26.75" x2="12.75" y2="26.75" stroke="#444444" stroke-width="1.5" stroke-linecap="round"></line><line x1="15.25" y1="31.75" x2="12.75" y2="31.75" stroke="#444444" stroke-width="1.5" stroke-linecap="round"></line><line x1="15.25" y1="36.75" x2="12.75" y2="36.75" stroke="#444444" stroke-width="1.5" stroke-linecap="round"></line><path d="M24.5 22.5V9H30.5V22.5L27.5 19.5L24.5 22.5Z" fill="#4ab242" stroke="#444444" stroke-linejoin="round"></path></svg>
                                    <h5 className="mb-3"> Tutoring</h5>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 mt-3 mt-lg-0" onClick={openHouseKeepingModal}>
                                <div className="featured-step">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.6884 15.8844V11.8185H33.9851V9.24817C33.9851 7.58226 31.8774 6.20239 30.2982 6H13.7129L14.7467 10.4216C14.7467 10.4216 22.3858 10.5223 23.0603 15.8844C23.0603 15.8844 23.6938 22.2512 20.8781 25.3518C19.4158 26.9624 14.2886 28.8573 14.0894 32.9658V41.9808H33.9851V32.9658C33.9066 27.3488 31.0411 23.3009 30.6884 15.8844Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.6396 16.1047L20.4777 12.2449" stroke="#444444" stroke-width="1.5" stroke-linecap="round"></path><path d="M23.3389 16.0585H30.4529" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.9419 32.9849C33.9419 32.9849 31.7928 29.6927 24.4076 32.9849C18.2634 35.724 14.1035 32.9715 14.1035 32.9715V41.9869L33.9419 41.9999C33.9419 41.9999 34.0036 32.9849 33.9419 32.9849Z" fill="#4ab242"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.9419 32.9849C33.9419 32.9849 31.7928 29.6927 24.4076 32.9849C18.2634 35.724 14.1035 32.9715 14.1035 32.9715V41.9869L33.9419 41.9999C33.9419 41.9999 34.0036 32.9849 33.9419 32.9849Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    <h5 className="mb-3">  HouseKeeping</h5>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 mt-3 mt-lg-0" onClick={openDayCareModal}>
                                <div className="featured-step">
                                    <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.1502 8.46H30.5262C30.6462 8.46 30.7442 8.366 30.7442 8.249L29.6092 6.105L30.7442 3.961C30.7442 3.844 30.6462 3.75 30.5262 3.75H24.1502C24.0302 3.75 23.9312 3.844 23.9312 3.961V8.249C23.9312 8.366 24.0302 8.46 24.1502 8.46ZM26.278 22.2508C26.278 21.0588 25.311 20.0928 24.12 20.0928C22.928 20.0928 21.962 21.0588 21.962 22.2508C21.962 23.4428 22.928 24.4088 24.12 24.4088C25.311 24.4088 26.278 23.4428 26.278 22.2508Z" fill="#27E4C4"></path><mask id="maskDayCare" mask-type="alpha" maskUnits="userSpaceOnUse" x="21" y="3" width="10" height="22"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.1502 8.46H30.5262C30.6462 8.46 30.7442 8.366 30.7442 8.249L29.6092 6.105L30.7442 3.961C30.7442 3.844 30.6462 3.75 30.5262 3.75H24.1502C24.0302 3.75 23.9312 3.844 23.9312 3.961V8.249C23.9312 8.366 24.0302 8.46 24.1502 8.46ZM26.278 22.2508C26.278 21.0588 25.311 20.0928 24.12 20.0928C22.928 20.0928 21.962 21.0588 21.962 22.2508C21.962 23.4428 22.928 24.4088 24.12 24.4088C25.311 24.4088 26.278 23.4428 26.278 22.2508Z" fill="white"></path></mask><g mask="url(#maskDayCare)"><rect width="48" height="48" fill="#4ab242"></rect></g><mask id="maskDayCare1" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="3" width="38" height="42"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.028 22.2508C27.028 20.6449 25.7255 19.3428 24.12 19.3428C22.5138 19.3428 21.212 20.6446 21.212 22.2508C21.212 23.857 22.5138 25.1588 24.12 25.1588C25.7255 25.1588 27.028 23.8567 27.028 22.2508ZM22.712 22.2508C22.712 21.473 23.3422 20.8428 24.12 20.8428C24.8972 20.8428 25.528 21.4734 25.528 22.2508C25.528 23.0282 24.8972 23.6588 24.12 23.6588C23.3422 23.6588 22.712 23.0286 22.712 22.2508ZM31.4071 7.8981C31.4644 8.00621 31.4943 8.12668 31.4943 8.249C31.4943 8.78598 31.055 9.21 30.5263 9.21H24.6815V13.3534L34.9957 19.8594C35.346 20.0803 35.4509 20.5435 35.2299 20.8938C35.0089 21.2442 34.5457 21.349 34.1954 21.128L32.6383 20.1459V27.8546L41.9439 27.7676C42.2779 27.7645 42.5629 27.9802 42.6628 28.281C42.7116 28.3806 42.7391 28.4925 42.7391 28.6109V43.7439C42.7391 44.1581 42.4033 44.4939 41.9891 44.4939H27.7353C27.7036 44.498 27.6713 44.5001 27.6384 44.5001C27.2394 44.5001 26.9131 44.1884 26.8898 43.7952C26.8886 43.7782 26.8881 43.7611 26.8881 43.7439C26.8881 43.7358 26.8882 43.7278 26.8884 43.7198L26.8884 41.0067C26.8828 39.3834 25.6374 38.0831 24.1204 38.0831C22.6042 38.0831 21.3594 39.3799 21.3514 40.9971V43.7501C21.3514 44.1643 21.0157 44.5001 20.6014 44.5001C20.5681 44.5001 20.5352 44.4979 20.503 44.4937H6.24939C5.83518 44.4937 5.49939 44.1579 5.49939 43.7437V28.6107C5.49939 28.2462 5.75948 27.9424 6.10422 27.8747C6.14911 27.8659 6.19546 27.8611 6.24287 27.8606L15.6012 27.7732V20.1456L14.0437 21.128C13.6933 21.349 13.2302 21.2442 13.0092 20.8938C12.7882 20.5435 12.8931 20.0803 13.2434 19.8594L23.1815 13.5906V8.27089L23.1813 8.249V3.961L23.1815 3.93911V3.7652C23.1815 3.35099 23.5173 3.0152 23.9315 3.0152C23.9452 3.0152 23.9588 3.01557 23.9723 3.01629C24.0301 3.00559 24.0896 3 24.1503 3H30.5263C31.055 3 31.4943 3.42402 31.4943 3.961C31.4943 4.08332 31.4644 4.20379 31.4071 4.3119L30.4579 6.105L31.4071 7.8981ZM6.99939 29.3536V42.9937H15.6065C15.603 42.9644 15.6012 42.9346 15.6012 42.9044V29.2732L6.99939 29.3536ZM17.0959 42.9937H19.8514L19.8514 40.9934C19.8635 38.562 21.7629 36.5831 24.1204 36.5831C26.4798 36.5831 28.38 38.567 28.3884 41.0041V42.9939H31.1436C31.1401 42.9645 31.1383 42.9346 31.1383 42.9042V19.1997L24.1195 14.7724L17.1012 19.1994V42.9044C17.1012 42.9346 17.0994 42.9644 17.0959 42.9937ZM32.6383 29.3547L41.2391 29.2743V42.9939H32.633C32.6365 42.9645 32.6383 42.9346 32.6383 42.9042V29.3547ZM24.6815 7.71V4.5H29.6103L28.9464 5.7541C28.8302 5.9736 28.8302 6.2364 28.9464 6.4559L29.6103 7.71H24.6815Z" fill="white"></path></mask><g mask="url(#maskDayCare1)"><rect width="48" height="48" fill="#33465A"></rect></g></svg>
                                    <h5 className="mb-3"> DayCare Care</h5>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 mt-3 mt-lg-0" onClick={openPetCareModal}>
                                <div className="featured-step">
                                    <svg width="48" height="48" viewBox="0 -5 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.25 20.925L39.45 21.75L42 19.875L24 6.75L6 19.875L8.55 21.75L9.75 20.925L24 10.5L38.25 20.925Z" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.125 38.25H30V27.75C30 24.45 27.3 21.75 24 21.75C22.35 21.75 20.85 22.425 19.725 23.475C18.675 24.6 18 26.1 18 27.75L18 37.5" fill="#4ab242"></path><path d="M22.125 38.25H30V27.75C30 24.45 27.3 21.75 24 21.75C22.35 21.75 20.85 22.425 19.725 23.475C18.675 24.6 18 26.1 18 27.75L18 37.5" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23 38.25H9.75V21.5" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M38.25 20.925V38.25H30" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    <h5 className="mb-3"> PetCare</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="p-0 overflow-hidden text-white">
                    <div class="container-fluid">
                        <div class="row" style={{ justifyContent: "space-evenly" }}>
                            <div class="col-lg-5 col-md-12 p-lg-5 p-3 theme-bg">
                                <h4 class="text-white text-capitalize">Your safety is our priority</h4>
                                <p class="lead">We are committed to helping you find a caregiver you can trust.
                                    Lorem ipsum dolor sit amet, vero minima</p> <a
                                        style={{ textDecoration: "none" }}
                                        class="btn-simple btn-lg" href="#"><span>Visit safety center<i
                                            class="ms-2 fas fa-long-arrow-alt-right"></i></span></a>
                            </div>
                            <div class="col-lg-5 col-md-12 p-lg-5 p-3 nanny-bg">
                                <h4 class="text-capitalize">SuperCare.com HomePay</h4>
                                <ul class="list-unstyled">
                                    <li>Nanny taxes made easy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!--client end--> */}
        </>
    )
}

export default HomeScreen
