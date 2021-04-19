import React, { FunctionComponent } from "react";

interface Props {
  src?: string;
}

const VideoBackground: FunctionComponent<Props> = (props) => {
  return (
    <>
      <video autoPlay={true} loop muted>
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
        }
      `}</style>
    </>
  );
};

export default VideoBackground;
