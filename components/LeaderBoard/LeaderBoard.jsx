import Image from "next/image";
import React from "react";
import useWindowSize from "@/hooks/useWindowSize";

const LeaderBoard = () => {
  const useSize = useWindowSize();
  return (
    <>
      <div className="flex justify-center items-center text-2xl md:text-5xl md:drop-shadow-[2px_2px_rgba(0,0,0,1)] mb-0 md:mb-20 ">
        <h1
          className="text-white font-bold font-lexend "
          style={{
            textShadow: "2px 2px 2px #000",
          }}
        >
          LeaderBoard
        </h1>
      </div>
      <div className="  justify-center flex flex-col  w-full h-screen   items-start  relative ">
        <div className="bg-white md:h-[80vh] h-[40vh] flex flex-row  items-end pb-10 justify-center gap-24 absolute w-[70vw] md:w-[68vw] border-4 border-black border-b-8 border-r-8 rounded-[20px] ml-5 md:ml-0">
          <div className="md:flex md:flex-col absolute  items-center justify-center   top-34 md:left-16">
            <div className="">
              <Image src="/images/Ellipse26.png" 
              width={useSize.width > 768 ? 178 : 70}
              height={useSize.width > 768 ? 178 : 70}
              />
              <p className="text-white md:hidden absolute text-4xl bottom-6 right-0 text-shadow font-bold font-lexend">
                3
              </p>
            </div>
            <p className="font-bold font-lexend md:text-xl text-black md:my-4 my-2">
              Joseph
            </p>
            <div
              className={`bg-brown-1 w-52 h-[10vh] rounded-[20px] border border-black border-b-4 border-r-4 md:flex hidden justify-center items-center `}
            >
              <p className="text-white  text-4xl  text-shadow font-bold font-lexend">
                3
              </p>
            </div>
            <div className="bg-white border border-black border-b-4 border-r-4 w-52 h-12 text-black font-bold font-lexend rounded-[20px] md:flex hidden justify-center items-center mt-5 text-lg">
              13 Win
            </div>
          </div>
          <div className="md:flex md:flex-col absolute md:relative items-center  justify-center md:-top-0 top-8 md:-right-32">
            <div className="">
              <Image src="/images/Ellipse27.png" 
              width={useSize.width > 768 ? 178 : 90}
              height={useSize.width > 768 ? 178 : 90}
              />
              <p className="text-white md:hidden absolute text-4xl bottom-3 right-0 text-shadow font-bold font-lexend">
                1
              </p>
            </div>
            <div className="font-bold font-lexend md:text-xl  text-black md:my-4 my-0">
              Mark
            </div>
            <div
              className={`bg-yellow-2 w-52 h-[24vh] rounded-[20px] border border-black border-b-4 border-r-4 md:flex hidden justify-center items-center `}
            >
              <p className="text-white  font-bold font-lexend  text-8xl  text-shadow">
                1
              </p>
            </div>

            <div className="bg-white border text-lg  border-black border-b-4 border-r-4 w-52 h-12 text-black font-bold font-lexend rounded-[20px] md:flex hidden justify-center items-center mt-5">
              24 Win
            </div>
          </div>
          <div className="md:flex md:flex-col absolute md:relative items-center  justify-center md:top-0 top-32 md:-right-40 right-4">
            <div className="">
              <Image src="/images/Ellipse28.png" 
              width={useSize.width > 768 ? 178 : 70}
              height={useSize.width > 768 ? 178 : 70}
              />
              <p className="text-white md:hidden absolute text-4xl bottom-6 right-0 text-shadow font-bold font-lexend">
                2
              </p>
            </div>
            <div className="font-bold font-lexend md:text-xl text-black md:my-4 my-2">
              Simith
            </div>
            <div
              className={`bg-gray-1 w-52 h-[20vh] rounded-[20px] border border-black border-b-4 border-r-4 md:flex hidden justify-center items-center `}
            >
              <p className="text-white text-6xl  text-shadow font-bold font-lexend">
                2
              </p>
            </div>
            <div className="bg-white border text-lg border-black border-b-4 border-r-4 w-52 h-12 text-black font-bold font-lexend rounded-[20px] md:flex hidden justify-center items-center mt-5">
              17 Win
            </div>
          </div>
        </div>
        <div className=" absolute md:-right-32 -right-12 md:-top-10 -top-50">
          <Image src="/images/Jumping.png"
          width={useSize.width > 768 ? 700 : 250}
          height={useSize.width > 768 ? 700 : 250}
          />
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
