import React, { FunctionComponent } from "react";
import { useStyles } from "../hooks/useStyles";

interface Props {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const TextLight: FunctionComponent<Props> = (props) => {
  return (
    <p style={{ ...styles.textStyle, ...props.style }}>{props.children}</p>
  );
};

export default TextLight;

const styles = useStyles({
  textStyle: {
    fontWeight: "lighter",
    fontFamily: "NeueMachina",
    color: "white",
    fontSize: "12px",
    margin: 0,
    padding: 0,
  },
});
