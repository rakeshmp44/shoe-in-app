import React from 'react'
import Navbar from '../Navbar/Navbar'
import CarouselPage from '../Carousel/CarouselPage.jsx'
import images from '../Carousel/images.js'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <CarouselPage images={images}/>

    </div>
  )
}

export default HomePage