import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/HomeScreen/HomeSection.css'
import Alphabet from '../../../assets/alphabet.png'
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
const TutoringModal = (props) => {
    return (
        <>
            <div className='child-modal'>
                <div className="container">
                <div className='closeBox' onClick={props.onHide}>
                        <CloseSharpIcon />
                    </div>
                    <div className='alphabet-img'>
                        <img src={Alphabet} alt="Alphabet letters" />
                    </div>
                    <p className='modal-para'>I would like to :</p>
                    <div className='modal-btns'>
                        <Link to='tutoring'>
                            <button onClick={props.onHide}>Find a Caregivers</button>
                        </Link>
                        <Link to='register'>
                            <button onClick={props.onHide}>Find a job</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TutoringModal
