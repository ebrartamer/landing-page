import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <div className="relative">
      <Image
        className="absolute"
        src="/images/Vector13.png"
        width={5000}
        height={500}
      />
      <div className="flex justify-center items-center">
        <div className="absolute w-[42vw] h-[25vh] flex-row justify-center items-center bg-white border-4  border-black border-b-4 border-r-4 rounded-[20px] p-1">
          <div className="flex flex-start p-5">
            <div className="bg-red-1 rounded-full w-5 h-5 m-1"></div>
            <div className="bg-orange-2 rounded-full w-5 h-5 m-1"></div>
            <div className="bg-green-1 rounded-full w-5 h-5 m-1"></div>
          </div>
          <div className="text-2xl font-bold font-lexend text-black ml-2">
            Coming soon to
          </div>
          <div className="flex flex-row justify-center items-center mt-3">
            <button className="bg-green-1 text-black border-2 font-bold font-lexend rounded-tl-[20px] rounded-br-[20px]  border border-black border-b-4 border-r-4 text-2xl p-2 px-8 mx-2">
              App Store
            </button>
            <p className="font-lexend text-black font-bold text-2xl">&</p>
            <button className="bg-green-1 text-black font-bold font-lexend rounded-tl-[20px] rounded-br-[20px]  border border-black border-b-4 border-r-4 text-2xl p-2 px-8 mx-2">
              Google Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
