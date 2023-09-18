import React from 'react'
import avatar from '../assets/images/avatar.jpg'
export default function Opnions() {
    return (
        <section>
            <div className="person d-flex">
                <div className="personRevImg">
                    <img src={avatar} alt='avatar' width={'60px'} />
                </div>
                <div className="personInfo d-flex flex-column">
                    <p className='fw-bold text-lowercase m-0'>user</p>
                    <span>January 14,2023</span>
                    <div className="reviewMessage mt-2">
                        <p>this is a nice tour</p>
                    </div>
                </div>
            </div>
            <hr/>
        </section>
    )
}
