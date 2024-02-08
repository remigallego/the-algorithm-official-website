import React from "react";
import { SMALL_BREAKPOINT } from "../vars";

interface Props {
  lines: string[];
}

const LinksTerminal = (props: Props) => {
  return (
    <>
      <div className="container">
        {props.lines.map((line, idx) => {
          if (line.length === 0) return <br />;
          return (
            <p
              className={`line ${
                idx === 0 ? "bold-text title" : "regular-text regular-line"
              } `}
            >
              {line}
              {idx === props.lines.length - 1 && (
                <span className="blinking-block">▋</span>
              )}
            </p>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          background-color: rgba(0, 10, 50, 0);
          padding: 20px 40px;
          -webkit-filter: url(#chromaticabberration);
        }
        .line {
          display: block;
          text-shadow: 0px 0px 10px rgb(0 255 50 / 10%), 0px 0px 3px #11f24a;
        }
        .regular-line {
          font-size: 3vw;
          margin-left: 20px;
          text-align: center;
        }
        .title {
          font-size: 5vw;
          text-align: center;
        }
        p {
          color: #11f24a;
          letter-spacing: 0.15em;
          font-size: 22px;
          margin-bottom: 4px;
        }
        .blinking-block {
          animation: 1s blink infinite;
        }

         {
          /*         @media (min-width: ${SMALL_BREAKPOINT}px) {
          .regular-line {
            font-size: 3vw;
          }
          .title {
            font-size: 5vw;
          }
        } */
        }
        @media (min-width: ${SMALL_BREAKPOINT}px) {
          .regular-line {
            font-size: 26px;
            text-align: left;
            margin-left: 0px;
          }
          .title {
            font-size: 30px;
            text-align: left;
          }
        }

        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default LinksTerminal;
