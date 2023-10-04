import React from 'react'
import ServicesBox from '../ServicesBox/ServicesBox'
import Slider from 'react-slick'
import Testimonial from './Testimonial'
import personalImg1 from '../../assets/images/ava-1.AVIF'
import personalImg2 from '../../assets/images/ava-2.AVIF'
import personalImg3 from '../../assets/images/ava-3.AVIF'
export default function Review() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide:true,
        autpPlaySpeed:500,
        responsive:[{
            breakpoint:992,
            settings : {
                slidesToShow: 2,
            }
        },
        {
            breakpoint:576,
            settings : {
                slidesToShow: 1,
            }
        },
    ]
    };
    return (
        <section className='container'>
            <div className='serviceBox pb-3'>
                <ServicesBox title="fans love" desc="what are fans say about us ?" />
            </div>
            <Slider {...settings} className="reviews">
                <Testimonial text="I had an incredible experience with your travel agency! The trip was well-organized, and the destinations were breathtaking.
                From the moment I booked my tour until the end of the journey, everything was seamless."
                    img={personalImg1}
                    name='John'
                    alt="peronalImg1"
                />
                <Testimonial text="I can't thank your team enough for the amazing adventure you provided.
                The attention to detail and personalized service were exceptional"
                    img={personalImg2}
                    name='jolia'
                    alt="peronalImg2"
                />
                <Testimonial text="My recent trip planned by your travel agency exceeded all expectations. The itinerary was perfectly tailored to my preferences, allowing me to discover the wonders 
                of each destination at my own pace"
                    img={personalImg3}
                    name='ali'
                    alt="peronalImg3"
                />
            </Slider>
        </section>
    )
}
