import { useMemo, useState } from "react";
import FadeInBlink from "../../components/Animations/FadeInBlink";
import useWindowSize from "../../hooks/useWindowSize";
import RELEASES, { ReleaseType } from "../../releases";
import { HEADER_HEIGHT } from "../../vars";
import Terminal from "../../components/Terminal";
import styles from "./Discography.module.css";

const DiscographyPage = () => {
  const [coverIsHovered, setCoverIsHovered] = useState<number>(-1);
  const [albumOpened, toggleAlbum] = useState<number>(-1);

  const { height, width } = useWindowSize();

  const albumList = useMemo(() => {
    return RELEASES.filter((r) => r.type === ReleaseType.Album).map(
      (release, index) => {
        return (
          <div className={styles.albumContainer}>
            <div className={styles.textsContainer}>
              <p
                className={styles.title}
                style={{
                  color: coverIsHovered === index ? "#11f24a" : "white",
                }}
              >
                {release.name}
              </p>
              <p className={styles.year}>{release.date.substring(6)}</p>
            </div>
            <div className={styles.imageRotate}>
              <div
                className={styles.cover}
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
      }
    );
  }, [RELEASES]);

  return (
    <>
      <div
        className={styles.rotate}
        style={{
          marginTop: (height ?? 0) - HEADER_HEIGHT - 48,
          width: (height ?? 0) - HEADER_HEIGHT,
        }}
      >
        <div
          className={styles.container}
          style={{
            width: (height ?? 0) - HEADER_HEIGHT,
            height: width || 0,
          }}
        >
          <FadeInBlink delay={0.2} disableBlink>
            {albumList}
          </FadeInBlink>
        </div>
      </div>
      <Terminal albumId={albumOpened} handleClose={() => toggleAlbum(-1)} />
    </>
  );
};

export default DiscographyPage;
