import React from 'react'

export default function Testimonial(props) {
    return (
        <div className='testimonial '>
            <div >
                <p className='py-2 w-75 text-muted'>{props.text}</p>
                <div className="personalInfo d-flex align-items-center">
                    <div className='image'>
                        <img src={props.img} alt={props.alt} width={60} style={{ borderRadius: '10px' }} />
                    </div>
                    <div className="contentInfo ms-3">
                        <p>{props.name}</p>
                        <span>customer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
