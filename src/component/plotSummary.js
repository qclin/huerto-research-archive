import React from "react";
import Pill from "./pill";
import { countOccurences } from "../utils/helper";
import { bgByCategory } from "../utils/colors";
import clsx from "clsx";

function PlotSummary({
  className,
  selectedSet,
  selectedCategory,
  setSelectedCategory,
}) {
  const ocurrences = countOccurences(selectedSet);

  return (
    <ul className={className}>
      {Object.entries(ocurrences).map(([key, value]) => {
        const isSelected = selectedCategory === key;
        const categoryColor = bgByCategory[key.toLowerCase()];

        return (
          <Pill
            key={key}
            className={clsx(
              isSelected ? "border-white cursor" : `border-${categoryColor}`,
              "border-2 block w-min whitespace-nowrap uppercase mb-2",
              `bg-[${categoryColor}]`,
            )}
            onMouseEnter={() => setSelectedCategory(key)}
            onMouseLeave={() => setSelectedCategory(null)}
          >
            {key.replace(/-/g, " ")} ({value})
          </Pill>
        );
      })}
    </ul>
  );
}

export default PlotSummary;
