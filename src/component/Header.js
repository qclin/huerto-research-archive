import * as React from "react"
import NextArrow from "../images/icons/next-arrow.svg";
import clsx from "clsx";
import { getColorScheme } from "../utils/helper";

function Header({isList, onToggleView, onNext}){
  const scheme = getColorScheme()
  const sideButtonClasses = "py-4 focus:outline-none uppercase"

  return (
    <header className={clsx(scheme.lightBg, scheme.text, "w-screen fixed left-0 top-0 grid md:grid-cols-5  uppercase items-center text-xs text-center")}>
      <button className={clsx(sideButtonClasses, "border-r")}
          onClick={onToggleView}>VIEW AS {isList ? 'plot': 'list'}
      </button>
      <div className="md:col-span-3">plot in dialogue: An Archive</div>
      <button className={clsx(sideButtonClasses, "border-l flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed")} onClick={onNext} disabled={isList}>
        next plot <NextArrow className={clsx(scheme.text, "ml-2")}/>
      </button>
    </header>
  )
}

export default Header