import React, { FunctionComponent, useState } from "react";
import useMediaQueries from "../hooks/useMediaQueries";
import { Release } from "../releases";
import Terminal from "./Terminal";

interface Props {
  children?: React.ReactNode;
  release: Release;
}

const Album: FunctionComponent<Props> = ({ release }) => {
  const [isHovering, setIsHovering] = useState(false);
  const { bigScreen } = useMediaQueries();
  const sizeCover = bigScreen ? "40%" : "80%";

  const tracksFormatted = release.tracklist.map((tr, idx) => {
    return `${idx + 1}. ${tr}`;
  });

  const renderListenLinks = () => {
    return (
      <div
        style={{
          flexDirection: "column",
          marginLeft: 40,
          justifySelf: "flex-end",
        }}
      >
        <p className="bold-text listen-text fastblink">Listen + purchase</p>
        <div className="logos-container">
          <img src={"images/spotify.png"} className="logo" />
          <img src={"images/bandcamp.png"} className="logo" />
          <img src={"images/youtube.png"} className="logo" />
        </div>
        <style jsx>
          {`
            .logos-container {
              margin-top: 10px;
            }
            .fastblink {
              animation: 0.1s blink infinite;
            }
            .listen-text {
              color: #11f24a;
              font-size: 20px;
            }
            @keyframes blink {
              0% {
                opacity: 1;
              }
              50% {
                opacity: 0.7;
              }
              100% {
                opacity: 1;
              }
            }
            .logo {
              width: 30px;
              height: 30px;
              margin-right: 10px;
              filter: invert(1);
            }
          `}
        </style>
      </div>
    );
  };

  const renderTerminal = () => {
    return (
      <div className="terminal-container">
        <Terminal
          lines={[
            release.name.toUpperCase(),
            release.type,
            ``,
            `Released: ${release.date}`,
            ``,
            "Tracklist:",
            "",
            ...tracksFormatted,
          ]}
        />
        {renderListenLinks()}
        <style jsx>{`
          .cover {
            position: relative;
            width: ${sizeCover};
          }
          .terminal-container {
            position: absolute;
            top: 0%;
            left: 0%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
          }
          .year {
            font-size: 200px;
            left: -200px;
            top: -140px;
            position: absolute;
          }
        `}</style>
      </div>
    );
  };

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      style={{
        height: sizeCover,
        width: sizeCover,
        margin: 2,
        position: "relative",
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={release.cover}
        className="cover "
        style={{
          width: "100%",
          height: "100%",
          transition: "opacity 0.2s",
          opacity: isHovering ? 0.3 : 1,
        }}
      />
      {isHovering && renderTerminal()}
    </div>
  );

  return (
    <div
      key={release.name}
      style={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: bigScreen ? "row" : "column",
        display: "flex",
        marginBottom: 20,
      }}
    >
      {/*   {!!!release.hideDate && (
            <h1 className="bold-text headline year">{release.date.slice(-4)}</h1>
          )} */}
      <img src={release.cover} className="cover " />
    </div>
  );
};

export default Album;
