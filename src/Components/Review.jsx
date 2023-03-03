import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {  Pagination, Autoplay, EffectCoverflow, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'


const Review = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
      // grabCursor={true}
      spaceBetween={50}
      slidesPerView={'auto'}
      autoplay={{delay: 3000}}
      pagination={true}
      navigation
      loop='true'
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      >
      <SwiperSlide>
        <div className='h-64 w-screen my-10 grid place-items-center bg-green-900'>
          <div className='h-full w-6/12 bg-red-500'>
            <h1>This is a Review</h1>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='h-64 w-screen my-10 grid place-items-center bg-blue-800'>
        <div className='h-full w-6/12 bg-indigo-500 '>
            <h1>This is a Review</h1>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='h-64 w-screen my-10 grid place-items-center bg-orange-900'>
        <div className='h-full w-6/12 bg-green-500'>
            <h1>This is a Review</h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Review