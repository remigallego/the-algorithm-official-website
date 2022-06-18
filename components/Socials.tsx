import React, { FunctionComponent } from "react";
import FadeInBlink from "./Animations/FadeInBlink";

interface Props {
  children?: React.ReactNode;
}

const Socials: FunctionComponent<Props> = () => {
  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        flexDirection: "column",
        display: "flex",
      }}
    >
      <FadeInBlink delay={1.8}>
        <img
          className="social"
          src="./images/youtube.svg"
          onClick={() => window.open("https://youtube.com")}
        />
        <img
          className="social"
          src="./images/instagram.svg"
          onClick={() => window.open("https://instagram.com")}
        />
        <img
          className="social"
          src="./images/twitter.svg"
          onClick={() => window.open("https://twitter.com")}
        />
        <img
          className="social"
          src="./images/facebook.svg"
          onClick={() => window.open("https://facebook.com")}
        />
      </FadeInBlink>
    </div>
  );
};

export default Socials;
