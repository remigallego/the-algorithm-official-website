import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import { HEADER_HEIGHT } from "../vars";
import { GoogleAnalytics } from "nextjs-google-analytics";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "The Algorithm Official Website",
}: Props) => {
  const getPagePath = () => {
    if (typeof window === "undefined") {
      return "";
    }
    return window.location.pathname;
  };

  const isLinks = getPagePath() === "/links";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
      </Head>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-LG38264ZVP" />
      {/*   {!isLinks && (
        <div
          style={{
            position: "fixed",
            width: "100%",
          }}
        >
          <Header />
        </div>
      )} */}
      <div
        className="wrapper"
        style={{
          paddingTop: HEADER_HEIGHT,
        }}
      >
        {children}
      </div>
      <style global jsx>{`
        .social {
          cursor: pointer;
          width: 20px;
          height: 20px;
          margin-bottom: 10px;
        }
        body {
          user-select: none;
          height: 100%;
          margin: 0;
          background-repeat: no-repeat;
          background-attachment: fixed;
          overflow-x: hidden;
          background-color: rgb(5, 15, 52);
        }

        .wrapper {
          overflow-x: hidden;
        }
        .bold-text,
        .light-text,
        .regular-text {
          font-size: 28px;
          font-family: "NeueMachina";
          margin: 0;
          padding: 0;
          color: white;
          display: inline-block;
          text-decoration: none;
        }
        .bold-text {
          font-weight: bold;
        }
        .light-text {
          font-weight: lighter;
        }
        .regular-text {
          font-weight: normal;
        }
        .headline {
          font-size: 64px;
          text-shadow: 0px 0px 10px rgb(0 255 255 / 50%), 0px 0px 2px #fff;
        }
        .opacity-fadein {
          animation: fadeIn 2.9s 1.5s cubic-bezier(0.2, 0.14, 0, 1.1) forwards;
          opacity: 0;
        }

        .slide-and-fade-animation {
          width: inherit;
          height: inherit;
          opacity: 0;
          animation: fadeIn 0.4s 0.4s ease-in-out forwards,
            slide 1.1s 0.4s cubic-bezier(0.17, 0.67, 0.36, 1.09) forwards;
        }

        body::-webkit-scrollbar {
          display: none;
          width: 10px;
        }
        body::-webkit-scrollbar-track {
          background: rgb(5, 5, 54);
        }
        body::-webkit-scrollbar-thumb {
          background-color: #00bfbf;
          border-radius: 5px;
        }

        /* variables */
        * {
          --small-breakpoint: 600px;
          --medium-breakpoint: 900px;
          --large-breakpoint: 1200px;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes slide {
          0% {
            transform: translateX(40px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
