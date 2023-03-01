import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Scrollbar, A11y, Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Carousel = () => {
  return (
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
        <div className=' h-72 w-screen bg-red-500 mt-20'>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='h-72 w-screen bg-orange-500 mt-20'>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='h-72 w-screen bg-green-500 mt-20'>Slide 3</div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel