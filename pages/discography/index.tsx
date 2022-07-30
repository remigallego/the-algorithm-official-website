import { useState } from "react";
import FadeInBlink from "../../components/Animations/FadeInBlink";
import useWindowSize from "../../hooks/useWindowSize";
import RELEASES, { ReleaseType } from "../../releases";
import { HEADER_HEIGHT } from "../../vars";
import DiscographyTerminal from "./components/DiscographyTerminal";

const DiscographyPage = () => {
  const [coverIsHovered, setCoverIsHovered] = useState<number>(-1);
  const [albumOpened, toggleAlbum] = useState<number>(-1);
  const { height, width } = useWindowSize();

  const albums = RELEASES.filter((r) => r.type === ReleaseType.Album);

  return (
    <div>
      <div className="container">
        <FadeInBlink delay={0.2} disableBlink>
          {albums.map((release, index) => {
            return (
              <div
                className={`album-container`}
                style={{
                  marginLeft: index === 0 ? 200 : 0,
                }}
              >
                <div className="texts-container">
                  <p
                    className="title"
                    style={{
                      transition: "color 0.2s ease-in-out",
                      color: coverIsHovered === index ? "#11f24a" : "white",
                    }}
                  >
                    {release.name}
                  </p>
                  <p className="year">{release.date.substring(6)}</p>
                </div>
                <div
                  //src={release.cover}
                  className="image piece1"
                  style={{
                    backgroundImage: `url(${release.cover})`,
                  }}
                  onMouseOver={() => setCoverIsHovered(index)}
                  onMouseOut={() => setCoverIsHovered(-1)}
                  onClick={() => {
                    if (albumOpened === -1) {
                      toggleAlbum(index);
                    } else {
                      toggleAlbum(-1);
                    }
                  }}
                />
              </div>
            );
          })}
        </FadeInBlink>
      </div>

      {albumOpened !== -1 && (
        <DiscographyTerminal
          album={albums[albumOpened]}
          handleClose={() => toggleAlbum(-1)}
        />
      )}

      <style jsx>{`
        .container {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
          display: flex;
          width: ${width || 0}px;
          overflow: scroll;
          padding: 0px 48px 48px;
          box-sizing: border-box;
          padding-top: 80px;
          height: ${(height ?? 0) - HEADER_HEIGHT}px;
        }
        .container::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        @keyframes overlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.5;
          }
        }
        .logo {
          background-image: url("./images/logowhite.png");
          background-size: contain;
          opacity: 0.8;
          background-repeat: no-repeat;
          position: absolute;
          transform: translateX(800px);
          z-index: 2;
          width: 100vw;
          min-height: 1000px;
          z-index: -1;
        }
        .album-container {
          display: flex;
          width: 40vw;
          max-width: 500px;
          justify-content: center;
          margin-right: 58px;
          align-items: flex-end;
          flex-direction: column;
        }
        .texts-container {
          display: flex;
          flex-direction: column;
          height: 100px;
          align-items: flex-end;
          margin-bottom: 0px;
        }

        .image {
          background-size: cover;
          width: 40vw;
          height: 40vw;
          max-width: 500px;
          max-height: 500px;
          transition: transform 0.2s;
          border-radius: 5px;
        }
        .image:hover {
          cursor: pointer;
          transform: scale(1.03);
        }
        .title {
          font-family: "NeueMachina";
          font-size: 26px;
          font-weight: bold;
          text-align: right;
          display: inline-block;
          letter-spacing: 0.12em;
          margin-bottom: 4px;
        }
        .year {
          font-size: 16px;
          font-style: italic;
          font-weight: lighter;
          font-family: "NeueMachina";
          color: white;
          display: inline-block;
          letter-spacing: 0.12em;
        }
        .listen-container {
          margin-top: 16px;
          display: inline-block;
          background-color: #11f24a;
          width: 100px;
          animation: 0.3s gentleblink infinite;
          box-shadow: 5px 5px 0px rgb(2, 240, 125);
          border-radius: 3px;
          transition: animation 0.2s;
          cursor: pointer;
          padding: 6px;
        }
        .listen-container:hover {
          animation: 0.1s gentleblink infinite;
        }

        @keyframes boxShadow {
          0% {
            box-shadow: -2px -2px 0px rgba(2, 240, 125, 0);
          }
          100% {
            box-shadow: 10px 10px 0px rgba(2, 240, 125, 1);
          }
        }
        @keyframes gentleblink {
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
      `}</style>
    </div>
  );
};

export default DiscographyPage;
