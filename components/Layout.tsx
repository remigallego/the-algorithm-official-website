import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Socials from "./Socials";
import { useRouter } from "next/dist/client/router";
import routes from "../routes";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "The Algorithm Official Website",
}: Props) => {
  const route = useRouter();
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
      <Socials />
      <style global jsx>{`
        .social {
          cursor: pointer;
          width: 20px;
          height: 20px;
          margin-bottom: 10px;
        }
        body {
          user-select: none;
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
          overflow-y: hidden;
        }
        .bold-text,
        ± .light-text,
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
        .headline {
          font-size: 64px;
          text-shadow: 0px 0px 10px rgb(0 255 255 / 50%), 0px 0px 2px #fff;
        }
      `}</style>
    </div>
  );
};

export default Layout;
