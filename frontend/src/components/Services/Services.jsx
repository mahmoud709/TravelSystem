import React from 'react'
import './Services.css'
import weatherImg from '../../assets/images/weather.AVIF';
import tourGuide from '../../assets/images/guide.AVIF';
import customizeImg from '../../assets/images/customization.AVIF';
import ServicesBox from '../ServicesBox/ServicesBox';


export default function Services() {
    const ServicesData = [
        {
            imgUrl: weatherImg,
            title: "Calculate Weather",
            desc: "Get accurate weather forecasts for any location.",
        },
        {
            imgUrl: tourGuide,
            title: "Best Tour Guides",
            desc: "Experience the best tours with our knowledgeable and friendly guides.",
        },
        {
            imgUrl: customizeImg,
            title: "Customization",
            desc: "Tailor your travel experience to your preferences and interests.",
        },
    ];
    return (
        <section className='grid py-5 mt-5 gap-2 container'>
            <ServicesBox title="What we are serve" desc="We offer our best Services"/>
            {ServicesData.map((el,index)=>{
                    return(
                        <div className='serviceList rounded' key={index}>
                            <img src={el.imgUrl} alt={el.title} className='cardImg p-3' />
                            <h4 className='pt-3'>{el.title}</h4>
                            <p>{el.desc}</p>
                        </div>
                    )
            })}
        </section>
    )
}
