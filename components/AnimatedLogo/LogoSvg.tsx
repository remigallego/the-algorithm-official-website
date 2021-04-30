import { animated, useSpring } from "@react-spring/web";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { MouseContext } from "../../pages";
import AnimatedMovement from "../AnimatedMovement";

interface Props {
  color: string;
  animatedXOffset: number;
  animatedYOffset: number;
  delay: number;
  mouseWeight: number;
  children?: React.ReactNode;
  style: React.CSSProperties;
}

const LogoSvg: FunctionComponent<Props> = (props) => {
  const [style, animate] = useSpring(() => ({
    x: 0,
    y: 0,
    strokeDashArray: 0,
  }));
  const [playAnim, setAnim] = useState(false);

  const mouse = useContext(MouseContext);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (mouse.x && windowSize.width && windowSize.height) {
      const absoluteXFromCenter = mouse.x - windowSize.width / 2;
      const absoluteYFromCenter = mouse.y - windowSize.height / 2;
      animate({
        x: absoluteXFromCenter * props.mouseWeight,
        y: absoluteYFromCenter * props.mouseWeight,
        config: { tension: 140 },
        delay: props.delay,
      });
    }
  }, [mouse]);

  return (
    <div
      onClick={() => {
        setAnim(true);
      }}
      style={{
        position: "absolute",
        height: "100%",
        boxSizing: "border-box",
        width: "90%",
        ...props.style,
      }}
    >
      <AnimatedMovement
        xOffset={props.animatedXOffset}
        yOffset={props.animatedYOffset}
      >
        <animated.svg
          id="logo2"
          viewBox="0 0 628 414.3"
          fill="none"
          style={{
            marginTop: -60,
            ...style,
          }}
        >
          <path
            className={`path ${playAnim ? "reset-anim" : ""}`}
            d="m245.9 119.6 12.4 8.1v-19.5l-28.8-21.1v175.8l16.4-16.4zm-118.5 166 16.4 9.9v-64.7h-16.4zm166.6-130.8v-20.4l-10.1-7.8v20.4zm-81.8-57.7-85 52.9.2.3v53.8h16.4v-45.1l18.8-11.8v62.1h-56.1v-27.2l15.1-9.1v-19.5l-31.5 19.3v89.6l16.4 10.1 15.3 9.6v-19.5l-15.3-9.5v-27.4h56.1v80.5l16.4-16.2v-153l33.2-20.7zm67.5 169.8v-154.8l26.3-42.6 25.8 41.7v23.3l16.4-4v-22.7l-41.8-54.7-43.1 54.3v23.7 152.1zm73.8-73 77.5-77.8-132.9 31.2v50l16.4-17v-20.5l64.4-14.9-25.5 25.7v23.3zm-5.1 34.4v-71.9l-16.4 3.8v51.7zm33.3-143-16.4-9.7v51.1l16.4-3.8zm-16.4 273.6 16.4-11v-47.7l-16.4-16.4zm101.6-82-46.6 28.9v19.3l63-38.7v-63.6h-16.4zm-220.6-22.6-34 34.2v-166.2l-16.4 10.4v195.2l50.4-50.4zm288.6.5 68.4-37.2-51.6-26.6-15.9 11.9-68.9-63.9v57.3h16.4v-19.1l53.3 47.7 15.3-10.9 8.7 5.2-25.6 17.3v18.3zm-91-131.4-56.8 57.6v23.3l12.8-12.9v120.1l16.4 16.4v-153l42-42.3zm6.1 77.7v-52.5l-16.4 16.9v108.2l16.4-10.8v-45.4h50.9v58.5l16.4-10.7v-49.9l-16.4-14.4zm-118 122.6-25.9 41.8-26.3-42.4v-17.1l-16.4 16.4v5.2l42.9 50 42.5-49.9v-59.1l-16.8-16.4zm33.3-78.6 16.4 16.4v-88.7l-16.4 16.4zm-67.1 85.4 16.4-20.7v-75.8l-25.8-26.2v22.3l9.4 9.5v17.1l-52.3 52.3v-22.7l-16.4 16.4v45.8l68.7-68.7zm27.9-132.7-19.8 19.7 75.4 75.4v-23.2l-55.5-55.5zm-249.7-15.8-66.9 35.5 23.8 10.5 26.6-16.6v33l16.4 10.3v-28.4h10.2v-16.3h-10.2v-28z"
            stroke={props.color}
            strokeWidth="0.7"
          />
        </animated.svg>
      </AnimatedMovement>
      <style jsx>{`
        path {
          stroke-dasharray: 1200;
          animation: dashAnim 12s ${props.delay}ms forwards;
        }
        .reset-anim {
          animation: dashAnim 12s forwards;
        }
        @keyframes dashAnim {
          0% {
            stroke-dasharray: 1200;
          }
          50% {
            stroke-dasharray: 50;
          }

          100% {
            stroke-dasharray: 1200;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoSvg;
