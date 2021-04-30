import { Container } from "next/app";
import LogoSvg from "../components/LogoSvg";
import useWindowSize from "../hooks/useWindowSize";
import { HEADER_HEIGHT } from "../vars";

const IndexPage = () => {
  const windowSize = useWindowSize();

  return (
    <Container>
      <div
        style={{
          width: windowSize.width,
          boxSizing: "border-box",
          height: (windowSize.height ?? 10) - HEADER_HEIGHT,
        }}
      >
        <LogoSvg />
      </div>
    </Container>
  );
};

export default IndexPage;
