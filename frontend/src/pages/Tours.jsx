import React, { useContext } from 'react';
import ServicesBox from '../components/ServicesBox/ServicesBox';
import { toursContext } from '../context/ToursContext';
import TourCard from './TourCard';
import { Link } from 'react-router-dom';

export default function Tours() {
  const { tours } = useContext(toursContext)
  return (
    <section className='container'>
      <div className='serviceBox'>
        <ServicesBox title="explore" desc="our featured tours" />
      </div>
      <section className='cardContent grid'>
        {tours.slice(0, 9).map((el, index) => {
          return (
            <TourCard tour={el} key={index} />
          )
        })}
      </section>
      <Link to='/tours' onClick={()=>window.scroll(0,0)} className='d-flex justify-content-center text-decoration-none'><button className='btn bgBtn text-white fs-5'>view all</button></Link>
    </section>
  )
}
