"use client";
import Download from "@/components/Download/Download";
import Header from "@/components/Header/Header";
import HomeComp from "@/components/Home/Home";
import Info from "@/components/Info/Info";
import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import Partners from "@/components/Partners/Partners";
import Play from "@/components/Play/Play";
import Slider from "@/components/Slider/Slider";
import useWindowSize from "@/hooks/useWindowSize";
import Animation from "@/components/Animation/Animation";

import Wave from "@/components/Wave/Wave";
import NFTs from "@/components/NFTs/NFTs";

export default function Home() {
  const useSize = useWindowSize();
  return (
    <div className=" w-full overflow-hidden">
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
        >
          <div className="w-full md:h-[80%] h-[54%] bg-[#FF68B5]"></div>
          <svg
          style={
            {
              stroke: 'black',
              strokeWidth: '2px',
              fillOpacity: '1',
            }
          } viewBox="0 0 500 500" preserveAspectRatio="none">
            <path
              d="M 0 30  C 200 100 280 0 500 30 L 1500 0 L 0 0 Z "
              fill="#FF68B5"
              // fill: none;
              // stroke: #646464;
              // stroke-width: 1px;
              // stroke-dasharray: 2,2;
              // stroke-linejoin: round;

              // stroke="black"
              // strokeWidth="1px"
            ></path>
          </svg>
        </div>

        <Header />
      </div>

      <section>
        <div className="md:mt-[120vh] mt-[75vh] w-full">
          <Animation>
            <HomeComp />
          </Animation>
        </div>
      </section>

      <section>
        <div className="mt-[40vh]   w-auto">
          <Wave 
          top={useSize.width > 768 ? "370vh" : "150vh"}
          backgroundColor={"#FF6B6B"}
  />
            <Animation>
            <Slider />
          </Animation>
        </div>
      </section>

      <section>
        <div className="md:mt-[40vh] mt-[20vh]">
        <Wave 
          top={useSize.width > 768 ? "370vh" : "300vh"}
          backgroundColor={"#C550F7"}
  />
          <Wave 
          top={useSize.width > 768 ? "530vh" : "400vh"}
          backgroundColor={"#69D3E8"}
  />
          <Animation>
            <Download />
          </Animation>
        </div>
      </section>

      <section>
        <div className="md:mt-[40vh] mt-[25vh]">
          <Animation>
            {" "}
            <LeaderBoard />
          </Animation>
        </div>
      </section>

      <section>
        <div className="mt-[20vh]">

          <Animation>
            <Play />
          </Animation>
        </div>
      </section>

      <section>
        <div className="mt-[20vh]">
          <Animation>
            <Info />
          </Animation>
        </div>
      </section>

      <section>
        <div className="mt-[20vh]">
          <Animation>
            <NFTs />
          </Animation>{" "}
        </div>
      </section> 

      <section>
        <div className="mt-[10vh]">
          <Animation>
            <Partners />
          </Animation>
        </div>
      </section>

      <section>
        <div className="md:mt-[10vh] mt-0">
          <div
          className="md:top-[970vh] top-[620vh] "
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: "0",
              zIndex: "-1",

              transform: "rotate(180deg)",
            }}
          >
            <svg
            stroke="black"
            strokeWidth="1px"
            viewBox="0 0 500 500" preserveAspectRatio="none">
              <path
                d="M 0 30  C 200 100 280 0 500 30 L 500 0 L 0 0 Z "
                fill="#FF68B5"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
