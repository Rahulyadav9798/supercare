import React, { useState } from 'react'
import '../../../styles/Dashboard/ParentHome.css'
import { Link } from 'react-router-dom'
import parent from '../../../assets/parent.jpg'
import Message from './Message'
import BuildTeam from './BuildTeam'
import Recent from './Recent'
import Maybe from './Maybe'
import Favorites from './Favorites'


const ParentHome = () => {
    const [pop, setPop] = useState("0")
    console.log(pop)
    return (
        <section className='parent-section'>
            <div className='parent-container row'>
                <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12">
                    <h2 className="userName">Hello, userdemo</h2>
                    <div className='btns'>
                        <Link to="#" onClick={() => setPop("0")}>Message ({1})</Link>
                        <Link to="#" onClick={() => setPop("1")}>Build Team </Link>
                        <Link to="#" onClick={() => setPop("2")}>Recent</Link>
                        <Link to="#" onClick={() => setPop("3")}>May be</Link>
                        <Link to="#" onClick={() => setPop("4")}>Favorites</Link>
                    </div>
                    <div className='pop-up'>
                        {pop === "0" ? <Message /> : null}
                        {pop === "1" ? <BuildTeam /> : null}
                        {pop === "2" ? <Favorites /> : null}
                        {pop === "3" ? <Maybe /> : null}
                        {pop === "4" ? <Recent /> : null}

                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className='widget-img'>
                        <img src={parent} alt="" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ParentHome
