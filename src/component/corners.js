import React from "react";
import clsx from "clsx";
import { getColorScheme } from "../utils/helper";

const corners = {
  topLeft: "top-0 left-0 border-r border-b",
  topRight: "top-0 right-0 border-l border-b",
  bottomLeft: "bottom-0 left-0 border-r border-t",
  bottomRight: "bottom-0 right-0 border-l border-t",
};

export function Corners(showBottom) {
  const scheme = getColorScheme();

  const square = (className) => (
    <span
      className={clsx(className, "fixed", scheme.border)}
      style={{
        width: "25px",
        height: "25px",
      }}
    ></span>
  );

  return (
    <>
      {square(corners.topLeft)}
      {square(corners.topRight)}
      {showBottom && square(corners.bottomLeft)}
      {showBottom && square(corners.bottomRight)}
    </>
  );
}
