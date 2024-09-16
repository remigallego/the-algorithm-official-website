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
          onClick={() => window.open("https://www.youtube.com/thealg0r1thm")}
        />
        <img
          className="social"
          src="./images/instagram.svg"
          onClick={() => window.open("https://www.instagram.com/thealgorithm_/")}
        />
        <img
          className="social"
          src="./images/twitter.svg"
          onClick={() => window.open("https://twitter.com/The_Algorithm")}
        />
        <img
          className="social"
          src="./images/facebook.svg"
          onClick={() => window.open("https://www.facebook.com/theAlg0r1thm/")}
        />
      </FadeInBlink>
    </div>
  );
};

export default Socials;
