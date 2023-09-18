import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toursContext } from '../context/ToursContext'
import Opnions from './Opnions';

export default function TourDetails() {
  const { id } = useParams();
  const { tours } = useContext(toursContext);
  const tourDatails = tours.find((el) => el.id === id);
  const { photo, title, price, desc, city, avgRating, reviews } = tourDatails;
  const [userData, setuserData] = useState({
    fullname: '',
    phone: '',
    data: '',
    guestNumbers: '',
  });
  function InputData(event) {
    const userdata = { ...userData };
    userdata[event.target.name] = event.target.value;
    setuserData(userdata);
  }
  const result = +price * +userData.guestNumbers;
  const totalPrice = +result + 20;
  return (
    <section className='container'>
      <div className="row">
        <div className="col-md-8">
          <div className="Image">
            <img src={photo} alt={title} className='w-100 rounded' />
          </div>
          <div className="card my-3 p-3 description">
            <div className="descTitle">
              <h2 className='h3 text-dark'>{title}</h2>
              <p className='d-flex align-items-center'><i className="ri-star-fill mainColor p-1"></i><span className='text-muted'>{avgRating} ({reviews.length})</span></p>
              <p><i className="ri-map-pin-line mainColor"></i> {city}</p>
              <div className="descriptionContent">
                <h3>description</h3>
                <p>{desc}</p>
              </div>
            </div>
          </div>
          <div className="card my-3 p-3 reviews">
            <div className="reviewTitle">
              <h2 className='h3 text-dark'>Reviews ({reviews.length})</h2>
              <p className='d-flex align-items-center'><i className="ri-star-fill mainColor p-1"></i><span className='text-muted'>{avgRating} ({reviews.length})</span></p>
              <div className="startRates d-flex">
                <p className='cursorPointer'><span className="ri-star-fill mainColor p-1 star ms-2"></span>1</p>
                <p className='cursorPointer'><span className="ri-star-fill mainColor p-1 star ms-2"></span>2</p>
                <p className='cursorPointer'><span className="ri-star-fill mainColor p-1 star ms-2"></span>3</p>
                <p className='cursorPointer'><span className="ri-star-fill mainColor p-1 star ms-2"></span>4</p>
                <p className='cursorPointer'><span className="ri-star-fill mainColor p-1 star ms-2"></span>5</p>
              </div>
              <form className="reviewsContent position-relative ">
                <input type='text' className='border-none p-2 w-50 rounded' placeholder='Share your Review ' style={{height:'50px'}}/>
                <button className='btn bgBtn  position-absolute  ms-3 fs-5  rounded'>share</button>
              </form>
              <Opnions/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 py-5">
            <div className="cardHeader flex">
              <p className='fs-5'><b>{price} EGB</b> /per person</p>
              <p className='d-flex align-items-center'><i className="ri-star-fill mainColor p-1"></i><span className='text-muted'>{avgRating} ({reviews.length})</span></p>
            </div>
            <hr />
            <div className="cardMiddleContent">
              <h3>Information</h3>
              <form>
                <div className="card p-1">
                  <input type="text" name='fullname' placeholder='Full Name' className='p-2 border-0' onChange={InputData} />
                  <input type="number" name='phone' placeholder='phone' className='p-2 border-0' onChange={InputData} />
                  <input type="date" name='data' className='p-2 border-0' onChange={InputData} />
                  <input type='number' name='guestNumbers' placeholder='Number of Guests' min={1} className='p-2 border-0' onChange={InputData} />
                </div>
              </form>
            </div>
            <div className="checkoutInfo mt-4">
              <div className="price flex">
                <p className='fw-bold'><span className='priceOnly'>{price}</span> * {userData.guestNumbers || 1}</p>
                <p>{result || 120} EGP</p>
              </div>
              <div className="serviceCharage flex">
                <p className='fw-bold'><span className='serviceCharage'>services charge</span></p>
                <p>20 EGP</p>
              </div>
              <div className="totalPrice flex">
                <p className='fw-bold'><span className='serviceCharage'>Total Price</span></p>
                <p>{totalPrice || 120} EGP</p>
              </div>
            </div>
            <Link to='/thanks' className='w-100'>
              <button className='btn bgBtn text-white'>Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
