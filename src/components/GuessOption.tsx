/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
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

const activeStyles = (color: Color): CSS.Properties => {
  return {
    height: "50px",
    width: "50px",
    border: "3px solid red",
    backgroundColor: color,
    borderRadius: "50%",
    cursor: "pointer"
  };
};

interface Props {
  color: Color;
  isActive: boolean;
  handleClick: any;
}

const ColorPeg: React.FC<Props> = (props: Props) => {
  const { handleClick, color, isActive } = props;

  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  return (
    <div
      style={isActive ? activeStyles(color) : styles(color)}
      onClick={handleClick}
    />
  );
};

export default ColorPeg;
