import React, { FunctionComponent } from "react";
import { useStyles } from "../hooks/useStyles";

interface Props {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const TextBold: FunctionComponent<Props> = (props) => {
  return (
    <p style={{ ...styles.textStyle, ...props.style }}>{props.children}</p>
  );
};

export default TextBold;

const styles = useStyles({
  textStyle: {
    fontWeight: "bold",
    fontFamily: "NeueMachina",
    color: "white",
    fontSize: "12px",
    margin: 0,
    padding: 0,
  },
});
