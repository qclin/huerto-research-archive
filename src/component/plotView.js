import React, { useMemo, useState } from "react"
import chunk from "lodash/chunk";

import { selectSome } from "../utils/helper";
import PlotSummary from "./plotSummary";
import PlotRow from "./plotRow";
import PreviewModal from "./modal";

function PlotView({groupedFields, images, current}) {
  const selectedSet = useMemo(() => selectSome(groupedFields), [current]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [preview, setPreview] = useState()

  const groupedSet = chunk(selectedSet, 3)
  const rowAlign = ["justify-end items-end", "justify-center", "justify-start"]

  return (
  <section
    className="overflow-y-hidden py-4"
    style={{ height: 'calc(100vh - 4.5rem)'}}>
      <PlotSummary className="absolute mx-4" selectedSet={selectedSet}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <section className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto h-full">
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