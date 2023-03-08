import { animated, useSpring } from "@react-spring/web";
import React, { FunctionComponent, useEffect, useState } from "react";
import useTimeout from "../../hooks/useTimeout";
import randomInteger from "../../utils/math";
import AnimatedMovement from "../AnimatedMovement";
import dataPath from "./dataPath";

interface Props {
  color: string;
  animatedXOffset: number;
  animatedYOffset: number;
  delay: number;
  mouseWeight: number;
  children?: React.ReactNode;
  style: React.CSSProperties;
  pressed: boolean;
  shouldFadeAt: number;
}

const LogoSvg: FunctionComponent<Props> = (props) => {
  const [style] = useSpring(() => ({
    x: 0,
    y: 0,
  }));

  const [flip, setFlip] = useState(props.pressed);
  const [resetScale] = useState(false);
  const [style2, animatedStroke2] = useSpring(() => ({}));
  const [shouldFade, setShouldFade] = useState(true);

  useTimeout(() => {
    setShouldFade(false);
  }, 0);

  useTimeout(() => {
    setShouldFade(true);
  }, props.shouldFadeAt);

  const animatedStroke = useSpring({
    strokeDasharray: randomInteger(650, 900),
    strokeDashoffset: 1,
    config: {
      duration: 454,
    },
  });

  useEffect(() => {
    setFlip(!flip);
    if (!props.pressed) {
      animatedStroke2.start({
        from: {
          strokeDasharray: randomInteger(200, 900),
        },
        to: {
          strokeDasharray: randomInteger(40, 100),
        },
        loop: { reverse: true },
        config: {
          friction: 170,
          clamp: true,
          precision: 0.001,
        },
      });
    } else {
      animatedStroke2.start({
        from: {
          strokeDasharray: randomInteger(10, 20),
        },
        to: {
          strokeDasharray: randomInteger(650, 900),
        },
        loop: { reverse: true },
        /*  {
          friction: 144,
          clamp: true,
          precision: 0.001
        } */
        config: {
          mass: 20,
          tension: 35,
          friction: 40,
          clamp: true,
          precision: 0.001,
        },
      });
    }
  }, [props.pressed]);

  const animatedScale =
    randomInteger(0, 1) === 1
      ? useSpring({
          from: {
            "transform-origin": "center",
            transform: "scale(1.02)",
          },
          to: {
            "transform-origin": "center",
            transform: "scale(0.90)",
          },
          loop: { reverse: true, delay: 3000 },
          config: { tension: 100 },
          delay: props.delay * 0.2,
          reset: resetScale,
        })
      : useSpring({
          from: {
            "transform-origin": "center",
            transform: "scale(0.94)",
          },
          to: {
            "transform-origin": "center",
            transform: "scale(1)",
          },
          loop: { reverse: true, delay: 3000 },
          config: { tension: 100 },
          delay: props.delay * 0.2,
          reset: resetScale,
        });

  return (
    <div
      className="animations"
      style={{
        position: "absolute",
        height: "100%",
        boxSizing: "border-box",
        width: "90%",
        transition: "opacity 0.5s ease-in-out",
        opacity: shouldFade ? 0 : 1,
        ...props.style,
      }}
    >
      <AnimatedMovement
        xOffset={props.animatedXOffset}
        yOffset={props.animatedYOffset}
      >
        <animated.svg
          id="logo"
          viewBox="0 0 628 414.3"
          fill="none"
          style={{
            marginTop: -60,
            ...style,
          }}
        >
          <animated.path
            d={dataPath}
            stroke={props.color}
            strokeWidth={2}
            strokeLinejoin="round"
            strokeDashoffset={0}
            className={"animations"}
            style={{
              ...animatedStroke,
              ...style2,
              ...animatedScale,
              // ...(!flip ? rotate : {}),
            }}
          />
        </animated.svg>
      </AnimatedMovement>
      <style jsx>{`
         {
          animation: fadeIn 1s;
          path {
             {
              /* transform-origin: center;
            transform: scale(0);
            transition: stroke-dashoffset 0.5s ease-in-out; */
            }
          }
        }

        .animations {
          animation: scaleLoop 8s 3.5s cubic-bezier(0.2, 0.14, 0, 1.1) infinite;
        }

        @keyframes scale {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        @keyframes scaleLoop {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(0.98);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
          }
        }
     
      `}</style>
    </div>
  );
};

export default LogoSvg;
