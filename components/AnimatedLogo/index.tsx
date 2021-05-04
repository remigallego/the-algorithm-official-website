import React, { FunctionComponent, useState } from "react";
import math from "../../utils/math";
import LogoSvg from "./LogoSvg";

interface Props {}

const AnimatedLogo: FunctionComponent<Props> = () => {
  const [dashArray] = useState(90);
  const [randomNumber] = useState(math.randomInteger(0, 2));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "relative",
      }}
    >
      <LogoSvg
        key={"red"}
        animatedXOffset={2.1}
        animatedYOffset={3.4}
        color={"#ff0404"}
        delay={0}
        mouseWeight={0.09}
        style={{ width: "86%" }}
      />
      <LogoSvg
        key={"blue"}
        animatedXOffset={-4.5}
        animatedYOffset={10.9}
        color={"#0443ff"}
        mouseWeight={0.08}
        delay={240}
        style={{ width: "90%" }}
      />
      <LogoSvg
        key={"green"}
        animatedXOffset={4.1}
        animatedYOffset={-8}
        color={"#04ff08"}
        mouseWeight={0.05}
        delay={380}
        style={{ width: "93%" }}
      />
      <LogoSvg
        key={"#ffff66"}
        animatedXOffset={-10.8}
        animatedYOffset={-7.7}
        color="yellow"
        delay={580}
        mouseWeight={0.04}
        style={{ width: "95%" }}
      />
      <style jsx>{`
        /* @keyframes duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name 
animation: anim        3s        ease-in           1s        2                reverse     both       paused       slidein;

        */

        .path {
          stroke-dasharray: ${dashArray};
          animation: dash 9999s infinite linear, width 3s infinite alternate,
            color 100ms infinite alternate, dashArray 10s, fill 1400ms;
        }
        .path-green {
          transform: translate(7px);
           {
            /*   opacity: ${randomNumber === 0 ? 1 : 0.6}; */
          }
        }
        .path-red {
          transform: translate(2px);
           {
            /*  opacity: ${randomNumber === 1 ? 1 : 0.6}; */
          }
        }
        .path-blue {
           {
            /*  opacity: ${randomNumber === 2 ? 1 : 0.6}; */
          }
        }

        @keyframes fill {
          0% {
            fill: rgba(108, 207, 2, 0);
          }
          100% {
            fill: rgba(22, 22, 22, 0);
          }
        }

        @keyframes dashArray {
          0% {
            stroke-dasharray: ${15 * math.randomInteger(0, 1)};
            stroke-dashoffset: 1111;
          }
          10% {
            stroke-dashoffset: 111;
          }
          100% {
            stroke-dasharray: ${dashArray};
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 3200000;
          }
        }

        @keyframes dasharray {
          to {
            stroke-dasharray: 30;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedLogo;
