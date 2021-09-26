import React  from "react"
import Pill from "./pill";
import {  countOccurences } from "../utils/helper";
import clsx from "clsx";


function PlotSummary({className, selectedSet, selectedCategory, setSelectedCategory, }) {

  const ocurrences = countOccurences(selectedSet);
  return (
    <ul className={className}>
      {Object.entries(ocurrences).map(([key, value]) => (
          <Pill
            key={key}
            className={clsx(selectedCategory === key && "bg-yellow", "block w-min whitespace-nowrap uppercase mb-2")}
            onMouseEnter={() => setSelectedCategory(key)}
            onMouseLeave={() => setSelectedCategory(null)}
          >{key} ({value})</Pill>

      ))}
    </ul>
  )
}

export default PlotSummary