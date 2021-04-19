import React, { FunctionComponent } from "react";

interface Props {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const TextBold: FunctionComponent<Props> = (props) => {
  return (
    <>
      <p {...props}>{props.children}</p>
      <style jsx>{`
        p {
          font-size: 12px;
          font-weight: bold;
          font-family: "NeueMachina";
          margin: 0;
          padding: 0;
          color: white;
          display: inline-block;
          letter-spacing: 0.12em;
        }
      `}</style>
    </>
  );
};

export default TextBold;
