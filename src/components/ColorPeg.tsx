import React from "react";
import CSS from "csstype";
import { Color } from "../common/types";

const styles = (color: Color): CSS.Properties => {
  return {
    height: "50px",
    width: "50px",
    backgroundColor: color,
    borderRadius: "50%",
    cursor: "pointer"
  };
};

interface Props {
  color: Color;
  handleClick: any;
}

const ColorPeg: React.FC<Props> = (props: Props) => {
  const { handleClick, color } = props;

  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  return <div style={styles(color)} onClick={handleClick} />;
};

export default ColorPeg;
