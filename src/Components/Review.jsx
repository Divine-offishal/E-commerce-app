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
        <div className='h-64 w-screen md:my-10 mb-20 grid place-items-center'>
          <div className='h-full md:w-6/12 w-10/12 bg-slate-200 shadow-lg shadow-black'>
              <h1 className='text-4xl font-medium mt-10 mx-2'>"Smooth transactions and low charges. Kudos to Virtual Mall"</h1>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='h-64 md:w-screen w-10/12 md:my-10 mb-20 grid place-items-center'>
          <div className='h-full md:w-6/12 w-8/12 bg-slate-200 shadow-lg shadow-black'>
            <h1 className='text-4xl font-medium mt-10 mx-2'>"I love the discount prices...it has helped me save 20% of my money."</h1>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='h-64 w-screen md:my-10 mb-20 grid place-items-center'>
          <div className='h-full md:w-6/12 w-8/12 bg-slate-200 shadow-lg shadow-black'>
              <h1 className='text-4xl font-medium mt-10 mx-2'>"Fast delivery rates. I can't recommend Virtual Mall enough"</h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Review