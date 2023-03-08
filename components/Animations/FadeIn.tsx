import React, { FunctionComponent, useEffect, useState } from "react";
import useTimeout from "../../hooks/useTimeout";
import randomInteger from "../../utils/math";
import { Line } from "../Terminal";

interface Props {
  delay: number;
  lines: Line[];
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
}> = ({ children: character, bold }) => {
  const [content, setContent] = useState(randomCharacterOrSymbol());

  useTimeout(() => {
    setContent(character);
  }, randomInteger(0, 800));

  useEffect(() => {
    setContent(randomCharacterOrSymbol());

    /*    setTimeout(() => {
      setContent(character);
    }, offset * 1000); */
  }, [character]);

  return (
    <div
      className="char"
      style={{
        /*   animation: `fadeIn 0s ${offset * 0.85}s ease-out forwards, ${
          bold ? "blink" : ""
        } ${mouseOver ? "0.1s" : "0.4s"} ${
          offset * 0.85
        }s ease-out forwards infinite`, */
        // color: content === character ? "#11f24a" : "#91ffad",
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
            font-size: 16px;
            font-family: "SourceCodePro";
            color: black;
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
  const [mouseOver, setMouseOver] = useState<string | null>(null);

  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    if (mouseOver) {
      setRandomNumber(randomInteger(0, 1020));
      randomNumber;
    }
  }, [mouseOver]);

  return (
    <>
      {lines.map((line, index) => {
        const time = index * 0.1;
        const isBold = line.action ? true : false;
        return (
          <div onClick={() => line.action?.()}>
            <p
              onMouseOver={() => {
                setMouseOver(line.text);
              }}
              onMouseOut={() => {
                setMouseOver(null);
              }}
              className="terminal-title"
              style={{
                cursor: line.action ? "pointer" : "",
                transition: "all 0.2s ease-in-out",
              }}
            >
              {line.text.split("").map((char, idx) => {
                const offset = time + delay + idx * 0.011;
                return (
                  <Char
                    key={
                      line +
                      index.toString() +
                      idx.toString() +
                      randomCharacterOrSymbol()
                    }
                    offset={offset}
                    bold={isBold}
                    mouseOver={mouseOver === line.text}
                  >
                    {char}
                  </Char>
                );
              })}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default FadeIn;
