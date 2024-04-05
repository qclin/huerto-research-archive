import React, { useMemo, useState } from "react"
import chunk from "lodash/chunk";

import { selectFew } from "../utils/helper";
import PlotSummary from "./plotSummary";
import PlotRow from "./plotRow";
import PreviewModal from "./modal";

function PlotView({groupedFields, images, current}) {
  const selectedSet = useMemo(() => selectFew(groupedFields), [current, groupedFields]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [preview, setPreview] = useState()

  const groupedSet = chunk(selectedSet, 3)
  const rowAlign = ["justify-end items-end", "justify-center", "justify-start"]

  return (
  <section
    className="overflow-y-hidden"
    style={{ height: 'calc(100vh - 4.5rem)'}}>
      <PlotSummary className="absolute m-4" selectedSet={selectedSet}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <section className="mx-auto h-full flex flex-col justify-center max-w-70vw 2xl:max-w-80vw">
        {groupedSet.map((list, listIndex) => (
          <PlotRow key={`row.${listIndex}`}
            items={list}
            className={rowAlign[listIndex]}
            setPreview={setPreview}
            images={images}
            selectedCategory={selectedCategory}
            />
        ))}
    </section>
    <PreviewModal preview={preview} onClose={() => setPreview(null)}></PreviewModal>
  </section>
  )
}

export default PlotView
