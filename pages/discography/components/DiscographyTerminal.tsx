import React, { FunctionComponent, useEffect, useState } from "react";
import FadeIn from "../../../components/Animations/FadeIn";
import { Release } from "../../../releases";

interface Props {
  album: Release;
  handleClose: () => void;
}

const DiscographyTerminal: FunctionComponent<Props> = ({
  album,
  handleClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // listen for esc key
      if (e.key === "Escape") {
        handleCloseAnimation();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleCloseAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      handleClose();
    }, 1200);
  };

  return (
    <>
      <div className="absolute">
        <div className={`${isClosing && "terminal-close-animation"}`}>
          <div className="terminal-container">
            <div className="terminal-header">
              <div className="terminal-padding">
                <p className="terminal-title" style={{ color: "white" }}></p>
              </div>
              <div className="close-button" onClick={handleCloseAnimation}>
                X
              </div>
            </div>
            <div className="terminal-content terminal-padding">
              <FadeIn
                delay={0.4}
                disableBlink
                lines={[
                  `${album.name}`,
                  `${album.date}`,
                  `-----------------------------------`,
                  ...album.tracklist.map((e, idx) => `${idx}. ${e}`),
                  `-----------------------------------`,
                  "LISTEN ----------->",
                  "BUY ----------->",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="black" onClick={handleCloseAnimation} />
      <style jsx>
        {`
          .terminal-container {
            border-radius: 6px;
            width: 70vw;
            overflow: hidden;
            box-shadow: 5px 5px 0px rgba(2, 240, 125, 0);
            animation: boxShadow 0.5s 0.6s ease-in-out forwards,
              ${isClosing && "boxShadow 0.5s ease-in-out forwards reverse"};
          }
          .black {
            background-color: black;
            z-index: --;
            position: absolute;
            top: 0;
            opacity: 0.5;
            height: 100vh;
            width: 100vw;
            animation: overlay 0.4s forwards,
              ${isClosing && "overlay 0.4s 0.8s forwards reverse"};
          }
          .close-button {
            font-size: 26px;
            font-family: "SourceCodePro";
            font-weight: bold;
            color: #ed0a3f;
            transform: scaleX(1.4);
            transition: color 0.13s;
            position: absolute;
            right: 20px;
            opacity: 0;
            animation: 0.3s 0.8s fadeIn forwards,
              ${isClosing && "0.2s fadeIn forwards reverse"};
            top: 7px;
          }
          .close-button:hover {
            color: white;
            cursor: pointer;
          }

          .terminal-title {
            font-size: 18px;
            font-family: "SourceCodePro";
            font-weight: bold;
            color: #11f24a;
          }

          .terminal-date {
            font-size: 18px;
            font-weight: 400;
            font-family: "SourceCodePro";
            color: #11f24a;
          }

          .terminal-font-light {
            font-size: 18px;
            font-family: "SourceCodePro";
            font-weight: lighter;
            color: #11f24a;
          }

          .terminal-header {
            box-sizing: content-box;
            border: 1px solid #11f24a;
            height: 1px;
            z-index: 2;
            position: relative;
            opacity: 0;
            background-color: #11f24a;
            animation: terminalHeader 0.35s ease-in-out forwards,
              0.3s 0.35s terminalHeaderHeight forwards,
              ${isClosing &&
              "terminalHeader 0.35s 0.3s ease-in-out forwards reverse"},
              ${isClosing && "0.3s terminalHeaderHeight forwards reverse"};
          }

          .terminal-content {
            animation: terminalContentHeight 0.6s 0.35s
                cubic-bezier(0.19, 1, 0.22, 1) forwards,
              ${isClosing &&
              "terminalContentHeight 0.6s 0.35s cubic-bezier(0.19, 1, 0.22, 1) forwards reverse"};
            z-index: -2;
            opacity: 0;
            height: auto;
            position: relative;
            overflow: hidden;
            transform: translateY(-100%);
            background-color: black;
            padding: 20px 20px 80px;
          }

          .absolute {
            position: absolute;
            top: 30%;
            z-index: 1;
            left: 50%;
            transform: translateY(-50%);
            transform: translateX(-50%);
          }

          .opening-line {
            width: 50vw;
            height: 20px;
            background-color: #11f24a;
          }

          @keyframes terminalHeader {
            0% {
              opacity: 0;
              width: 0px;
            }

            100% {
              opacity: 1;
              width: 100%;
            }
          }

          @keyframes terminalHeaderHeight {
            0% {
              height: 1px;
            }
            100% {
              height: 40px;
            }
          }

          @keyframes terminalContentHeight {
            0% {
              transform: translateY(-400%);
              opacity: 0;
            }

            100% {
              transform: translateY(0%);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default DiscographyTerminal;
