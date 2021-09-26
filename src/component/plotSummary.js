import React  from "react"
import Pill from "./pill";
import {  countOccurences } from "../utils/helper";


function PlotSummary({className, selectedSet}) {

  const ocurrences = countOccurences(selectedSet);

  return (
    <ul className={className}>
      {Object.entries(ocurrences).map(([key, value]) => (
        <button key={key} className="block mb-2 focus:outline-none">
          <Pill className="block w-min whitespace-nowrap uppercase">{key} ({value})</Pill>
        </button>
      ))}
    </ul>
  )
}

export default PlotSummary