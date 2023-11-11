"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Animation from "../Animation/Animation";

typeof window !== "undefined" && (window.global = window);

const Play = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined" && window) {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const calculateTransform = () => {
    if (typeof window !== "undefined" && window) {
      const dx = mousePosition.x - window.innerWidth / 2;
      const dy = mousePosition.y - window.innerHeight / 2;
      const angle = Math.atan2(dy, dx);

      return `translate(-50%, -50%) rotate(${angle}rad)`;
    } else {
      return `translate(-50%, -50%) rotate(0rad)`;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-white text-5xl text-shadow font-bold font-lexend drop-shadow-[2px_2px_rgba(0,0,0,1)] my-10">
        How to play?{" "}
      </h1>
      <div className="flex flex-col justify-around items-center">
        <div className="relative flex flex-row justify-center items-center my-14">
          <Animation
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: -150,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="flex flex-row items-center justify-center">
              <div
                className={`bg-blue-1 rounded-full w-[8vw] h-[16vh] flex justify-center items-center border border-black border-b-4 border-r-4 my-10 hover:border-none transition-all duration-300 ease-in-out
                  
                `}
              >
                <p className="text-white text-5xl  text-shadow  font-bold font-lexend  ">
                  1
                </p>
              </div>
              <div className="h-1 w-[20vw] bg-black"></div>
            </div>
          </Animation>
          <Animation
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: 150,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="bg-white border-2 w-[30vw] h-[30vh] flex justify-center items-center border-black border-b-4 border-r-4 rounded-[20px]">
              <p className="font-bold font-lexend text-black text-2xl leading-loose drop-shadow-[2px_2px_rgba(0,0,0,1) px-10">
                Connect with your wallet or Google account.
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                right: "-200px",
                top: "0",
                transform: calculateTransform(),
              }}
            >
              <Image src="/images/image11.png" width={200} height={200} />
            </div>
          </Animation>
        </div>

        <div className="relative flex flex-row justify-center items-center my-24">
          <Animation
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: -150,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="bg-white  w-[30vw] h-[30vh] flex justify-center items-center border-black border-2 border-b-4 border-r-4 rounded-[20px]">
              <p className="font-bold font-lexend text-black text-2xl leading-loose drop-shadow-[2px_2px_rgba(0,0,0,1) px-10">
                Create your profile.
              </p>
            </div>
            <div className="absolute left-28 -top-32">
              <Image src="/images/Rogue.png" width={160} height={160} />
            </div>
          </Animation>
          <Animation
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: 150,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="flex flex-row items-center justify-center">
              <div className="h-1 w-[20vw] bg-black"></div>
              <div
                className={`bg-green-1 rounded-full w-[8vw] h-[16vh] flex justify-center items-center border border-black border-b-4 border-r-4 my-10 hover:border-none transition-all duration-300 ease-in-out`}
              >
                <p className="text-white text-5xl  text-shadow  font-bold font-lexend  ">
                  2
                </p>
              </div>
            </div>
          </Animation>
        </div>

        <div className="relative flex flex-row justify-center items-center my-14">
          <Animation
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: -150,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="flex flex-row items-center justify-center">
              <div
                className={`bg-red-1 rounded-full w-[8vw] h-[16vh] flex justify-center items-center border border-black border-b-4 border-r-4 my-10 hover:border-none transition-all duration-300 ease-in-out`}
              >
                <p className="text-white text-5xl  text-shadow  font-bold font-lexend  ">
                  3
                </p>
              </div>
              <div className="h-1 w-[20vw] bg-black"></div>
            </div>
          </Animation>
          <Animation
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: 150,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="bg-white border-2 w-[30vw] h-[30vh] flex justify-center items-center border-black border-b-4 border-r-4 rounded-[20px]">
              <p className="font-bold font-lexend text-black text-2xl leading-loose drop-shadow-[2px_2px_rgba(0,0,0,1) px-10">
                Find Proper Game
              </p>
            </div>
            <div className="absolute -right-24 top-12">
              <Image src="/images/Bueno.png" width={200} height={200} />
            </div>
          </Animation>
        </div>

        <div className="relative flex flex-row justify-center items-center my-14">
          <Animation
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: -150,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="bg-white border-2 w-[30vw] h-[30vh] flex justify-center items-center border-black border-b-4 border-r-4 rounded-[20px]">
              <p className="font-bold font-lexend text-black text-2xl leading-loose drop-shadow-[2px_2px_rgba(0,0,0,1) px-10">
                Join the events.
              </p>
            </div>
            <div className="absolute -left-12 top-12">
              <Image src="/images/Class.png" width={200} height={200} />
            </div>
          </Animation>

          <Animation
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: 150,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="flex flex-row items-center justify-center">
              <div className="h-1 w-[20vw] bg-black"></div>
              <div
                className={`bg-pink-1 rounded-full w-[8vw] h-[16vh] flex justify-center items-center border border-black border-b-4 border-r-4 my-10 hover:border-none transition-all duration-300 ease-in-out`}
              >
                <p className="text-white  font-bold font-lexend text-5xl  text-shadow  ">
                  4
                </p>
              </div>
            </div>
          </Animation>
        </div>

        <div className="relative flex flex-row justify-center items-center my-14">
          <Animation
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: -150,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="flex flex-row items-center justify-center">
              <div
                className={`bg-purple-1 rounded-full w-[8vw] h-[16vh] flex justify-center items-center border border-black border-b-4 border-r-4 my-10 hover:border-none transition-all duration-300 ease-in-out`}
              >
                <p className="text-white text-5xl font-bold font-lexend text-shadow   ">
                  5
                </p>
              </div>
              <div className="h-1 w-[20vw] bg-black"></div>{" "}
            </div>
          </Animation>
          <Animation
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: 150,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="bg-white border-2 w-[30vw] h-[30vh] flex justify-center items-center border-black border-b-4 border-r-4 rounded-[20px] ">
              <p className="font-bold font-lexend text-black text-2xl leading-loose drop-shadow-[2px_2px_rgba(0,0,0,1) px-10">
                Have fun and Earn Income.
              </p>
            </div>
            <div className="absolute -right-10 top-12">
              <Image src="/images/Feliz.png" width={200} height={200} />
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default Play;
