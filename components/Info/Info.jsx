"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

const Info = ({ data }) => {
    return (

        <div className="flex flex-col w-full h-full text-center">
            <div>
                <h1 className="text-white text-shadow font-bold font-lexend md:text-5xl text-2xl md:drop-shadow-[2px_2px_rgba(0,0,0,1)] mb-10">In Game Shoots</h1>
            </div>
            <div>
            <Swiper
                slidesPerView={1.5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                    clickable: true,
                }}
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
                <SwiperSlide className="flex justify-center items-center m-5">
                    <div
                        className={` flex justify-center items-center
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
            transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
                    >
                        <Image
                            src={'/images/User-Home1.png'}
                            width={1000}
                            height={1000}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center m-5">
                    <div
                        className={` flex justify-center items-center
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
            transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
                    >
                        <Image
                            src={'/images/User-Home1.png'}
                            width={1000}
                            height={1000}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center m-5">
                    <div
                        className={` flex justify-center items-center
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
            transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
                    >
                        <Image
                            src={'/images/User-Home1.png'}
                            width={1000}
                            height={1000}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center m-5">
                    <div
                        className={` flex justify-center items-center
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
            transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
                    >
                        <Image
                            src={'/images/User-Home1.png'}
                            width={1000}
                            height={1000}
                        />
                    </div>
                </SwiperSlide>

            </Swiper>
            </div>
            
        </div>
    );
};

export default Info;
