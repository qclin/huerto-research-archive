import * as React from "react"
import NextArrow from "../images/icons/next-arrow.svg";
import clsx from "clsx";
import { getColorScheme } from "../utils/helper";

function Footer({isList, onToggleView, onNext}){
  const scheme = getColorScheme()
  const sideButtonClasses = "border-l border-r py-4 focus:outline-none uppercase"

  return (
    <footer className={clsx(scheme.lightBg, scheme.text, "w-screen fixed bottom-0 grid md:grid-cols-5  uppercase items-center text-xs text-center")}>
      <button className={sideButtonClasses}
          onClick={onToggleView}>VIEW AS {isList ? 'plot': 'list'}
      </button>
      <div className="md:col-span-3">plot in dialogue: An Archive</div>
      <button className={clsx(sideButtonClasses, "flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed")} onClick={onNext} disabled={isList}>
        next plot <NextArrow className={clsx(scheme.text, "ml-2")}/>
      </button>
    </footer>
  )
}

export default Footer