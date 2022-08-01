import Image from "next/image";
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
    <>
      <header>
        <nav>
          <div className="container">
            <div className="logo-container">
              <Image src={`/images/logowhite.png`} layout={"fill"} />
            </div>
            {renderMenu()}
          </div>
        </nav>
      </header>
      <style jsx>{`
        header {
        }
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 20;
        }

        .logo-container {
          z-index: 20;
          width: 500px;
          height: 300px;
          transition: transform 0.82s cubic-bezier(0.075, 0.82, 0.165, 1);
          animation: fadeInLight 2s 2.82s cubic-bezier(0.075, 0.82, 0.165, 1)
            forwards;
          position: relative;
          top: calc(-150px);
          margin-bottom: -14px;
          position: absolute;
          opacity: 0;
        }
        @keyframes fadeInLight {
          0% {
            transform: translateY(-140px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.16;
          }
        }

        img {
        }
      `}</style>
    </>
  );
};

export default Header;
