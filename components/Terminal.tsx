import React from "react";

interface Props {
  lines: string[];
}

const Terminal = (props: Props) => {
  return (
    <>
      <div className="container">
        {props.lines.map((line, idx) => {
          if (line.length === 0) return <br />;
          return (
            <p
              className={`line ${
                idx === 0 ? "bold-text title" : "regular-text"
              }`}
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
          width: 520px;
          padding: 20px 40px;
        }
        .line {
          display: block;
          font-size: 16px;
          text-shadow: 0px 0px 10px rgb(0 255 50 / 10%), 0px 0px 3px #11f24a;
        }
        .title {
          font-size: 17px;
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

export default Terminal;
