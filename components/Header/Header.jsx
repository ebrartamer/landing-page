"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [boxesData, setBoxesData] = React.useState([
    { color: "red-1", label: "Question" },
    { color: "blue-1", label: "Answer" },
    { color: "purple-1", label: "Rewards" },
  ]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="bg-pink-1 absolute top-0 left-0 w-screen md:h-[82vh]  px-10  "
      style={{
        zIndex: "10",
      }}
    >
      <div className="flex justify-center pt-8 ">
        <div className="flex md:justify-between items-center w-full md:w-[96%]  ">
          <h1 className="text-white md:drop-shadow-[6px_6px_rgba(0,0,0,1)] drop-shadow-[3px_3px_rgba(0,0,0,1)] text-shadow font-lexend md:text-4xl text-2xl font-bold">
            Q&R
          </h1>
          <button
            className="bg-white drop-shadow-[5px_5px_rgba(0,0,0,1)] rounded-[10px]  font-lexend font-bold md:p-2 md:px-8 drop
            border-2 border-black hover:drop-shadow-none transition-all duration-200 ease-in-out ml-12 ">
            <p className="text-black font-bold px-2 ">Connect Wallet</p>
          </button>
        </div>
      </div>

      <div className="flex justify-around md:pt-4 md:pl-20 ">
        <div className="md:w-2/3 w-2/3 h-auto flex justify-start items-center ">
          <p
          className="text-white md:text-7xl text-3xl md:leading-none leading-tight font-lexend font-bold text-shadow md:drop-shadow-[3px_3px_rgba(0,0,0,1)] pt-12"
            style={{
              //  fontSize: "68px",
               fontStyle: "normal",
              opacity: isVisible ? 1 : 0,

              transform: isVisible ? "translateX(0)" : "translateX(50%)",
              transition: "transform 1s ease-in-out",
            }}
          >
            New Generation GameFi for easy to learn, enjoy and earn
          </p>
        </div>
        <div className="md:w-1/3 w-1/3 h-full flex justify-start items-start md:pt-0 pt-16">
          <Image
            src={"/images/human.png"}
            width={220}
            height={220}
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 2s ease-in-out",
              transform: isVisible ? "translateX(50%)" : "translateX(0%)",
              transition: "transform 1s ease-in-out",
            }}
          />
        </div>
      </div>

      
        <div
          className="flex md:flex-row flex-wrap justify-around items-center w-auto md:rounded-[20px] rounded-[10px] drop-shadow-[4px_4px_rgba(0,0,0,1)] ">
          
          <button
            className={`bg-blue-1 font-lexend md:drop-shadow-[4px_4px_rgba(0,0,0,1)] text-white rounded-[20px] md:p-4 p-1 md:px-12 mt-4 px-8
                hover:drop-shadow-none transition-all duration-200 ease-in-out
            `}
          >
            <p className="font-lexend drop-shadow-[2px_2px_rgba(0,0,0,1)] md:text-2xl">
              Answer
            </p>
          </button>
          <button
            className={`bg-purple-1 font-lexend md:drop-shadow-[4px_4px_rgba(0,0,0,1)] text-white rounded-[20px] md:p-4 p-1 md:px-12 mt-4 px-8 
                hover:drop-shadow-none transition-all duration-200 ease-in-out
            `}
          >
            <p className="font-lexend drop-shadow-[2px_2px_rgba(0,0,0,1)] md:text-2xl">
              Rewards
            </p>
          </button>
          <button
            className={`bg-red-1 font-lexend md:drop-shadow-[4px_4px_rgba(0,0,0,1)] text-white rounded-[20px] md:p-4 p-1 md:px-12 mt-4 px-8
                hover:drop-shadow-none transition-all duration-200 ease-in-out`}>
            <p className="font-lexend drop-shadow-[2px_2px_rgba(0,0,0,1)] md:text-2xl">
              Question
            </p>
          </button>
        </div>
      
    </div>
  );
};

export default Header;
