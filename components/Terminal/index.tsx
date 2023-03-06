import React, { FunctionComponent, useEffect, useState } from "react";
import FadeIn from "../Animations/FadeIn";
import RELEASES, { ReleaseType } from "../../releases";
import styles from "./Terminal.module.css";
import { Transition } from "react-transition-group";

interface Props {
  albumId: number;
  handleClose: () => void;
}

export interface Line {
  text: string;
  action?: () => void;
}

const Terminal: FunctionComponent<Props> = ({ handleClose, albumId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [delay, setDelay] = useState(0.9);
  const albums = RELEASES.filter((r) => r.type === ReleaseType.Album);
  const album = albums[albumId];

  console.log({ lines });

  const overrideWithNewLines = (newLines: Line[]) => {
    const newLinesLength = newLines.length;
    setDelay(0.1);
    return setLines(oldLines => [
      ...newLines,
      ...oldLines.slice(newLinesLength, oldLines.length).map(() => ({
        text: "⠀",
      })),
    ]);
  };

  useEffect(() => {
    if (albumId !== -1) {
      setIsVisible(true);
      setLines(getLines());
    }
  }, [albumId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const getLines = () => {
    if (albumId === -1) {
      return [];
    }
    return [
      { text: `${album.name}` },
      { text: `${album.date}` },
      { text: `-----------------------------------` },
      ...(album
        ? album.tracklist?.map((e, idx) => ({
            text: `${idx}. ${e}`,
          }))
        : []),
      { text: `-----------------------------------` },
      {
        text: "LISTEN + BUY",
        action: () => {
          overrideWithNewLines([
            {
              text: "BACK",
              action: () => overrideWithNewLines(getLines()),
            },
            { text: "⠀" },
            { text: "SPOTIFY -> https://www.spotify.com" },
            { text: "BANDCAMP -> https://www.apple.com" },
            { text: "YOUTUBE -> https://www.youtube.com" },
            { text: "APPLEMUSIC -> https://www.youtube.com" },
          ]);
        },
      },
    ];
  };
  return (
    <Transition
      in={isVisible}
      mountOnEnter
      unmountOnExit
      timeout={1200}
      onExited={() => {
        setDelay(0.9);
        handleClose();
      }}
    >
      {(state) => {
        const handleCloseAnimation = () => {
          if (state === "entered") {
            setIsVisible(false);
          }
        };

        const isExiting = state === "exiting";
        return (
          <div>
            <div className={styles.absolute}>
              <div>
                <div
                  className={[
                    styles.terminalContainer,
                    isExiting && styles.terminalContainerClose,
                  ].join(" ")}
                >
                  <div
                    className={[
                      styles.terminalHeader,
                      isExiting && styles.terminalHeaderClose,
                    ].join(" ")}
                  >
                    <div>
                      <p className={styles.terminalTitle}></p>
                    </div>

                    <div
                      className={[
                        styles.closeButton,
                        isExiting ? styles.closeButtonClose : "",
                      ].join(" ")}
                      onClick={handleCloseAnimation}
                    >
                      X
                    </div>
                  </div>
                  <div
                    className={[
                      styles.terminalContent,
                      isExiting && styles.terminalContentClose,
                    ].join(" ")}
                  >
                    <FadeIn delay={delay} lines={lines} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={[styles.black, isExiting && styles.blackClose].join(
                " "
              )}
              onClick={handleCloseAnimation}
            />
          </div>
        );
      }}
    </Transition>
  );
};

export default Terminal;
