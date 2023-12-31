import React from 'react'
import ServicesBox from '../ServicesBox/ServicesBox'
import imgGallery1 from '../../assets/images/gallery-01.AVIF'
import imgGallery2 from '../../assets/images/gallery-02.AVIF'
import imgGallery3 from '../../assets/images/gallery-03.AVIF'
import imgGallery4 from '../../assets/images/gallery-04.AVIF'
import imgGallery5 from '../../assets/images/gallery-05.AVIF'
import imgGallery6 from '../../assets/images/gallery-06.AVIF'
import imgGallery7 from '../../assets/images/gallery-07.AVIF'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'


export default function Gallery() {
    const galleryImages = [
        imgGallery1,
        imgGallery2,
        imgGallery3,
        imgGallery4,
        imgGallery6,
        imgGallery5,
        imgGallery7,
        imgGallery1
    ]
    return (
        <section className='container'>
            <div className='serviceBox pb-3'>
                <ServicesBox title="gallery" desc="visit our custom tour gallery" />
            </div>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
                <Masonry gutter='1rem'>
                    {galleryImages.map((el, index) => (
                        <img src={el} alt={'galleryImage' + index} loading='lazy' className='galleryImg cursorPointer' key={index} style={{ display: 'block', borderRadius: '10px' }} />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    )
}
