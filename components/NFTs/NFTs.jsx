"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useWindowSize from "@/hooks/useWindowSize";
// Import Swiper styles
import "swiper/css";

const NFTs = ({ data }) => {
  const windowSize = useWindowSize();
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-shadow ">
        <h1 className="text-white md:text-5xl text-2xl text-shdow font-bold font-lexend mb-20">
          NFT Assets
        </h1>
      </div>
      <Swiper
      slidesPerView={windowSize.width > 768 ? 3.2 : 2.1}
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
          className={`bg-red-1 flex justify-center items-center md:h-[50vh] h-[25vh] md:w-[20vw] w-[40vw]
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
        >
          <p className="text-center text-white  text-shadow font-lexend font-bold md:text-2xl">
          MULTIPLY YOUR EARNINGS
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <div
          className={`bg-blue-1 flex justify-center items-center md:h-[50vh] h-[25vh] md:w-[20vw] w-[40vw] mr-5
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
        >
          <p className="text-center text-white  text-shadow font-lexend font-bold md:text-2xl">
            GET AHEAD IN QUESTIONS
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <div
          className={`bg-purple-1 flex justify-center items-center md:h-[50vh] h-[25vh] md:w-[20vw] w-[40vw] mr-5
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
        >
          <p className="text-center text-white  text-shadow font-lexend font-bold md:text-2xl">
            PARTICIPATE  IN SPESCIAL EVENTS
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <div
          className={`bg-pink-1 flex justify-center items-center md:h-[50vh] h-[25vh] md:w-[20vw] w-[40vw] mr-5
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
        >
          <p className="text-center text-white  text-shadow font-lexend font-bold md:text-2xl">
          ADVERTISE YOURSELF AND STAND OUT
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex justify-center items-center">
        <div
          className={`bg-red-1 flex justify-center items-center md:h-[50vh] h-[25vh] md:w-[20vw] w-[40vw] mr-5
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
        >
          <p className="text-center text-white  text-shadow font-lexend font-bold md:text-2xl">
            SCALABLE
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default NFTs;
