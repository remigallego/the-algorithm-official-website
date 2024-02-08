import React, { FunctionComponent, useState } from "react";
import useTimeout from "../../hooks/useTimeout";
import randomInteger from "../../utils/math";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  delay?: number;
  onFinish?: () => void;
  disableBlink?: boolean;
}

const FadeInBlink: FunctionComponent<Props> = ({
  children,
  delay,
  onFinish,
  disableBlink,
}) => {
  const [finished, setFinished] = useState(false);

  const childrenArray = !Array.isArray(children) ? [children] : children;

  const getCoefficient = (index: number) => {
    return 0.22 - index * 0.010;
  };

  useTimeout(() => {
    onFinish?.();
    setFinished(true);
  }, childrenArray?.length - 1 * getCoefficient(childrenArray.length) + (delay ?? 0) + 4000);

  return (
    <>
      {childrenArray.map((child, index) => {
        const coefficient = getCoefficient(index);
        return (
          <div
            style={{
              opacity: finished ? 1 : 0,
              animation: finished
                ? ""
                : `${disableBlink ? "fadeIn" : "fadeInBlink"} 0.${randomInteger(
                    17,
                    33
                  )}s ${index * coefficient + (delay ?? 0)}s ease-out forwards`,
            }}
          >
            {child}
            <style jsx>
              {`
                @keyframes fadeIn {
                  0% {
                    opacity: 0;
                  }
                  100% {
                    opacity: 1;
                  }
                }
                @keyframes fadeInBlink {
                  0% {
                    opacity: 0;
                  }
                  ${randomInteger(17, 22)}% {
                    opacity: 0.8;
                  }
                  ${randomInteger(37, 43)}% {
                    opacity: 0;
                  }
                  ${randomInteger(57, 63)}% {
                    opacity: 0.7;
                  }
                  ${randomInteger(74, 81)}%% {
                    opacity: 0;
                  }
                  100% {
                    opacity: 1;
                  }
                }
              `}
            </style>
          </div>
        );
      })}
    </>
  );
};

export default FadeInBlink;
