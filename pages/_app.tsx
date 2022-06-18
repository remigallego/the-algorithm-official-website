import { AppProps } from "next/app";
import { PageTransition } from "next-page-transitions";
import Layout from "../components/Layout";
import { HEADER_HEIGHT, TRANSITION_DELAY } from "../vars";
import "./css/reset.css";
import { useState } from "react";
import AnimatedLogo from "../components/AnimatedLogo";
import useWindowSize from "../hooks/useWindowSize";
import useTimeout from "../hooks/useTimeout";

function CustomApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  if (typeof window === "undefined") {
    return <div></div>;
  }
  useTimeout(() => {
    setLoading(false);
  }, 1600);

  const windowSize = useWindowSize();

  router.events.on("routeChangeStart", () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
    console.log("routeChangeStart");
  });
  router.events.on("routeChangeComplete", () => {});

  const renderSvgFilter = () => {
    return (
      <svg width="0" height="0">
        <filter id="chromaticabberration">
          <feColorMatrix
            type="matrix"
            result="red_"
            values="2 0 0 0 0
          0 0 0 0 0 
          0 0 0 0 0 
          0 0 0 1 0"
          />
          <feOffset in="red_" dx="2" dy="0" result="red" />
          <feColorMatrix
            type="matrix"
            in="SourceGraphic"
            result="blue_"
            values="0 0 0 0 0
          0 1 0 0 0 
          0 0 2 0 0 
          0 0 0 1 0"
          />
          <feOffset in="blue_" dx="-3" dy="0" result="blue" />
          <feBlend mode="screen" in="red" in2="blue" />
        </filter>
      </svg>
    );
  };

  return (
    <Layout>
      {loading && (
        <div
          style={{
            width: windowSize.width,
            boxSizing: "border-box",
            height: (windowSize.height ?? 10) - HEADER_HEIGHT,
          }}
        >
          {/*   <MouseContext.Provider
        value={{
          x: mouse.clientX ?? 0,
          y: mouse.clientY ?? 0,
        }}
      > */}
          <AnimatedLogo shouldFadeAt={1200} />
          {/*  </MouseContext.Provider> */}
        </div>
      )}
      {!loading && (
        <PageTransition timeout={TRANSITION_DELAY} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      )}
      {renderSvgFilter()}
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </Layout>
  );
}

export default CustomApp;
