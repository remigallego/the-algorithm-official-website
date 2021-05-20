import React, { FunctionComponent, useState } from "react";
import math from "../../utils/math";
import LogoSvg from "./LogoSvg";

interface Props {}

const AnimatedLogo: FunctionComponent<Props> = () => {
  return (
    <div
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
      <LogoSvg
        key={"red"}
        animatedXOffset={2.1}
        animatedYOffset={3.4}
        color={"#ff0404"}
        delay={0}
        mouseWeight={0.09}
        style={{ width: "90%" }}
      />
      <LogoSvg
        key={"blue"}
        animatedXOffset={-4.5}
        animatedYOffset={3.9}
        color={"#00FFFF"}
        mouseWeight={0.08}
        delay={100}
        style={{ width: "91%" }}
      />
      <LogoSvg
        key={"green"}
        animatedXOffset={4.1}
        animatedYOffset={-5}
        color={"#04ff08"}
        mouseWeight={0.05}
        delay={150}
        style={{ width: "92%" }}
      />
      <LogoSvg
        key={"#ffff66"}
        animatedXOffset={-3.8}
        animatedYOffset={-4.7}
        color="yellow"
        delay={180}
        mouseWeight={0.04}
        style={{ width: "93%" }}
      />

      <style jsx>{``}</style>
    </div>
  );
};

export default AnimatedLogo;
