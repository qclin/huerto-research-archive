import React  from "react"
import {  Link } from "gatsby"

import { Corners } from "../component/corners"
import { getColorScheme } from "../utils/helper";
import clsx from "clsx";

function IndexPage(){
  const scheme = getColorScheme()

  return (
    <div className={clsx(scheme.lightBg, "p-6 h-screen")}>
      <Corners showBottom/>
      <div className={clsx(scheme.border, "bg-eggwash h-full flex justify-center items-center border")}>
        <div className="text-center">
        <h1 className="text-5xl uppercase mb-4">Plot in Dialogue: An Archive </h1>
        <Link className="uppercase" to="/garden">Enter the Garden</Link>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
