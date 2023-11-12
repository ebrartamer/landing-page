"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useWindowSize from "@/hooks/useWindowSize";
// Import Swiper styles
import "swiper/css";

import Image from "next/image";

const Partners = ({ data }) => {
  const useSize = useWindowSize();
  
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-shadow ">
        <h1 className="text-white md:text-5xl text-2xl text-shdow font-bold font-lexend mb-20">
          Partners
        </h1>
      </div>
      <Swiper
        slidesPerView={useSize.width > 768 ? 3.5 : 1.5}
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
            className={`bg-white flex justify-center items-center md:h-[10vh] md:w-[20vw] h-[8vh]
          border-2 border-black  transition-all duration-200 ease-in-out
          md:rounded-[20px] rounded-[10px] mx-2 hover:drop-shadow-none `}
          >
            <Image src={"/images/image13.png"} width={150} height={150} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <div
            className={`bg-white flex justify-center items-center md:h-[10vh] md:w-[20vw] h-[8vh]
          border-2 border-black  transition-all duration-200 ease-in-out
          md:rounded-[20px] rounded-[10px] mx-2 hover:drop-shadow-none `}
          >
            <Image src={"/images/image14.png"} width={150} height={150} />
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="flex justify-center items-center">
          <div
            className={`bg-white flex justify-center items-center md:h-[10vh] md:w-[20vw] h-[8vh]
          border-2 border-black  transition-all duration-200 ease-in-out
          md:rounded-[20px] rounded-[10px] mx-2 hover:drop-shadow-none `}
          >
            <Image className="p-3" src={"/images/image15.png"} width={150} height={150} />
          </div>
        </SwiperSlide>

        

        <SwiperSlide className="flex justify-center items-center">
          <div
            className={`bg-white flex justify-center items-center md:h-[10vh] md:w-[20vw] h-[8vh]
          border-2 border-black  transition-all duration-200 ease-in-out
          md:rounded-[20px] rounded-[10px] mx-2 md:py-0 py-4 hover:drop-shadow-none`}
          >
            <Image src={"/images/castrumB.jpg"} width={150} height={150} />
          </div>
        </SwiperSlide>

        
        <SwiperSlide className="flex justify-center items-center">
          <div
            className={`bg-white flex justify-center items-center md:h-[10vh] md:w-[20vw] h-[8vh]
          border-2 border-black  transition-all duration-200 ease-in-out
          md:rounded-[20px] rounded-[10px] mx-2 hover:drop-shadow-none `}
          >
            <Image className="p-4" src={"/images/cryptops4.png"} width={150} height={150} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <div
            className={`bg-white flex justify-center items-center md:h-[10vh] md:w-[20vw] h-[8vh]
          border-2 border-black  transition-all duration-200 ease-in-out
          md:rounded-[20px] rounded-[10px] mx-2 hover:drop-shadow-none`}
          >
            <Image src={"/images/beyaz.png"} width={150} height={150} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <div
            className={`bg-white flex justify-center items-center md:h-[10vh] md:w-[20vw] h-[8vh]
          border-2 border-black  transition-all duration-200 ease-in-out
          md:rounded-[20px] rounded-[10px] mx-2 hover:drop-shadow-none`}
          >
            <Image src={"/images/coinvestor.png"} width={150} height={150} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
