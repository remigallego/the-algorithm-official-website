import React, { FunctionComponent } from "react";
import randomInteger from "../../utils/math";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  delay?: number;
}

const FadeInBlink: FunctionComponent<Props> = (props) => {
  const children = !Array.isArray(props.children)
    ? [props.children]
    : props.children;

  return (
    <>
      {children.map((child, index) => {
        const coefficient = 0.22 - index * 0.017;
        return (
          <div
            style={{
              opacity: 0,
              animation: `fadeInBlink 0.${randomInteger(17, 33)}s ${
                index * coefficient + (props.delay ?? 0)
              }s ease-out forwards`,
            }}
          >
            {child}
            <style jsx>
              {`
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
