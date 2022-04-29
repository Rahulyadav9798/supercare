import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/Dashboard/ParentHome.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CareNeed from './JobPost/CareNeed';

const BuildTeam = () => {
  const [careNeed, setCareNeed] = useState(false)
  return (
    <>
      {!careNeed ?
        <div className='outlet-card team-section'>
          <div className='post-job'>
            <div className='left-box'>
              <p>1</p>
            </div>
            <div className='right-box'>
              <h3>Post a Job</h3>
              <p>Reach hundreds of caregivers near you.</p>
              {/* <p><Link to="job">Post now</Link></p> */}
              <p><Link to="#" onClick={() => setCareNeed(true)}>Post now</Link></p>
            </div>
          </div>
          <div className='post-job'>
            <div className='left-box'>
              <p>2</p>
            </div>
            <div className='right-box'>
              <h3>Select and hire</h3>
              <p>See references and send messages.</p>
              <p><Link to="#">View applications</Link></p>
            </div>
          </div>
          <div className='post-job'>
            <div className='left-box'>
              <p>3</p>
            </div>
            <div className='right-box'>
              <h3>Pay and manage</h3>
              <p>Connect, make payments and more.</p>
              <p><Link to="#">View team</Link></p>
            </div>
          </div>
        </div>
        :
        <CareNeed setCareNeed={setCareNeed} />
      }
    </>
  )
}

export default BuildTeam;

