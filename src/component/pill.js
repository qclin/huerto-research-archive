
import React from "react";
import clsx from "clsx";

function Pill({className, children}){
  return <span className={clsx(className, "text-base bg-white rounded-full px-4 py-2")}>
    {children}
  </span>
}

export default Pill