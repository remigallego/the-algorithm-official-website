import Image from "next/image";
import React, { FunctionComponent } from "react";

interface Props {
  children?: React.ReactNode;
}

const Header: FunctionComponent<Props> = () => {

  const renderMenu = () => {
    return (
      <>
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
      <div>
        <nav>
          <div className="container">
            <div className="logo-container">
              <Image src={`/images/logowhite.png`} layout={"fill"} />
            </div>
            {renderMenu()}
          </div>
        </nav>
      </div>
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
          width: 400px;
          height: 220px;
          transition: transform 0.82s cubic-bezier(0.075, 0.82, 0.165, 1);
          animation: fadeInLight 2s 2.82s cubic-bezier(0.075, 0.82, 0.165, 1)
            forwards;
          position: relative;
          top: calc(-110px);
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
