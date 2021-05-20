import React, { FunctionComponent } from "react";
import routes from "../../routes";
import { HEADER_HEIGHT } from "../../vars";
import TextBold from "../TextBold";
import ThreeDModel from "../ThreeDModel";
import HeaderLink from "./HeaderLink";

interface Props {
  children?: React.ReactNode;
}

const Header: FunctionComponent<Props> = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div
            className="logo-container"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ThreeDModel />
            <TextBold>THE ALGORITHM</TextBold>
          </div>
          <div className="routes-container">
            <HeaderLink href={routes.home}>HOME</HeaderLink>
            <HeaderLink href={routes.merch}>MERCH</HeaderLink>
            <HeaderLink href={routes.discography}>DISCOGRAPHY</HeaderLink>
            <HeaderLink href={routes.about}>ABOUT</HeaderLink>
          </div>
          <style jsx>{`
            .container {
              display: flex;
              justify-content: space-between;
              z-index: 20222;
              height: ${HEADER_HEIGHT}px;
            }

            .logo-container {
              z-index: 20;
            }
            .routes-container {
              display: flex;
              flex-direction: column;
              padding: 20px;
              z-index: 20;
            }
            img {
              width: calc(100% - 60px);
              max-width: 360px;
              height: auto;
            }
          `}</style>
        </div>
      </nav>
    </header>
  );
};

export default Header;
