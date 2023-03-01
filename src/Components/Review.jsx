import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { A11y, Navigation, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'


const Review = () => {
  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay: 3000}}
      navigation
      loop='true'
      >
      <SwiperSlide>
        <div className='h-64 w-screen my-10'>
          <div className='h-full w-6/12 bg-red-500 ml-72'>
            <h1>This is a Review</h1>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='h-64 w-screen my-10'>
        <div className='h-full w-6/12 bg-indigo-500 ml-72 '>
            <h1>This is a Review</h1>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='h-64 w-screen my-10'>
        <div className='h-full w-6/12 bg-green-500 ml-72'>
            <h1>This is a Review</h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Review