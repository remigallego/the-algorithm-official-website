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

const Char: FunctionComponent<{
  children: string;
  offset: number;
  bold: boolean;
  mouseOver: boolean;
}> = ({ children, offset, bold, mouseOver }) => {
  const [content, setContent] = useState(randomCharacterOrSymbol());
  useTimeout(() => {
    setContent(children);
  }, offset * 1000);
  return (
    <div
      className="char"
      style={{
        opacity: 0,
        animation: `fadeIn 0s ${offset * 0.85}s ease-out forwards, ${
          bold ? "blink" : ""
        } ${mouseOver ? '0.1s' : '0.4s'} ${offset * 0.85}s ease-out forwards infinite`,
        color: content === children ? "#11f24a" : "#91ffad",
        fontWeight: bold ? "bold" : "normal",
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
          @keyframes blink {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0.6;
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
  const [mouseOver, setMouseOver] = useState<string | null>(null);
  return (
    <>
      {lines.map((child, index) => {
        const time = index * 0.1;
        const isBold = child === "LISTEN" || child === "BUY";
        return (
          <div>
            <p
              onMouseOver={() => {
                setMouseOver(child);
              }}
              onMouseOut={() => {
                setMouseOver(null);
              }}
              className="terminal-title"
              style={{
                cursor: isBold ? "pointer" : "",
              }}
            >
              {child.split("").map((char, idx) => {
                const offset = time + delay + idx * 0.011;
                return (
                  <Char offset={offset} bold={isBold} mouseOver={mouseOver === child}>
                    {char}
                  </Char>
                );
              })}
            </p>
          </div>
        );
      })}
      <style jsx>
        {`
          .terminal-title {
          }
          .terminal-title:hover {
          }
        `}
      </style>
    </>
  );
};

export default FadeIn;
