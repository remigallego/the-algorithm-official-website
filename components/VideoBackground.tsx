import React, { FunctionComponent, useRef } from "react";
import { TRANSITION_DELAY } from "../vars";
import LogoSvg from "./LogoSvg";

interface Props {
  src?: string;
  blackened: boolean;
}

const VideoBackground: FunctionComponent<Props> = (props) => {
  const ref = useRef<HTMLVideoElement>(null);

  return <LogoSvg />;

  return (
    <>
      <video autoPlay={true} loop muted ref={ref}>
        <source src={props.src} />
      </video>
      <style jsx>{`
        video {
          z-index: -1;
          height: 100%;
          width: 177.77777778vh;
          min-width: 100%;
          min-height: 56.25vw;
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          background: #001526;
          transition: opacity ${TRANSITION_DELAY}ms;
          opacity: ${props.blackened ? 0.2 : 1};
        }
      `}</style>
    </>
  );
};

export default VideoBackground;
