import React from 'react'
import { Link } from 'react-router-dom'

export default function Thanks() {
  return (
    <div className='container'>
        <div className="thanksPage d-flex flex-column justify-content-center align-items-center" style={{height:'50vh'}}>
                <div className="checkIcon">
                  <i className="ri-check-line fs-3 bgBtn" style={{borderRadius:'50%'}}></i>
                </div>
              <h4 className='my-2'>Thank you</h4>
              <h5 className='py-3'>Your toor is booked!</h5>
              <Link to='/'>
                  <button className='btn bgBtn fw-bold'>Back to home</button>
              </Link>
        </div>
    </div>
  )
}
