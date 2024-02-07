import { useMediaQuery } from "react-responsive";

const useMediaQueries = () => {
  const extraBigScreen = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const bigScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const mediumScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const smallScreen = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return {
    extraBigScreen,
    bigScreen,
    mediumScreen,
    smallScreen,
  };
};

export default useMediaQueries;
