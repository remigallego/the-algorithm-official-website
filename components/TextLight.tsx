import React, { FunctionComponent } from "react";

interface Props {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const TextLight: FunctionComponent<Props> = (props) => {
  return (
    <>
      <p style={props.style}>{props.children}</p>
      <style jsx>{`
        p {
          font-size: 12px;
          font-weight: lighter;
          font-family: "NeueMachina";
          margin: 0;
          padding: 0;
          color: white;
        }
      `}</style>
    </>
  );
};

export default TextLight;
