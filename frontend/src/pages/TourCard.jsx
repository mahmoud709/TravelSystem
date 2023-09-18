import React from 'react'
import { Link } from 'react-router-dom'

export default function TourCard({ tour }) {
    return (
        <div className="card cursorPointer shadow border-0">
            <div className="cardImage position-relative">
                <Link to={'/datails/'+tour.id}><img src={tour.photo} alt={tour.title} className='w-100'/></Link>
                {+tour.featured ? <span className='position-absolute end-0 bottom-0 text-white bgBtn fw-bold text-center p-2' style={{ width: 'fit-content' }}>Featured</span> : ''}
            </div>
            <div className="cardContent p-2">
                <div className='location flex'>
                    <p className='d-flex align-items-center'><i className="ri-map-pin-line mainColor"></i><span className='fw-bold'>{tour.city}</span></p>
                    <p className='d-flex align-items-center'><i className="ri-star-fill mainColor p-1"></i><span className='text-muted'>{tour.avgRating} ({tour.reviews.length})</span></p>
                </div>
                <h3 className='h6 fw-bold'>{tour.title}</h3>
                <div className='booking flex'>
                    <span><span className='mainColor fw-bold'>{tour.price} EGP</span> /per person</span>
                    <button className='btn bgBtn text-white fw-bold'>Book Now</button>
                </div>
            </div>
        </div>)
}
