"use client";
import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  const [imagePositions, setImagePositions] = useState({
    image2: { right: 100, top: 20 },
    image1: { right: 300, top: -40 },
  });

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
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-white text-shadow drop-shadow-[3px_3px_rgba(0,0,0,1)] font-lexend text-5xl mb-20">
        Welcome On Board
      </h1>
      <div className="bg-white border-black border-2 border-b-8 border-r-8 rounded-[40px] h-4/5 w-full mt-20 flex flex-row ">
        <div className="w-1/2 h-full">
          <div className="w-full justify-center items-center">
            <p className="text-black font-lexend leading-10 font-bold p-16 text-lg">
              Q&R is a Blockchain-powered Game-Fi platform that enables players
              to earn specific incomes according to their answers, activities,
              and creative ideas at different fictional functions. It is a
              new-generation quiz game, with a completely unique approach
              without any centralized restrictions.
            </p>
          </div>
          <div className="relative">
            <Image
              className="absolute left-40 -top-16 z-10"
              src="/images/humans.png"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div className="relative">
            <Image
              className={`absolute  right-20 -top-0 z-10 cursor-pointer image-with-shadow`}
              src="/images/UserHomeMobile.png"
              width={280}
              height={280}
              onClick={() => handleClick("image1")}
              style={{
                right: `${imagePositions.image1.right}px`,
                top: `${imagePositions.image1.top}px`,
                transition: "all 0.5s ease-in-out",
              }}
            />
          </div>

          <div className="relative">
            <Image
              className={`absolute right-80 -top-12 z-10 cursor-pointer  image-with-shadow`}
              src="/images/QuizQuestionMobile.png"
              width={280}
              height={280}
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
