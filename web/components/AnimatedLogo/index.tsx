import React, { FunctionComponent, useState } from "react";
import LogoSvg from "./LogoSvg";

interface Props {
  shouldFadeAt?: number;
  enableTransform?: boolean;
}

const AnimatedLogo: FunctionComponent<Props> = (props) => {
  const [pressed, togglePressed] = useState(false);

  const logoComponents = [
    {
      key: "CornflowerBlue",
      color: "CornflowerBlue",
      animatedXOffset: 1.1,
      animatedYOffset: 3.7,
      delay: 222,
      style: { width: "86%" },
    },
    {
      key: "red",
      color: "#ff0404",
      animatedXOffset: 2.1,
      animatedYOffset: 3.4,
      delay: 470,
      style: { width: "92%" },
    },
    {
      key: "blue",
      color: "#00FFFF",
      animatedXOffset: -4.5,
      animatedYOffset: 3.9,
      delay: 350,
      style: { width: "94%" },
    },
    {
      key: "green",
      color: "#04ff08",
      animatedXOffset: 4.1,
      animatedYOffset: -5,
      delay: 230,
      style: { width: "98%" },
    },
  ];

  const shuffle = (array: typeof logoComponents) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <div
      onClick={() => {
        togglePressed(!pressed);
      }}
      className="container"
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{
          width: `${"50%"}`,
          height: "22%",
          boxSizing: "border-box",
          ...(props.enableTransform && {
            transform: "translateY(-15vw)",
          }),
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          position: "relative",
          transition: "width 0.1s ease-in-out",
        }}
      >
        {shuffle(logoComponents).map((logo, index) => (
          <LogoSvg
            {...logo}
            pressed={pressed}
            mouseWeight={0.003 * index}
            shouldFadeAt={props.shouldFadeAt}
          />
        ))}
      </div>

      <style jsx>{``}</style>
    </div>
  );
};

export default AnimatedLogo;
