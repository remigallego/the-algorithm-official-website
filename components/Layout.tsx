import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import TextBold from "./TextBold";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "The Algorithm Official Website",
}: Props) => (
  <div style={{}}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/fonts/fonts.css" />
    </Head>
    <header>
      <nav>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Link href="/">
            <TextBold>Home</TextBold>
          </Link>{" "}
          |{" "}
          <Link href="/merch">
            <TextBold>Merch</TextBold>
          </Link>{" "}
          |{" "}
          <Link href="/discography">
            <TextBold>Discography</TextBold>
          </Link>
        </div>
      </nav>
    </header>
    {children}
    <footer></footer>
  </div>
);

export default Layout;
