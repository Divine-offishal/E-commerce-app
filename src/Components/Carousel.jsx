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
        <div className='h-72 w-screen mt-20 flex'>
          <div className='h-full w-5/12 bg-[url(https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973__340.jpg)]'></div>
          <div className='bg-black text-neutral-50 w-7/12 h-full text-5xl font-semi-bold'>
            <h1 className='mt-32'>Get all your gadgets in one go</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='h-72 w-screen mt-20 flex'>
        <div className=' w-5/12 h-full bg-contain bg-[url(data:image/jpeg;base64,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)]'>
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJNmMonAt-7BgT4sCNBrSeR7KlB10zTmhzNBMDOUneg&s" alt="carousel image" className="h-full w-full object-cover" /> */}
        </div>
        <div className=' bg-slate-700 text-neutral-200 text-4xl font-semibold h-full w-7/12'>
          <h1 className='mt-32'>Get the coolest designer jeweries for lower rates</h1>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='h-72 w-screen mt-20 flex'>
        <div className='bg-contain w-5/12 h-full bg-[url(data:image/jpeg;base64,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)]'></div>
        <div className='bg-blue-400 h-full w-7/12 text-neutral-300 font-semibold text-4xl'>
          <h1>Enjoy fast delivery services</h1>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel