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
      className="bg-pink-1 absolute top-0 left-0 w-auto h-[60vh] px-10 pt-10 "
      style={{
        
        zIndex: "-1",
      }}
    >
      <div className="flex justify-center  ">
        <div className="flex justify-between items-center w-[96%] ">
          <h1 className="text-white drop-shadow-[6px_6px_rgba(0,0,0,1)] text-shadow font-lexend text-4xl font-bold">
            Q&R
          </h1>
          <button
            className="bg-white drop-shadow-[5px_5px_rgba(0,0,0,1)] rounded-[10px]  font-lexend font-bold p-2 px-8 drop
            border-2 border-black hover:drop-shadow-none transition-all duration-200 ease-in-out 
    "
          >
            <p className="text-black font-bold">Connect Wallet</p>
          </button>
        </div>
      </div>

      <div className="flex justify-around pt-20 pl-20">
        <div className="w-2/3 h-auto flex justify-start items-center">
          <p
            style={{
              textShadow: "3px 3px 3px #000",
              fontFamily: "Lexend Mega",
              fontSize: "68px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              color: "#FFFFFF",
              opacity: isVisible ? 1 : 0,

              transform: isVisible ? "translateX(0)" : "translateX(50%)",
              transition: "transform 1s ease-in-out",
            }}
          >
            New Generation GameFi for easy to learn, enjoy and earn
          </p>
        </div>
        <div className="w-1/3 h-full flex justify-start items-start ">
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

      <div className="flex flex-row justify-around items-center ">
        <div
          className="flex flex-row justify-around items-center w-[80%] rounded-[20px] drop-shadow-[4px_4px_rgba(0,0,0,1)]">
          <button
            className={`bg-red-1 font-lexend drop-shadow-[4px_4px_rgba(0,0,0,1)] text-white rounded-[20px] p-4 px-12
                hover:drop-shadow-none transition-all duration-200 ease-in-out`}>
            <p className="font-lexend drop-shadow-[2px_2px_rgba(0,0,0,1)] text-2xl">
              Question
            </p>
          </button>
          <button
            className={`bg-blue-1 font-lexend drop-shadow-[4px_4px_rgba(0,0,0,1)] text-white rounded-[20px] p-4 px-12
                hover:drop-shadow-none transition-all duration-200 ease-in-out
            `}
          >
            <p className="font-lexend drop-shadow-[2px_2px_rgba(0,0,0,1)] text-2xl">
              Answer
            </p>
          </button>
          <button
            className={`bg-purple-1 font-lexend drop-shadow-[4px_4px_rgba(0,0,0,1)] text-white rounded-[20px] p-4 px-12
                hover:drop-shadow-none transition-all duration-200 ease-in-out
            `}
          >
            <p className="font-lexend drop-shadow-[2px_2px_rgba(0,0,0,1)] text-2xl">
              Rewards
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
