import React from 'react'
export default function ServicesBox(props) {
    return (
        <div className='d-flex flex-column justify-content-center'>
            <h3 className='fw-bold h5 section__subtitle'>{props.title}</h3>
            <h4 className='fw-bold text-dark'>{props.desc}</h4>
        </div>
    )
}
