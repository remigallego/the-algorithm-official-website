import React, { FunctionComponent } from "react";
import { useStyles } from "../hooks/useStyles";

interface Props {
  style: React.CSSProperties;
  children?: React.ReactNode;
}

const TextRegular: FunctionComponent<Props> = (props) => {
  return (
    <p style={{ ...styles.textStyle, ...props.style }}>{props.children}</p>
  );
};

export default TextRegular;

const styles = useStyles({
  textStyle: {
    fontWeight: "normal",
    fontFamily: "NeueMachina",
    color: "white",
    fontSize: "12px",
    margin: 0,
    padding: 0,
  },
});
