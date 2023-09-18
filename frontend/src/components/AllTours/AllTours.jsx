import React, { useContext } from 'react';
import './allTours.css';
import { Link } from 'react-router-dom';
import { toursContext } from '../../context/ToursContext';
import TourCard from '../../pages/TourCard';
import Banner from '../Banner/Banner';
import Paganition from '../Paganation/Paganition';

export default function AllTours() {
    const { tours } = useContext(toursContext);
    return (
        <>
            <div className='bgBanner'>
                <div className='d-flex align-items-center container'>
                    <h3 className='text-white h5'>
                        <Link to='/' className='text-decoration-none mainColor'>Home</Link>
                        {' >'} all tours</h3>
                </div>
            </div>
            <section className='cardContent grid container'>
                {tours.slice(0, 9).map((el, index) => {
                    return (
                        <TourCard tour={el} key={index} />
                    )
                })}
                <Paganition/>
            </section>
            <Banner/>
        </>
    )
}
