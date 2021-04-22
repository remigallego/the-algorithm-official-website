import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import Header from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "The Algorithm Official Website",
}: Props) => {
  useEffect(() => {}, []);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
      </Head>
      <Header />
      {children}
      <div
        style={{
          position: "absolute",
          right: 20,
          bottom: 20,
          flexDirection: "column",
          display: "flex",
        }}
      >
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
      </div>
      <footer></footer>
      <style global jsx>{`
        .social {
          cursor: pointer;
          width: 20px;
          height: 20px;
          margin-bottom: 10px;
        }
        body {
          background: rgb(5, 5, 54);
          background: linear-gradient(
            180deg,
            rgba(5, 5, 54, 1) 5%,
            rgba(1, 18, 18, 1) 100%
          );
          height: 100%;
          margin: 0;
          background-repeat: no-repeat;
          background-attachment: fixed;
          overflow-x: hidden;
        }
        .bold-text,
        .light-text,
        .regular-text {
          font-size: 12px;
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
      `}</style>
    </div>
  );
};

export default Layout;
