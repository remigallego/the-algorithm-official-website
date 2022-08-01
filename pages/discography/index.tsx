import { useState } from "react";
import FadeInBlink from "../../components/Animations/FadeInBlink";
import useWindowSize from "../../hooks/useWindowSize";
import RELEASES, { ReleaseType } from "../../releases";
import { HEADER_HEIGHT } from "../../vars";
import Terminal from "../../components/Terminal";

const DiscographyPage = () => {
  const [coverIsHovered, setCoverIsHovered] = useState<number>(-1);
  const [albumOpened, toggleAlbum] = useState<number>(-1);
  const { height, width } = useWindowSize();
  const albums = RELEASES.filter((r) => r.type === ReleaseType.Album);

  return (
    <div>
      <div className="rotate">
        <div className="container">
          <FadeInBlink delay={0.2} disableBlink>
            {albums.map((release, index) => {
              return (
                <div className={`album-container`}>
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
                  <div className="image-rotate">
                    <div
                      //src={release.cover}
                      className="image"
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
                </div>
              );
            })}
          </FadeInBlink>
        </div>
      </div>
      <Terminal albumId={albumOpened} handleClose={() => toggleAlbum(-1)} />
      <style jsx>{`
        .container {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
          display: flex;
          height: ${width || 0}px;
          overflow: scroll;
          padding: 0px 48px 48px;
          box-sizing: border-box;
          padding-top: 80px;
          width: ${(height ?? 0) - HEADER_HEIGHT}px;
          flex-direction: column;
          align-items: center;
        }
        .rotate {
          margin-top: ${(height ?? 0) - HEADER_HEIGHT}px;
          transform-origin: top left;
          transform: rotate(-90deg);
          width: ${(height ?? 0) - HEADER_HEIGHT}px;
          overflow: hidden;
        }
        .container::-webkit-scrollbar,
        .rotate::-webkit-scrollbar {
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

        .fake-scroller {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
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
          margin-bottom: 48px;
          align-items: flex-end;
          flex-direction: column;
          transform: rotate(90deg);
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
          width: 70vw;
          height: 70vw;
          max-width: 500px;
          max-height: 500px;
          border-radius: 5px;
          transform: scale(1);
          transition: transform 0.15s ease-in-out;
        }

        .image:hover {
          cursor: pointer;
          transform: scale(1.03);
          animation: imageHover 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        @keyframes imageHover {
          0% {
            filter: brightness(1);
          }
          24% {
            filter: brightness(1.47);
          }
          100% {
            filter: brightness(1);
          }
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

        @media (min-width: 768px) {
          .image {
            width: 40vw;
            height: 40vw;
          }
          .album-container {
            transform: rotate(0deg);
          }

          .image-rotate {
            transform: rotateZ(90deg);
          }
        }
      `}</style>
    </div>
  );
};

export default DiscographyPage;
