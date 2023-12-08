import React, { useRef, useState } from 'react'
import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import TravelSlide1 from './TravelSlide1'
import TravelSlide2 from './TravelSlide2'
import TravelSlide3 from './TravelSlide3'
import TravelSlide4 from './TravelSlide4'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Keyboard, Pagination, Navigation } from 'swiper/modules'

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  padding-top: 100px;
`

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 95vh;
  margin-top: 5vh;
`

const StyledSwiperSlide = styled(SwiperSlide)``

export default function index() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TravelSlide1 />
        </SwiperSlide>
        <SwiperSlide>
          <TravelSlide2 />
        </SwiperSlide>
        <SwiperSlide>
          <TravelSlide3 />
        </SwiperSlide>
        <SwiperSlide>
          <TravelSlide4 />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
