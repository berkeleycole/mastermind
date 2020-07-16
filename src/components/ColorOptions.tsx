import React from "react";
import { connect } from "react-redux";
import { selectColor } from "../slices/gameSlice";
import { Color, ALL_COLORS } from "../common/types";
import ColorPeg from "./ColorPeg";

interface Props {
  handleClick: Function;
}

const mapPropsToDispatch: Props = {
  handleClick: selectColor
};

const ColorOptions: React.FC<Props> = (props: Props) => {
  const { handleClick } = props;

  return (
    <section id="colorOptions">
      <h3>Color Options:</h3>
      <p>Click to select</p>
      {ALL_COLORS.map((color: Color) => (
        <ColorPeg
          key={color}
          color={color}
          handleClick={(): void => handleClick(color)}
        />
      ))}
    </section>
  );
};

export default connect(null, mapPropsToDispatch)(ColorOptions);
