import React from "react";

const Terminal = () => {
  /*   const [terminalLineData, setTerminalLineData] = useState([
    { type: "output", value: "Welcome to the React Terminal UI Demo!" },
    { type: "input", value: "Some previous input received" },
  ]); */
  return (
    <>
      <div className="container">
        <p className="regular-text title">compiler optimization techniques</p>
        <p className="regular-text date">02/11/2018</p>
        <p className="regular-text">1. Cluster</p>
        <p className="regular-text">2. Fragmentation</p>
        <p className="regular-text">3. Superscalar</p>
        <p className="regular-text">4. Binary Space</p>
        <p className="regular-text">
          5. Sentinel Node
          <span className="blinking-block">▋</span>
        </p>
      </div>
      <style jsx>{`
        .container {
          background-color: rgba(0, 0, 0, 0.6);
          width: 340px;
          padding: 20px 40px;
        }
        .title,
        .date {
          display: block;
          margin-bottom: 20px;
        }
        p {
          color: white;
          letter-spacing: 0.15em;
          font-size: 22px;
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
