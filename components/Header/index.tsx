import React, { FunctionComponent } from "react";
import useMediaQueries from "../../hooks/useMediaQueries";
import routes from "../../routes";
import { HEADER_HEIGHT } from "../../vars";
import FadeInBlink from "../Animations/FadeInBlink";
import HeaderLink from "./HeaderLink";

interface Props {
  children?: React.ReactNode;
}

const Header: FunctionComponent<Props> = () => {
  const { smallScreen } = useMediaQueries();

  const renderMenu = () => {
    return (
      <>
        {!smallScreen && (
          <div className="routes-container">
            <FadeInBlink delay={1.4}>
              <HeaderLink href={routes.home}>HOME</HeaderLink>
              <HeaderLink href={"/merch"}>MERCH</HeaderLink>
              <HeaderLink href={routes.discography}>DISCOGRAPHY</HeaderLink>
              <HeaderLink href={routes.about}>ABOUT</HeaderLink>
            </FadeInBlink>
          </div>
        )}
        {smallScreen && (
          <div className="routes-container">
            <img
              src={`./images/hamburger.png`}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </div>
        )}
        <style jsx>{`
          .routes-container {
            display: flex;
            flex-direction: row;
            padding: 20px;
            z-index: 20;
            margin-top: 12px;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
      </>
    );
  };
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
            {/*   <ThreeDModel /> */}
          </div>
          {renderMenu()}
          <style jsx>{`
            .container {
              display: flex;
              justify-content: space-between;
              z-index: 20;
              height: ${HEADER_HEIGHT}px;
            }

            .logo-container {
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
