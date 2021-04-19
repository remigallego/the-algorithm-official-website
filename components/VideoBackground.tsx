import React, { FunctionComponent, useEffect, useRef } from "react";

interface Props {
  src?: string;
  playing: boolean;
}

const VideoBackground: FunctionComponent<Props> = (props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (props.playing) {
      ref.current?.play();
    } else {
      if (ref.current) ref.current.currentTime = 0;
      ref.current?.pause();
    }
  }, [props.playing]);
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
        }
      `}</style>
    </>
  );
};

export default VideoBackground;
