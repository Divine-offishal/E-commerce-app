import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Scrollbar, A11y, Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import IMAGES from '../Images/Images'

const Carousel = () => {
  return (
    <>
    <div id='Home'></div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay: 3000}}
      navigation
      loop='true'
      pagination={{clickable: true}}
      scrollbar={{draggable: false}}
    >
      <SwiperSlide>
        <div className='  h-96 w-screen md:mt-20 mt-8 flex'>
          <div className=' bg-carousel1 bg-cover text-neutral-50 w-full h-full text-5xl font-semi-bold '>
            <h1 className='md:mt-32 mt-10'>Get all your gadgets in one go</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' h-96 w-screen md:mt-20 mt-8 flex'>
        <div className=' bg-carousel2 bg-cover text-neutral-200 text-4xl font-semibold h-full w-full'>
          <h1 className='md:mt-32 mt-10'>Get the coolest designer jeweries for lower rates</h1>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' h-96 w-screen md:mt-20 mt-8 flex'>
        <div className='bg-carousel3 bg-cover h-full md:w-full text-neutral-300 font-semibold text-4xl'>
          <h1 className='md:mt-32 mt-10'>Enjoy fast delivery services</h1>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
    </>
  )
}

export default Carousel