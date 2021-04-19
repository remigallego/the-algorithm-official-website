import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import VideoBackground from "./VideoBackground";
import routes from "../routes";
import { useRouter } from "next/dist/client/router";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "The Algorithm Official Website",
}: Props) => {
  const router = useRouter();
  return (
    <div style={{}}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </Head>
      <Header />
      {children}
      <VideoBackground
        src={"./videos/glitch.mp4"}
        blackened={router.route !== routes.home}
      />
      <style global jsx>{`
        body {
          background: #011212;
          overflow-x: hidden;
          overflow-y: hidden;
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
      <footer></footer>
    </div>
  );
};

export default Layout;
