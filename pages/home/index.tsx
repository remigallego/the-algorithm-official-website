import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import FadeInBlink from "../../components/Animations/FadeInBlink";
import HomeTerminal from "../../components/HomeTerminal";
import useTimeout from "../../hooks/useTimeout";
import useWindowSize from "../../hooks/useWindowSize";
import {
  HEADER_HEIGHT,
  LARGE_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  SMALL_BREAKPOINT,
} from "../../vars";
import Cover from "./Cover";

const IndexPage: NextPage = () => {
  const [showLogo, setShowLogo] = useState(false);
  const windowSize = useWindowSize();
  const ref = useRef(null);

  useEffect(() => {}, []);

  useTimeout(() => {
    setShowLogo(true);
  }, 800);

  return (
    <div ref={ref} className="container" onMouseMove={() => {}}>
      <div className="terminal-container">
        <FadeInBlink delay={0.2}>
          <HomeTerminal lines={["NEW ALBUM OUT NOW", "DATA RENAISSANCE"]} />
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

      <Cover showLogo={showLogo} />

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
        .terminal-container {
          width: 80vw;
        }

        /* Animation */

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
