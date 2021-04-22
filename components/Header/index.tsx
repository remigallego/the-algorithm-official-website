import React, { FunctionComponent } from "react";
import routes from "../../routes";
import AppLink from "../AppLink";
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
          <AppLink href={routes.home}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                id="threed"
                style={{
                  height: 100,
                }}
              >
                <ThreeDModel />
              </div>
              <TextBold>THE ALGORITHM</TextBold>
            </div>
          </AppLink>
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
              margin: 4% 3%;
            }
            .routes-container {
              display: flex;
              flex-direction: column;
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
