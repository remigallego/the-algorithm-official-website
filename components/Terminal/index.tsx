import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import FadeIn from "../Animations/FadeIn";
import RELEASES, { ReleaseType } from "../../releases";
import styles from "./Terminal.module.css";
import { Transition } from "react-transition-group";

interface Props {
  albumId: number;
  handleClose: () => void;
}

const Terminal: FunctionComponent<Props> = ({ handleClose, albumId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const albums = RELEASES.filter((r) => r.type === ReleaseType.Album);
  const album = albums[albumId];

  useEffect(() => {
    if (albumId !== -1) {
      setIsVisible(true);
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
      `${album.name}`,
      `${album.date}`,
      `-----------------------------------`,
      ...(album ? album.tracklist?.map((e, idx) => `${idx}. ${e}`) : []),
      `-----------------------------------`,
      "LISTEN",
      "BUY",
    ];
  };

  return (
    <Transition
      in={isVisible}
      mountOnEnter
      unmountOnExit
      timeout={1200}
      onExited={handleClose}
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
                    <FadeIn delay={0.9} disableBlink lines={getLines()} />
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
