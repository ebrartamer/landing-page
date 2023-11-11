import React from "react";

const Wave = ({ top, backgroundColor }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: top,
        left: "0",
        zIndex: "-1",
      }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "200vh",
          left: "0",
          zIndex: "10",
        }}>
        <div
          style={{
            width: "100%",
            height: "60%",
            
            backgroundColor: backgroundColor,
            zIndex: "10",
          }}></div>
        {/* 
        <svg viewBox="0 0 500 500" preserveAspectRatio="none">
          <path
            d="M 0 30  C 200 100 280 0 900 80 L 1500 0 L 0 0 Z M 0 30  C 200 100 280 0 900 80 L 1500 0 L 0 0 Z  "
            fill={backgroundColor}
            // fill: none;
            // stroke: #646464;
            // stroke-width: 1px;
            // stroke-dasharray: 2,2;
            // stroke-linejoin: round;

            // stroke="black"
            // strokeWidth="1px"
          ></path>
        </svg> */}
       <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",

            left: "0",
            zIndex: "-1",

          
            top: "0vh",
            rotate: "180deg"
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill={backgroundColor}
              stroke="black"
                stroke-width="3px"
            
              fill-opacity="1"
                transform="rotate(180deg)"
              d="M0,160L34.3,165.3C68.6,171,137,181,206,165.3C274.3,149,343,107,411,90.7C480,75,549,85,617,122.7C685.7,160,754,224,823,229.3C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,192C1302.9,192,1371,160,1406,144L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <div className="mt-[10vh]">
      <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",

            left: "0",
            zIndex: "-1",

          
            top: "160vh",
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill={backgroundColor}
              stroke="black"
                stroke-width="3px"
            
              fill-opacity="1"
              d="M0,160L34.3,165.3C68.6,171,137,181,206,165.3C274.3,149,343,107,411,90.7C480,75,549,85,617,122.7C685.7,160,754,224,823,229.3C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,192C1302.9,192,1371,160,1406,144L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Wave;
