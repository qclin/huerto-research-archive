import React from "react";
import clsx from "clsx";

function Pill({ className, isOverlay, children, ...rest }) {
  const labelStyle =
    "absolute z-20 inset-1/2 w-32 h-8 shadow transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap overflow-ellipsis overflow-hidden";

  return (
    <span
      {...rest}
      className={clsx(
        className,
        "text-base rounded-full px-4 py-2",
        isOverlay && labelStyle,
        className.includes('bg-') ? "" : "bg-white"
      )}
    >
      {children}
    </span>
  );
}

export default Pill;
