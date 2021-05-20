import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { FunctionComponent, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  children?: React.ReactNode;
  pageNumber: string;
}

const CategoryLayout: FunctionComponent<Props> = ({ children, pageNumber }) => {
  const [styleArrow, animateArrow] = useSpring(() => ({}));
  const extraBigScreen = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const bigScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const mediumScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const smallScreen = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const marginHorizontal = bigScreen || extraBigScreen ? 150 : 40;

  useEffect(() => {
    animateArrow({
      from: {
        y: 0,
      },
      to: {
        y: 1,
      },
      loop: {
        config: {
          tension: 180,
          friction: 12,
          velocity: 0.35,
        },
        reverse: true,
      },
    });
  }, []);

  return (
    <>
      <div className="content">
        {bigScreen && (
          <div>
            <h1 className="bold-text headline number">{pageNumber}</h1>
          </div>
        )}
        <img src="./images/line.svg" className="line" />
        {extraBigScreen && (
          <img src="./images/line.svg" className="line line-right" />
        )}

        {/*      {!smallScreen && (
          <img src="./images/upperArc.svg" className="upper-arc" />
        )} */}

        <svg
          className="upper-arc"
          id="upper-bow-final"
          width="658"
          height="269"
          viewBox="0 0 658 269"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M655.5 2H603.279L537 43H39.5L2 66.5V267"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          ></path>
        </svg>
        <h1 className="bold-text back-text">{`< BACK`}</h1>
        <div className="arrow-down">
          <animated.img
            src="./images/arrowDown.svg"
            style={{ ...styleArrow }}
          />
        </div>
        {children}
      </div>
      <style jsx>{`
        .line {
          position: absolute;
        }
        .line-right {
          right: 150px;
          transform: rotate(60deg);
        }
        .back-text {
          position: absolute;
          top: 195px;
          margin-left: 10px;
          font-size: 16px;
        }
        .upper-arc {
          height: 300px;
          stroke-dasharray: 50;
          animation: strokeDashArray 5s;
        }
        .arrow-down {
          position: absolute;
          left: ${marginHorizontal - 25}px;
          top: 505px; // 300 height of arc + 100 header height + 100 margin
          animation: arrowDown 1000ms infinite;
        }
        .content {
          margin: 100px ${marginHorizontal}px;
        }
        .number {
          position: fixed;
          top: 50%;
          left: 0;
          font-size: 250px;
          -webkit-transform: rotate(90deg) translateY(75%) translateX(-40%);
          transform: rotate(90deg) translateY(75%) translateX(-40%);
        }
        @keyframes strokeDashArray {
          from {
            stroke-dashoffset: 1;
          }
          to {
            stroke-dashoffset: 1000;
          }
        }
      `}</style>
    </>
  );
};

export default CategoryLayout;
