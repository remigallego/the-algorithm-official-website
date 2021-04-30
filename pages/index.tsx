import useMouse from "@react-hook/mouse-position";
import React, { useRef } from "react";
import AnimatedLogo from "../components/AnimatedLogo";
import useWindowSize from "../hooks/useWindowSize";
import { HEADER_HEIGHT } from "../vars";

export const MouseContext = React.createContext({
  x: 0,
  y: 0,
});

const IndexPage = () => {
  const windowSize = useWindowSize();
  const ref = useRef(null);

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 12,
  });

  return (
    <div
      ref={ref}
      style={{
        width: windowSize.width,
        boxSizing: "border-box",
        height: (windowSize.height ?? 10) - HEADER_HEIGHT,
      }}
    >
      <MouseContext.Provider
        value={{
          x: mouse.clientX ?? 0,
          y: mouse.clientY ?? 0,
        }}
      >
        <AnimatedLogo />
      </MouseContext.Provider>
    </div>
  );
};

export default IndexPage;
