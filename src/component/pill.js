
import React from "react";
import clsx from "clsx";

function Pill({className, children, ...rest}){
  return <span {...rest}
    className={clsx( "text-base bg-white rounded-full px-4 py-2", className)}>
    {children}
  </span>
}

export default Pill