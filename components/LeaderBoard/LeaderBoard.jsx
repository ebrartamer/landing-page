import Image from "next/image";
import React from "react";

const LeaderBoard = () => {
  return (
    <>
      <div className="flex justify-center items-center text-4xl drop-shadow-[2px_2px_rgba(0,0,0,1)] mb-20">
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
        <div className="bg-white h-[80vh] flex flex-row items-end pb-10 justify-center gap-24 absolute w-[68vw] border-4 border-black border-b-8 border-r-8 rounded-[20px]">
          <div className="flex flex-col  items-center justify-center ">
            <div>
              <Image src="/images/Ellipse26.png" height={172} width={172} />
            </div>
            <p className="font-bold font-lexend text-xl text-black my-4">
              Joseph
            </p>
            <div
              className={`bg-brown-1 w-52 h-[10vh] rounded-[20px] border border-black border-b-4 border-r-4 flex justify-center items-center `}
            >
              <p className="text-white  text-4xl  text-shadow font-bold font-lexend">
                3
              </p>
            </div>
            <div className="bg-white border border-black border-b-4 border-r-4 w-52 h-12 text-black font-bold font-lexend rounded-[20px] flex justify-center items-center mt-5 text-lg">
              13 Win
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center ">
            <div>
              <Image src="/images/Ellipse27.png" height={172} width={172} />
            </div>
            <div className="font-bold font-lexend text-2xl text-black my-4">
              Mark
            </div>
            <div
              className={`bg-yellow-2 w-52 h-[24vh] rounded-[20px] border border-black border-b-4 border-r-4 flex justify-center items-center `}
            >
              <p className="text-white  font-bold font-lexend  text-8xl  text-shadow">
                1
              </p>
            </div>

            <div className="bg-white border text-lg  border-black border-b-4 border-r-4 w-52 h-12 text-black font-bold font-lexend rounded-[20px] flex justify-center items-center mt-5">
              24 Win
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center ">
            <div>
              <Image src="/images/Ellipse28.png" height={172} width={172} />
            </div>
            <div className="font-bold font-lexend text-xl text-black my-4">
              Simith
            </div>
            <div
              className={`bg-gray-1 w-52 h-[20vh] rounded-[20px] border border-black border-b-4 border-r-4 flex justify-center items-center `}
            >
              <p className="text-white text-6xl  text-shadow font-bold font-lexend">
                2
              </p>
            </div>
            <div className="bg-white border text-lg border-black border-b-4 border-r-4 w-52 h-12 text-black font-bold font-lexend rounded-[20px] flex justify-center items-center mt-5">
              17 Win
            </div>
          </div>
        </div>
        <div className=" absolute -right-32 -top-10">
          <Image src="/images/Jumping.png" width={700} height={700} />
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
