"use client";
import Download from "@/components/Download/Download";
import Header from "@/components/Header/Header";
import HomeComp from "@/components/Home/Home";
import Info from "@/components/Info/Info";
import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import NFTs from "@/components/NFTs/NFTs";
import Partners from "@/components/Partners/Partners";
import Play from "@/components/Play/Play";
import Slider from "@/components/Slider/Slider";

import Animation from "@/components/Animation/Animation";

import Wave from "@/components/Wave/Wave";

export default function Home() {
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
          <div
            style={{
              width: "100%",
              height: "80%",
              backgroundColor: "#FF68B5",
            }}
          ></div>
          <svg viewBox="0 0 500 500" preserveAspectRatio="none">
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
        <div className="mt-[120vh] w-full">
          <Animation>
            <HomeComp />
          </Animation>
        </div>
      </section>

      <section>
        <div className="mt-[40vh]   w-auto">
          <Wave 
          top={"200vh"}
          backgroundColor={"blue"}
  />
            <Animation>
            <Slider />
          </Animation>
        </div>
      </section>

      <section>
        <div className="mt-[40vh]">
          <Animation>
            <Download />
          </Animation>
        </div>
      </section>

      <section>
        <div className="mt-[40vh]">
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

      {/* <section>
        <div className="mt-[20vh]">
          <Animation>
            <NFTs />
          </Animation>{" "}
        </div>
      </section> */}

      <section>
        <div className="mt-[10vh]">
          <Animation>
            <Partners />
          </Animation>
        </div>
      </section>

      <section>
        <div className="mt-[10vh]">
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "860vh",
              left: "0",
              zIndex: "-1",

              transform: "rotate(180deg)",
            }}
          >
            <svg viewBox="0 0 500 500" preserveAspectRatio="none">
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
