import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { FunctionComponent, useEffect } from "react";
import useMediaQueries from "../hooks/useMediaQueries";

interface Props {
  children?: React.ReactNode;
  pageNumber: string;
  title: string;
}

const CategoryLayout: FunctionComponent<Props> = ({
  children,
  pageNumber,
  title,
}) => {
  const [styleArrow, animateArrow] = useSpring(() => ({}));

  const { extraBigScreen, bigScreen, smallScreen } = useMediaQueries();

  const marginHorizontal = (() => {
    if (bigScreen || extraBigScreen) return 150;
    if (smallScreen) return 20;
    return 40;
  })();

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

  const renderDesignOrnements = () => {
    return (
      <>
        {bigScreen && (
          <div>
            <h1 className="bold-text headline number">{pageNumber}</h1>
          </div>
        )}
        {!smallScreen && (
          <img src="./images/line.svg" className="line antislash" />
        )}
        {extraBigScreen && (
          <img src="./images/line.svg" className="line line-right" />
        )}
        {!smallScreen && (
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
        )}
        {!smallScreen && (
          <div className="arrow-down">
            <animated.img
              src="./images/arrowDown.svg"
              style={{ ...styleArrow }}
            />
          </div>
        )}
        <style jsx>{`
          .line {
            position: absolute;
          }
          .line-right {
            right: 150px;
            transform: rotate(60deg);
          }
          .number {
            position: fixed;
            top: 50%;
            left: 0;
            font-size: 250px;
            -webkit-transform: rotate(90deg) translateY(75%) translateX(-40%);
            transform: rotate(90deg) translateY(75%) translateX(-40%);
          }
          .arrow-down {
            position: absolute;
            left: ${marginHorizontal - 25}px;
            top: 425px; // 300 height of arc + 100 header height + 100 margin
            animation: arrowDown 1000ms infinite;
          }
          .upper-arc {
            height: 300px;
          }
        `}</style>
      </>
    );
  };

  return (
    <>
      <div className="content">
        {renderDesignOrnements()}
        <div className={`${!smallScreen && "large-screen-margins"}`}>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <h1 className="bold-text headline title">{title}</h1>
          </div>
          {children}
        </div>
      </div>
      <style jsx>{`
        .title {
          font-size: ${`${smallScreen ? 32 : 64}px`};
        }
        .content {
          margin: 20px ${marginHorizontal}px;
        }
        .large-screen-margins {
          margin-top: -150px;
          margin-left: 80px;
        }
      `}</style>
    </>
  );
};

export default CategoryLayout;
