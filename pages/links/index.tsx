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
import Discord from "./assets/discord.png";
import FadeIn from "../../components/Animations/FadeIn";
// import { event } from "nextjs-google-analytics";

export const trackEvent = ({
  action,
  params,
}: {
  action: string;
  params: {
    [key: string]: string | number | boolean | undefined | null;
  };
}) => {
  action;
  params;
  // window.gtag("event", action, params);
  // event(action, params);
};

const TheLastSpellLinks = {
  Spotify:
    "https://open.spotify.com/album/4NHQJlyteZwShk67OEe71W?si=pr-6oupgSDSkQH3Q8RAAfg",
  Apple:
    "https://music.apple.com/us/album/the-last-spell-original-game-soundtrack/1675871681",
  Bandcamp:
    "https://kidkatanarecords.bandcamp.com/album/the-last-spell-original-game-soundtrack",
  Youtube:
    "https://www.youtube.com/watch?v=ZWkgezteauA&t=210s&pp=ygUZdGhlIGxhc3Qgc3BlbGwga2lkIGthdGFuYQ%3D%3D",
  Steam: "https://store.steampowered.com/bundle/21005/Headbanger_Pack/",
};

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
          trackEvent({
            action: "click",
            params: {
              event_label: "data_renaissance_vinyl",
            },
          });
          window.open(
            "https://fixtstore.com/products/the-algorithm-data-renaissance-vinyl"
          );
        }}
      >
        <Image
          alt={""}
          src={DataRen}
          height={'100%'}
          width={'100%'}
          objectFit="cover"
          style={{
            height: "20%",
            width: "20%",
          }}
        />
        <LinksTerminal lines={["DATA RENAISSANCE", "VINYLS"]} />
      </div>
    );
  };

  const renderMerch = () => {
    return (
      <div
        className={cx(styles.pillDimensions, {
          [styles.hoverable]: !isOpen,
        })}
        style={{ margin: "0px 0px -4px" }}
      >
        <Image
          alt={""}
          src={Merch}
          height={180}
          style={{
            borderRadius: 20,
            cursor: "pointer",
            objectFit: "cover",
            width: "100%",
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            trackEvent({
              action: "click",
              params: {
                event_label: "merch_store",
              },
            });
            window.open(
              "https://fixtstore.com/collections/the-algorithm",
              "_blank"
            );
          }}
        />
      </div>
    );
  };

  const renderImageBackgroundPill = (text: string) => {
    if (text === "DISCORD") {
      return (
        <div
          className={cx(styles.pillDimensions, {
            [styles.hoverable]: !isOpen,
          })}
          style={{ margin: "0px 0px -4px" }}
        >
          <Image
            alt={""}
            src={Discord}
            height={180}
            objectFit="cover"
            style={{
              borderRadius: 20,
              cursor: "pointer",
              width: "100%",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              trackEvent({
                action: "click",
                params: {
                  event_label: "discord",
                },
              });
              window.open("https://discord.gg/92WtQD3EDc", "_blank");
            }}
          />
        </div>
      );
    }
    if (text === "MERCH") {
      return renderMerch();
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
            style={{
              borderRadius: 20,
              width: "100%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            onClick={(e) => {
              trackEvent({
                action: "click",
                params: {
                  event_label: "the_last_spell",
                },
              });
              // window.open("https://idol-io.link/TheLastSpell", "_blank");
              e.preventDefault();
              e.stopPropagation();
              if (isOpen === null || isOpen !== "THE LAST SPELL") {
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
                src="https://open.spotify.com/embed/album/4NHQJlyteZwShk67OEe71W?utm_source=generator"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <h1>Available to stream here</h1>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open(TheLastSpellLinks.Spotify);
                }}
              >
                <Image src={SpotifyLogo} width={24} height={24} />
                <p>Spotify</p>
              </div>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open(TheLastSpellLinks.Steam);
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
                  window.open(TheLastSpellLinks.Bandcamp);
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
                  window.open(TheLastSpellLinks.Apple);
                }}
              >
                <Image src={AppleLogo} width={24} height={24} />
                <p>Apple Music</p>
              </div>
              <div
                className={styles.secondLevelPill}
                onClick={() => {
                  window.open(TheLastSpellLinks.Youtube);
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
            objectFit="cover"
            style={{
              borderRadius: 20,
              cursor: "pointer",
              width: "100%",
            }}
            height={200}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              trackEvent({
                action: "click",
                params: {
                  event_label: "toggle_data_renaissance",
                },
              });
              if (!isOpen || isOpen !== "DATA RENAISSANCE") {
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
                  trackEvent({
                    action: "click",
                    params: {
                      event_label: "data_renaissance_spotify",
                    },
                  });
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
                  trackEvent({
                    action: "click",
                    params: {
                      event_label: "data_renaissance_bandcamp",
                    },
                  });
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
                  trackEvent({
                    action: "click",
                    params: {
                      event_label: "data_renaissance_apple",
                    },
                  });
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
                  trackEvent({
                    action: "click",
                    params: {
                      event_label: "data_renaissance_youtube",
                    },
                  });
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
        onClick={() => {
          trackEvent({
            action: "click",
            params: {
              event_label: `socials:${getUrl()}`,
            },
          });
          window.open(getUrl(), "_blank");
        }}
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
        {renderImageBackgroundPill("DISCORD")}
        {renderDefaultPill("░░░ Curated Spotify Playlists ░░░")}
        {renderDefaultPill("follow ./instagram")}
        {renderDefaultPill("subscribe ./youtube")}
        {renderDefaultPill("follow ./twitter")}
        {renderDefaultPill("like ./facebook")}
      </div>
    </div>
  );
};

export default LinksPage;
