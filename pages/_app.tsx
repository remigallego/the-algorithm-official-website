import { AppProps } from "next/app";
import { PageTransition } from "next-page-transitions";
import Layout from "../components/Layout";
import { TRANSITION_DELAY } from "../vars";
import "./css/reset.css";
import { useState } from "react";
import AnimatedLogo from "../components/AnimatedLogo";
import useWindowSize from "../hooks/useWindowSize";
import useTimeout from "../hooks/useTimeout";
import Script from "next/script";

const LOADING_TIME = 1100;

function CustomApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  const windowSize = useWindowSize();

  if (typeof window === "undefined") {
    return <div></div>;
  }
  useTimeout(() => {
    setLoading(false);
  }, LOADING_TIME);

  router.events.on("routeChangeStart", () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, LOADING_TIME);
    console.log("routeChangeStart");
  });

  const renderSvgFilter = () => {
    return (
      <>
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
        <svg width="0" height="0">
          <filter id="chromaticabberration2">
            <feColorMatrix
              type="matrix"
              result="red_"
              values="0 0 1 0 0
          0 0 0 0 0 
          0 0 1 0 0 
          0 0 2 1 0"
            />
            <feOffset in="red_" dx="1" dy="0" result="red" />
            <feColorMatrix
              type="matrix"
              in="SourceGraphic"
              result="blue_"
              values="-1 0 0 0 0
          0 1 0 0 0 
          0 0 2 0 0 
          0 0 0 1 0"
            />
            <feOffset in="blue_" dx="-1" dy="0" result="blue" />
            <feBlend mode="screen" in="red" in2="blue" />
          </filter>
        </svg>
      </>
    );
  };

  return (
    <Layout>
      <PageTransition
        timeout={TRANSITION_DELAY}
        classNames="page-transition"
        loadingCallbackName={loading}
      >
        {loading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: windowSize.height ?? 200 - 200,
              width: windowSize.width,
            }}
          >
            <AnimatedLogo shouldFadeAt={LOADING_TIME - 100} enableTransform />
          </div>
        ) : (
          <Component {...pageProps} key={router.route} />
        )}
      </PageTransition>
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LG38264ZVP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LG38264ZVP');
        `}
      </Script>
    </Layout>
  );
}

export default CustomApp;
