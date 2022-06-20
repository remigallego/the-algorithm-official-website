import { NextPage } from "next";
import Image from "next/image";
import React, { useRef, useState } from "react";
import AnimatedMovement from "../../components/AnimatedMovement";
import FadeInBlink from "../../components/Animations/FadeInBlink";
import Terminal from "../../components/Terminal";
import useTimeout from "../../hooks/useTimeout";
import useWindowSize from "../../hooks/useWindowSize";
import {
  HEADER_HEIGHT,
  LARGE_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  SMALL_BREAKPOINT,
} from "../../vars";

const IndexPage: NextPage = () => {
  const [showLogo, setShowLogo] = useState(false);
  const windowSize = useWindowSize();
  const ref = useRef(null);

  useTimeout(() => {
    setShowLogo(true);
  }, 800);

  return (
    <div ref={ref} className="container" onMouseMove={() => {}}>
      <div className="terminal-container">
        <FadeInBlink delay={0.2}>
          <Terminal lines={["NEW ALBUM OUT NOW", "DATA RENAISSANCE"]} />
          {(windowSize.width || 0) >= MEDIUM_BREAKPOINT && (
            <>
              {" "}
              <div
                style={{
                  position: "absolute",
                }}
              >
                <div className={"listen-container slide-and-fade-animation"}>
                  <p className={"bold-text"}>listen</p>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  marginTop: 48,
                }}
              >
                <div
                  className={"listen-container blue slide-and-fade-animation"}
                >
                  <p className={"bold-text"}>buy</p>
                </div>
              </div>
            </>
          )}
        </FadeInBlink>
      </div>

      <div className={"cover-container"}>
        {showLogo && (
          <div
            className="slide-and-fade-animation"
            style={{
              position: "absolute",
            }}
          >
            {/* TODO: AnimatedMovement is broken, keyframes anim are global for some reason */}
            <AnimatedMovement key={"logo"} xOffset={3} yOffset={7}>
              <img
                src="/images/logowhite.png"
                alt="Algorithm Logo"
                className={"logo-white-container"}
              />
            </AnimatedMovement>
          </div>
        )}
        <div className="slide-and-fade-animation">
          <AnimatedMovement key={"cover"} xOffset={3} yOffset={7}>
            <div
              className="cover"
              style={{
                transformStyle: "preserve-3d",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={"/images/releases/datarenaissance.jpg"}
                layout="fill"
                style={{
                  borderRadius: 10,
                }}
              />
            </div>
          </AnimatedMovement>
        </div>
      </div>

      <div>
        {(windowSize.width || 0) < MEDIUM_BREAKPOINT && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 20,
              width: "80%",
              height: 30,
            }}
          >
            <FadeInBlink delay={0.4}>
              <div
                className={"listen-container slide-and-fade-animation"}
                style={{
                  width: "60%",
                  marginRight: 20,
                  position: "relative",
                }}
              >
                <p className={"bold-text"}>listen</p>
              </div>
              <div
                className={"listen-container blue slide-and-fade-animation"}
                style={{
                  width: "60%",
                  position: "relative",
                }}
              >
                <p className={"bold-text"}>buy</p>
              </div>
            </FadeInBlink>
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          transform: translateY(-30px);
          box-sizing: border-box;
          height: ${(windowSize.height || 0) - HEADER_HEIGHT}px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
        .cover-container {
          margin-top: 26px;
          height: 80vw;
          width: 80vw;
        }

        p {
          color: white;
        }
        .listen-container {
          background-color: #11f24a;
          animation: 0.3s gentleblink infinite;
          box-shadow: 5px 5px 0px rgb(2, 240, 125);
          padding: 3px 20px;
          border-radius: 3px;
          transition: animation 0.2s;
          cursor: pointer;
          position: absolute;
        }
        .blue {
          background-color: rgb(2, 184, 240);
          box-shadow: 5px 5px 0px rgb(2, 161, 240);
        }
        .white {
          background-color: rgb(255, 255, 255);
          box-shadow: 5px 5px 0px rgb(255, 255, 255);
          color: black;
        }
        .listen-container:hover {
          animation: 0.1s gentleblink infinite;
        }

        .logo-white-container {
          position: absolute;
          display: none;
        }
        .terminal-container {
          width: 80vw;
        }

        .cover {
          overflow: hidden;
          box-sizing: border-box;
          border-radius: 5px;
        }
        .cover:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          box-shadow: 0px 2px 522px rgba(255, 255, 255, 0.8);
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.4) 77%,
            rgba(255, 255, 255, 0.8) 92%,
            rgba(255, 255, 255, 0) 100%
          );
          width: 200%;
          transform: rotateZ(45deg) translateY(200px);
          height: 100px;
          z-index: 20;
          animation: 9s shine infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
          opacity: 0.2;
        }
        @keyframes shine {
          0% {
            transform: rotateZ(48deg) translateY(1200px);
            opacity: 0.1;
          }
          14% {
            opacity: 0.2;
          }
          20% {
            transform: rotateZ(38deg) translateY(-400px);
            opacity: 0.1;
          }
          100% {
            transform: rotateZ(42deg) translateY(-400px);
            opacity: 0.1;
          }
        }

        @media (min-width: ${SMALL_BREAKPOINT}px) {
          .cover-container {
            transform: translate(0%, -2%);
            width: 70vw;
            height: 70vw;
          }
        }
        @media (min-width: ${MEDIUM_BREAKPOINT}px) {
          .container {
            margin-top: 0px;
          }
          .cover-container {
            height: ${MEDIUM_BREAKPOINT * 0.6}px;
            width: ${MEDIUM_BREAKPOINT * 0.6}px;
            transform: translate(44%, 0%);
          }
          .container {
            justify-content: center;
          }
          .terminal-container {
            width: 40%;
            transform: translate(-20vw, -70%);
            position: absolute;
          }
          .logo-white-container {
            transform: translate(-50%, 83%);
            height: 260px;
            display: inline-block;
          }
          .listen-container {
            position: absolute;
            transform: translate(0vw, 80%);
            display: block;
          }
        }

        @media (min-width: ${LARGE_BREAKPOINT}px) {
          .terminal-container {
            width: 50%;
            transform: translate(-20%, -100%);
            position: absolute;
          }
          .cover-container {
            height: ${MEDIUM_BREAKPOINT * 0.7}px;
            width: ${MEDIUM_BREAKPOINT * 0.7}px;
            transform: translate(50%, 0%);
          }
          .logo-white-container {
            transform: translate(-50%, 103%);
            height: 320px;
          }
          .listen-container {
            position: absolute;
            transform: translate(0vw, 80%);
          }
          .blue {
            margin-top: 8px;
          }
          p {
            font-size: 36px;
          }
        }

        @keyframes gentleblink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
