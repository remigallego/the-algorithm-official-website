import CategoryLayout from "../components/CategoryLayout";
import Terminal from "../components/Terminal";
import useMediaQueries from "../hooks/useMediaQueries";
import RELEASES, { Release } from "../releases";

const DiscographyPage = () => {
  const { bigScreen } = useMediaQueries();
  const renderAlbum = (release: Release) => {
    const sizeCover = bigScreen ? "500px" : "80%";

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

    return (
      <div
        key={release.name}
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: bigScreen ? "row" : "column",
          display: "flex",
          marginBottom: 110,
          marginLeft: 200,
        }}
      >
        {!!!release.hideDate && (
          <h1 className="bold-text headline year">{release.date.slice(-4)}</h1>
        )}
        <img src={release.cover} className="cover " />
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
        </div>
        <style jsx>{`
          .cover {
            position: relative;
            width: ${sizeCover};
          }
          .terminal-container {
            height: 500px;
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
    <CategoryLayout pageNumber={"02"} title={"DISCOGRAPHY"}>
      <div className="container">{RELEASES.map(renderAlbum)}</div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin-top: 160px;
        }
      `}</style>
    </CategoryLayout>
  );
};

export default DiscographyPage;
