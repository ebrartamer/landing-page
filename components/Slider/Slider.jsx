"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const Slider = ({ data }) => {
  return (
    <Swiper
      slidesPerView={3.4}
      //onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
      }}
      loop={true}
      smoothTransition={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="flex justify-center items-center"
    >
      {/* {boxesData.map((box, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <div
            className={`bg-${box.color} flex justify-center items-center h-[50vh] w-[20vw]
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
          >
            <p className="text-center text-white drop-shadow-[4px_4px_rgba(0,0,0,1)] font-lexend font-bold text-2xl">
              {box.label}
            </p>
          </div>
        </SwiperSlide>
      ))} */}
      <SwiperSlide className="flex justify-center items-center">
        <div
          className={`bg-red-1 flex justify-center items-center h-[50vh] w-[20vw]
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
        >
          <p className="text-center text-white  text-shadow font-lexend font-bold text-2xl">
            SCALABLE
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <div
          className={`bg-blue-1 flex justify-center items-center h-[50vh] w-[20vw]
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
        >
          <p className="text-center text-white  text-shadow font-lexend font-bold text-2xl">
            EASY ADAPTATION FOR WEB2 USERS
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <div
          className={`bg-purple-1 flex justify-center items-center h-[50vh] w-[20vw]
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
        >
          <p className="text-center text-white  text-shadow font-lexend font-bold text-2xl">
            EASY ADAPTATION FOR WEB2 PLATFORMS
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <div
          className={`bg-pink-1 flex justify-center items-center h-[50vh] w-[20vw]
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
        >
          <p className="text-center text-white  text-shadow font-lexend font-bold text-2xl">
            EASY ADAPTATION FOR WEB2 PLATFORMS
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex justify-center items-center">
        <div
          className={`bg-red-1 flex justify-center items-center h-[50vh] w-[20vw]
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
        >
          <p className="text-center text-white  text-shadow font-lexend font-bold text-2xl">
            SCALABLE
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
