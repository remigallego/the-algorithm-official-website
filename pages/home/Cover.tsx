import Image from "next/image";
import React, { FunctionComponent, useRef } from "react";
import AnimatedMovement from "../../components/AnimatedMovement";
import {
  LARGE_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  SMALL_BREAKPOINT,
} from "../../vars";
import DataRenaissanceCover from "../../public/images/releases/datarenaissance.jpg";
interface Props {
  children?: React.ReactNode;
  showLogo: boolean;
}

const Cover: FunctionComponent<Props> = (props) => {
  const showLogo = props.showLogo;
  const ref = useRef(null);

  return (
    <div className={"cover-container"} ref={ref}>
      {showLogo && (
        <div
          className="slide-and-fade-animation"
          style={{
            position: "absolute",
          }}
        >
          <img
            src="/images/logowhite.png"
            alt="Algorithm Logo"
            className={"logo-white-container"}
          />
        </div>
      )}
      <div className="slide-and-fade-animation">
        <AnimatedMovement key={"logo"} xOffset={3} yOffset={7}>
          <div
            className="cover"
            style={{
              transformStyle: "preserve-3d",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={DataRenaissanceCover}
              layout="fill"
              priority={true}
              style={{
                borderRadius: 10,
              }}
            />
            <div className="texture" />
          </div>
        </AnimatedMovement>
      </div>
      <style jsx>
        {`
          .cover-container {
            margin-top: 26px;
            height: 80vw;
            perspective: 600px;
            width: 80vw;
          }
          .cover {
            overflow: hidden;
            box-sizing: border-box;
            border-radius: 5px;
            animation-name: rotate;
            animation-duration: 4s;
            animation-timing-function: cubic-bezier(0.1, 0.7, 0.1, 1);
            animation-iteration-count: infinite;
          }
          .texture {
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 100%;
            animation-name: texture;
            animation-duration: 4s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;

            background-image: linear-gradient(
              -80deg,
              hsla(0, 0%, 100%, 0.3) 25%,
              hsla(0, 0%, 100%, 0) 45%
            );
          }
          .logo-white-container {
            position: absolute;
            display: none;
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

          @keyframes rotate {
            from,
            to {
              animation-timing-function: ease-in;
              box-shadow: 0 0 0 hsl(0, 0%, 80%), 0.1rem 0 0 hsl(0, 0%, 100%),
                -0.2rem 0 0.75rem 0 hsla(0, 0%, 0%, 0.3);
              transform: rotateY(-7deg) rotateZ(1deg) rotateX(-5deg);
            }
            25%,
            75% {
              animation-timing-function: ease-out;
              box-shadow: 0 0 0 hsl(0, 0%, 80%), 0 0 0 hsl(0, 0%, 100%),
                -0.25rem -0.05rem 1rem 0.15rem hsla(0, 0%, 0%, 0.3);
              transform: rotateY(0deg) rotateZ(0deg) rotateX(0deg);
            }
            50% {
              animation-timing-function: ease-in;
              box-shadow: -0.1rem 0 0 hsl(0, 0%, 80%), 0 0 0 hsl(0, 0%, 100%),
                -0.3rem -0.1rem 1.5rem 0.3rem hsla(0, 0%, 0%, 0.3);
              transform: rotateY(7deg) rotateZ(-1deg) rotateX(2deg);
            }
          }
          @keyframes texture {
            from,
            to {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(-50%, 0, 0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Cover;
