import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <section className='container '>
      <footer className="row">
        <div className="col-md-3 text-md-start text-center my-3">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" width={180} />
          </Link>
          <p className='ms-2'>Traveling Opens The Door <br />
            To Creating Memories</p>
          <div className="socialIcons ms-2">
            <i className="ri-facebook-circle-fill fs-5 me-3"></i>
            <i className="ri-behance-fill  fs-5 me-3"></i>
            <i className="ri-instagram-line  fs-5 me-3"></i>
          </div>
        </div>
        <div className="col-md-3 text-md-start text-center my-3">
          <b>discover</b>
          <ul className='p-0'>
            <Link to='/' className='my-2 d-block text-decoration-none text-black'>home</Link>
            <Link to='/about' className='my-2 d-block text-decoration-none text-black'>about</Link>
            <Link to='/tours' className='my-2 d-block text-decoration-none text-black'>tours</Link>
          </ul>
        </div>
        <div className="col-md-3 text-md-start text-center my-3">
          <b>quick links</b>
          <ul className='p-0'>
            <Link to='/gallery' className='my-2 d-block text-decoration-none text-black'>gallery</Link>
            <Link to='/signin' className='my-2 d-block text-decoration-none text-black'>login</Link>
            <Link to='/signup' className='my-2 d-block text-decoration-none text-black'>register</Link>
          </ul>
        </div>
        <div className="col-md-3 text-md-start text-center my-3">
          <b>contact</b>
          <ul className='p-0'>
            <li className='my-2 d-block text-decoration-none text-black'>
              <i className="ri-map-pin-2-fill me-2 mainColor"></i>
              address : London</li>
            <li className='my-2 d-block text-decoration-none text-black'>
              <i className="ri-phone-fill me-2 mainColor"></i>
              phone : 01010101010</li>
            <li className='my-2 d-block text-decoration-none text-black'>
              <i className="ri-mail-open-fill me-2 mainColor"></i>
              email : travel@travel.com</li>
          </ul>
        </div>
      </footer>
    </section>
  )
}
