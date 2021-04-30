import { AppProps } from "next/app";
import { PageTransition } from "next-page-transitions";
import Layout from "../components/Layout";
import { TRANSITION_DELAY } from "../vars";
import "./css/reset.css";

function CustomApp({ Component, pageProps, router }: AppProps): JSX.Element {
  if (typeof window === "undefined") {
    return <div></div>;
  }
  return (
    <Layout>
      <PageTransition timeout={TRANSITION_DELAY} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
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
