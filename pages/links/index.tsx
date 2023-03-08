import Image from "next/image";
import AnimatedLogo from "../../components/AnimatedLogo";
import styles from "./LinksPage.module.css";
import LinksTerminal from "../../components/LinksTerminal";
import DataRen from "./assets/datarenaissance.jpg";
import { useRef, useState } from "react";
import cx from "classnames";
import Merch from "./assets/merch.png";
import TheLastSpell from "./assets/thelastspellost.png";
import SpotifyLogo from "./../../public/images/spotify.png";
import YoutubeLogo from "./../../public/images/youtube.png";
import AppleLogo from "./../../public/images/apple.png";
import BandcampLogo from "./../../public/images/bandcamp.png";
import TwitterLogo from "./assets/twitter.png";
import InstagramLogo from "./assets/instagram.png";
import FacebookLogo from "./assets/facebook.png";
import YoutubeLogoColor from "./assets/youtube.png";
import SteamLogo from "./assets/steam.png";
import FadeIn from "../../components/Animations/FadeIn";

const LinksPage = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const theLastSpellRef = useRef(null);
  const dataRenRef = useRef(null);

  // @ts-ignore
  const executeScroll = (ref) => ref.current.scrollIntoView();

  const renderTerminalPill = () => {
    return (
      <div
        className={`${styles.pillContainer} ${styles.blackPill}`}
        onClick={() => {
          window.open(
            "https://fixtstore.com/products/the-algorithm-data-renaissance-vinyl"
          );
        }}
      >
        <Image alt={""} src={DataRen} width={"100%"} height={"100%"} />
        <LinksTerminal lines={["DATA RENAISSANCE", "VINYLS PREORDER"]} />
      </div>
    );
  };

  const renderImageBackgroundPill = (text: string) => {
    if (text === "MERCH") {
      return (
        <div
          ref={theLastSpellRef}
          className={cx(styles.pillDimensions, {
            [styles.hoverable]: !isOpen,
          })}
          style={{ margin: "0px 0px -4px" }}
        >
          <Image
            alt={""}
            src={Merch}
            objectFit={"cover"}
            height={170}
            style={{
              borderRadius: 20,
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (isOpen === null) {
                executeScroll(theLastSpellRef);
                setIsOpen("THE LAST SPELL");
              } else {
                setIsOpen(null);
              }
            }}
          />
        </div>
      );
    }

    if (text === "THE LAST SPELL") {
      return (
        <div
          ref={theLastSpellRef}
          className={cx(styles.pillDimensions, {
            [styles.hoverable]: !isOpen,
            [styles.hardBlinkAnim]: !isOpen,
          })}
          style={{ margin: "0px 0px -4px" }}
        >
          <Image
            alt={""}
            src={TheLastSpell}
            objectFit={"cover"}
            style={{
              borderRadius: 20,
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (isOpen === null) {
                executeScroll(theLastSpellRef);
                setIsOpen("THE LAST SPELL");
              } else {
                setIsOpen(null);
              }
            }}
          />
          {isOpen === "THE LAST SPELL" && (
            <div className={`${styles.collapsibleSection}`}>
              <iframe
                style={{
                  borderRadius: 12,
                  marginBottom: 10,
                }}
                src="https://open.spotify.com/embed/album/1jdwztMpVwxLMf3C9IkrmY?utm_source=generator"
                width="90%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <h1>Available to stream here</h1>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open(
                    "https://open.spotify.com/album/1jdwztMpVwxLMf3C9IkrmY?si=OQkiZ4pMQE2Qy1oxtZEzmA"
                  );
                }}
              >
                <Image src={SpotifyLogo} width={24} height={24} />
                <p>Spotify</p>
              </div>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open(
                    "https://store.steampowered.com/bundle/21005/Headbanger_Pack/"
                  );
                }}
              >
                <Image src={SteamLogo} width={24} height={24} />
                <p>Steam</p>
                <div
                  className={styles["listen-container"]}
                  style={{
                    marginRight: 20,
                  }}
                >
                  <p className={styles["bold-text"]}>buy</p>
                </div>
              </div>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open(
                    "https://store.steampowered.com/bundle/21005/Headbanger_Pack/" // TODO: Replace with Kid Katana Bandcamp
                  );
                }}
              >
                <Image src={BandcampLogo} width={24} height={24} />
                <p>Bandcamp</p>
                <div
                  className={styles["listen-container"]}
                  style={{
                    marginRight: 20,
                  }}
                >
                  <p className={styles["bold-text"]}>buy</p>
                </div>
              </div>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open(
                    "https://music.apple.com/us/album/the-last-spell-original-game-soundtrack/1569019810"
                  );
                }}
              >
                <Image src={AppleLogo} width={24} height={24} />
                <p>Apple Music</p>
              </div>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open(
                    "https://store.steampowered.com/bundle/21005/Headbanger_Pack/" // TODO: Replace with Kid Katana Youtube
                  );
                }}
              >
                <Image src={YoutubeLogo} width={24} height={24} />
                <p>Youtube</p>
              </div>
            </div>
          )}
        </div>
      );
    }
    if (text === "DATA RENAISSANCE") {
      return (
        <div
          ref={dataRenRef}
          className={cx(styles.pillDimensions, {
            [styles.hoverable]: !isOpen,
          })}
          style={{ margin: "0px 0px -4px" }}
        >
          <Image
            alt={""}
            src={DataRen}
            objectFit={"cover"}
            style={{
              borderRadius: 20,
              cursor: "pointer",
            }}
            height={600}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (!isOpen) {
                executeScroll(dataRenRef);
                setIsOpen("DATA RENAISSANCE");
              } else {
                setIsOpen(null);
              }
            }}
          />

          {isOpen === "DATA RENAISSANCE" && (
            <div className={`${styles.collapsibleSection}`}>
              <iframe
                style={{
                  borderRadius: 12,
                  marginBottom: 10,
                }}
                src="https://open.spotify.com/embed/album/1LHSxBpDSoNUrOezwOcLKU?utm_source=generator"
                width="90%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <h1>Available to stream here</h1>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open(
                    "https://open.spotify.com/album/1LHSxBpDSoNUrOezwOcLKU?si=rvNjJAWPSZKrrBlMSidjAQ"
                  );
                }}
              >
                <Image src={SpotifyLogo} width={24} height={24} />
                <p>Spotify</p>
              </div>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open(
                    "https://thealgorithm.bandcamp.com/album/data-renaissance"
                  );
                }}
              >
                <Image src={BandcampLogo} width={24} height={24} />
                <p>Bandcamp</p>
                <div
                  className={styles["listen-container"]}
                  style={{
                    marginRight: 20,
                  }}
                >
                  <p className={styles["bold-text"]}>buy</p>
                </div>
              </div>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open(
                    "https://music.apple.com/us/album/data-renaissance/1617104783"
                  );
                }}
              >
                <Image src={AppleLogo} width={24} height={24} />
                <p>Apple Music</p>
              </div>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open("https://www.youtube.com/watch?v=hBYzJltMT7k");
                }}
              >
                <Image src={YoutubeLogo} width={24} height={24} />
                <p>Youtube</p>
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  const renderDefaultPill = (text: string) => {
    const getUrl = () => {
      if (text.includes("twitter")) {
        return "https://twitter.com/The_Algorithm";
      }
      if (text.includes("facebook")) {
        return "https://www.facebook.com/theAlg0r1thm/";
      }
      if (text.includes("instagram")) {
        return "https://www.instagram.com/thealgorithm_/";
      }
      if (text.includes("youtube")) {
        return "https://www.youtube.com/thealg0r1thm";
      }
      if (text.includes("Curated Spotify")) {
        return "https://open.spotify.com/user/remifasol";
      }
    };
    const getRightSideImage = () => {
      if (text.includes("twitter")) {
        return <Image src={TwitterLogo} width={24} height={24} style={{}} />;
      }
      if (text.includes("facebook")) {
        return <Image src={FacebookLogo} width={24} height={24} style={{}} />;
      }
      if (text.includes("instagram")) {
        return <Image src={InstagramLogo} width={24} height={24} style={{}} />;
      }
      if (text.includes("youtube")) {
        return (
          <Image src={YoutubeLogoColor} width={24} height={24} style={{}} />
        );
      }
    };
    return (
      <div
        className={styles.pillContainer}
        style={{
          justifyContent:
            text === "░░░ Curated Spotify Playlists ░░░"
              ? "center"
              : "flex-start",
        }}
        onClick={() => window.open(getUrl(), "_blank")}
      >
        {getRightSideImage()}
        <FadeIn lines={[{ text: text }]} delay={0} />
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <AnimatedLogo />
      </div>
      <div className={styles.pillsContainer}>
        <h1>l̴at̴e̷s̵t̴ ̴m̷u̷s̵i̵c</h1>
        {renderImageBackgroundPill("THE LAST SPELL")}
        {renderImageBackgroundPill("DATA RENAISSANCE")}
        <h1>me̴r̶c̵h̶</h1>
        {renderImageBackgroundPill("MERCH")}
        {renderTerminalPill()}
        <h1>̵s̷o̴cia̵l̶s</h1>
        {renderDefaultPill("░░░ Curated Spotify Playlists ░░░")}
        {renderDefaultPill("follow ./twitter")}
        {renderDefaultPill("like ./facebook")}
        {renderDefaultPill("follow ./instagram")}
        {renderDefaultPill("subscribe ./youtube")}
      </div>
    </div>
  );
};

export default LinksPage;
