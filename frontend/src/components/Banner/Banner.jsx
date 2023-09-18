import React from 'react'
import touristImage from '../../assets/images/male-tourist.png';
import { Link } from 'react-router-dom';
export default function Banner() {
  return (
    <section className='banner' style={{backgroundColor:'#c2deee'}}>
      <div className="row">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h3 className='ms-3'>subscribe now to get useful <br/> traveling information</h3>
          <form className="subscripeBox position-relative w-50">
            <input type="email" placeholder='Enter you email' className='p-2 border-0' style={{width:'100%',height:'40px',borderRadius:'8px'}}/>
            <Link className='btn bgBtn position-absolute end-0 '>subscribe</Link>
          </form>
        </div>
        <div className="bannerImage col-md-6">
          <img src={touristImage} alt='touristImage'/>
        </div>
      </div>
    </section>
  )
}
