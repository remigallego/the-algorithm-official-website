import React, { FunctionComponent, useState } from "react";
import useTimeout from "../../hooks/useTimeout";
import randomInteger from "../../utils/math";

interface Props {
  delay: number;
  lines: string[];
  onFinish?: () => void;
  disableBlink?: boolean;
}

const flattenArray = (arr: any[]): any[] => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenArray(curr));
    }
    return acc.concat(curr);
  }, []);
};

const randomCharacterOrSymbol = (): string => {
  const random = randomInteger(0, 2);
  if (random === 0) {
    return String.fromCharCode(randomInteger(65, 90));
  } else if (random === 1) {
    return String.fromCharCode(randomInteger(97, 122));
  }
  return String.fromCharCode(randomInteger(33, 47));
};

const Char: FunctionComponent<{ children: string; offset: number }> = ({
  children,
  offset,
}) => {
  const [content, setContent] = useState(randomCharacterOrSymbol());
  useTimeout(() => {
    setContent(children);
  }, offset * 1000);
  return (
    <div
      className="char"
      style={{
        opacity: 0,
        animation: `fadeIn 0s ${offset * 0.85}s ease-out forwards`,
        color: content === children ? "#11f24a" : "#91ffad",
      }}
    >
      {content}
      <style jsx>
        {`
          .char {
            display: inline-block;
            all: unset;
            margin: 0;
            padding: 0;
            font-size: 18px;
            font-family: "SourceCodePro";
            font-weight: normal;
            color: #11f24a;
          }
          @keyframes fadeIn {
            0% {
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
};

const FadeIn: FunctionComponent<Props> = ({ lines, delay }) => {
  return (
    <>
      {lines.map((child, index) => {
        const time = index * 0.1;
        return (
          <div>
            <p className="terminal-title">
              {" "}
              {child.split("").map((char, idx) => {
                const offset = time + delay + idx * 0.011;
                return <Char offset={offset}>{char}</Char>;
              })}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default FadeIn;
