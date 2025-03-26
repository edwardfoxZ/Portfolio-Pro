import React from "react";

export const ShinyEffect = ({ left, right, top, size = 500 }) => {
  const positionVarients = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
  };

  if (left !== undefined) {
    positionVarients.left = `${left}px`;
  }

  if (right !== undefined) {
    positionVarients.right = `${right}px`;
  }

  return <div className="shiny-effect" style={positionVarients}></div>;
};
