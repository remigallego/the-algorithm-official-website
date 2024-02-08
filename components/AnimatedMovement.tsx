import React, { FunctionComponent } from "react";

interface Props {
  xOffset: number;
  yOffset: number;
  key?: string;
}

const AnimatedMovement: FunctionComponent<Props> = (props) => {
  return (
    <div
      key={props.key}
      className="transformY"
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        zIndex: -22,
      }}
    >
      <div className="transformX">{props.children}</div>

      <style jsx>
        {`
          div {
          }
          .transformX {
            width: 100%;
            height: 100%;
            animation: movementX 4s ease-in-out alternate forwards infinite;
          }
          .transformY {
            animation: movementY 18s ease-in-out 0.2s alternate forwards
              infinite;
          }

          @keyframes movementX {
            0% {
              transform: translateX(0px) skewX(0deg);
            }
            50% {
              transform: translateX(${props.xOffset}px)
                skewX(${props.xOffset / 10}deg);
            }
            100% {
              transform: translateX(-${props.xOffset}px) skewX(0deg);
            }
          }
          @keyframes movementY {
            0% {
              transform: translateY(0px) skewY(0deg);
            }
            50% {
              transform: translateY(${props.yOffset}px)
                skewY(${props.yOffset / 10}deg);
            }
            100% {
              transform: translateY(-${props.yOffset}px) skewY(0deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedMovement;
