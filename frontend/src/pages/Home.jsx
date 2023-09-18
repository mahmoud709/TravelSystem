import React from 'react'
import './Home.css';
import worldImg from '../assets/images/world.png';
import hereImg1 from '../assets/images/hero-img01.jpg';
import hereImg12 from '../assets/images/hero-img02.jpg';
import video from '../assets/images/hero-video.mp4';
import Services from '../components/Services/Services';
import Tours from './Tours';
import Experience from '../components/Experience/Experience';
import Gallery from '../components/Gallery/Gallery';
import Review from '../components/Reviews/Review';
import Banner from '../components/Banner/Banner';
export default function Home() {
  return (
      <div>
      <div className="HomePage container">
        <div className='row flex '>
          <div className="col-md-6">
            <div className="title flex ">
              <p className='section__subtitle'><i>Know Befor you go</i></p>
              <img src={worldImg} alt='worldImg' width={40} className='mb-2' />
            </div>
            <div className="contentHeader">
              <h2>Traveling opens the door <br /> to creating <span className='spe_color'>memories</span></h2>
            </div>
            <div className='contentInfo'>
              <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet voluptatibus accusantium quis id magnam dolorum quas voluptate quos nobis sed,
                dolor consequuntur consectetur ipsum quod asperiores vero repellendus ipsam.</p>          </div>
          </div>
          <div className="HomeImg col-md-2">
            <img src={hereImg1} alt='hero-img1' className='w-100 rounded' />
          </div>
          <div className="Homevideo col-md-2">
            <video src={video} controls autoPlay className='w-100 rounded mt-4'>
              Error with video
            </video>
          </div>
          <div className="HomeImg col-md-2">
            <img src={hereImg12} alt='hero-img1' className='w-100 rounded mt-5' />
          </div>
        </div>
        </div>
        <Services />
        <Tours />
        <Experience />
        <Gallery />
        <Review />
        <Banner />
      </div>
  )
}
