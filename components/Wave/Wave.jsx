
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
            
        }}
>
           <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "200vh",
            left: "0",
            zIndex: "-1",
          }}
        >
     
          <div
            style={{
              width: "100%",
              height: "40%",
              backgroundColor: backgroundColor,
            }}
          ></div>
           
          <svg viewBox="0 0 500 500" preserveAspectRatio="none">
            <path
              d="M 0 30  C 200 100 280 0 500 30 L 1500 0 L 0 0 Z "
              fill={backgroundColor}
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
        <div className="mt-[10vh]">
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
        
              left: "0",
              zIndex: "-1",

              transform: "rotate(180deg)",
            
             
              top: "100vh",
            }}
          >
            <svg viewBox="0 0 500 500" preserveAspectRatio="none">
              <path
                d="M 0 30  C 200 100 280 0 500 30 L 500 0 L 0 0 Z "
                fill=   {backgroundColor}
              ></path>
            </svg>
          </div>
        </div>
 </div>
  );
};

export default Wave;
