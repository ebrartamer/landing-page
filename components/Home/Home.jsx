"use client";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import React, { useState } from "react";

const Home = () => {
  const [imagePositions, setImagePositions] = useState({
    image2: { right: 100, top: 20 },
    image1: { right: 300, top: -40 },
  });
const windowSize = useWindowSize(); 

  const handleClick = (image) => {
    // Toggle positions when an image is clicked
    setImagePositions((prevPositions) => ({
      image1: {
        right: prevPositions.image2.right,
        top: prevPositions.image2.top,
      },
      image2: {
        right: prevPositions.image1.right,
        top: prevPositions.image1.top,
      },
    }));
  };

  return (
    <div className="flex flex-col  justify-center items-center h-screen">
      <h1 className="text-center  text-white text-shadow md:drop-shadow-[3px_3px_rgba(0,0,0,1)] font-lexend md:text-5xl text-2xl md:mb-20">
        Welcome On Board
      </h1>
      <div className="bg-white border-black border-2 md:border-b-8 md:border-r-8 rounded-[40px] md:h-4/5 h-full md:w-full w-auto md:mt-20 mt-28 mx-5 flex md:flex-row flex-col ">
        <div className="md:w-1/2 h-screen ">
          <div className="w-full justify-center items-center">
            <p className="text-black font-lexend md:leading-10 leading-7 font-bold md:p-16 md:text-lg order-last p-8">
              Q&R is a Blockchain-powered Game-Fi platform that enables players
              to earn specific incomes according to their answers, activities,
              and creative ideas at different fictional functions. It is a
              new-generation quiz game, with a completely unique approach
              without any centralized restrictions.
            </p>
          </div>
          <div className="relative">
            <Image
              className="absolute md:left-40 left-20 md:-top-16 -top-12 z-10"
              src="/images/humans.png"
              width={windowSize.width > 768 ? 300 : 280}
              height={windowSize.height > 768 ? 300 : 280}
            />
          </div>
        </div>
        <div className="md:w-1/2 w-auto h-full order-first ">
          <div className="relative w-full">
            <Image
              className={`absolute  md:right-52  ml-40 md:-top-0 -top-50 z-10 cursor-pointer md:image-with-shadow`}
              src="/images/UserHomeMobile.png"
              width={windowSize.width > 768 ? 300 : 180}
              height={windowSize.height > 768 ? 300 : 180}
              onClick={() => handleClick("image1")}
              style={{
                right: `${imagePositions.image1.right}px`,
                top: `${imagePositions.image1.top}px`,
                transition: "all 0.5s ease-in-out",
              }}
            />
          </div>

          <div className="relative ">
            <Image
              className={`absolute md:right-80  md:-top-12  -top-48 z-10 cursor-pointer  image-with-shadow`}
              src="/images/QuizQuestionMobile.png"
              width={windowSize.width > 768 ? 300 : 180}
              height={windowSize.height > 768 ? 300 : 180}
              onClick={() => handleClick("image2")}
              style={{
                right: `${imagePositions.image2.right}px`,
                top: `${imagePositions.image2.top}px`,
                transition: "all 0.5s ease-in-out",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
