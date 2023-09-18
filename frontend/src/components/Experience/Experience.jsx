import React from 'react'
import './experience.css';
import experienceImg from '../../assets/images/experience.png'
export default function Experience() {
    return (
        <section className='row my-5 container mx-auto'>
            <div className="col-md-7">
                <div className="textContent">
                    <span className="title section__subtitle">experience</span>
                    <h3 className='pt-3'>with out experience <br /> we will serve you</h3>
                    <p className='w-75 py-2'>Experience is not a requirement for exceptional service,
                        Our dedicated team delivers tailored solutions that prioritize your satisfaction.
                        Partner with us today and experience the difference.</p>
                    <div className="achievements text-center d-flex">
                        <div className="box me-4">
                            <span className='p-2 fs-3 text-white fw-bold '>12+</span>
                            <p className='fw-bold my-2'>successful trip</p>
                        </div>
                        <div className="box me-4">
                            <span className='p-2 fs-3 text-white fw-bold '>25+</span>
                            <p className='fw-bold my-2'>regular client</p>
                        </div>
                        <div className="box me-4">
                            <span className='p-2 fs-3 text-white fw-bold '>3+</span>
                            <p className='fw-bold my-2'>year experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="experienceImg ">
                    <img src={experienceImg} alt="experience img" className='w-100' />
                </div>
            </div>
        </section>
    )
}
