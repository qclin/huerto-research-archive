import React, { useMemo, useState } from "react"
import { selectSome, findImageData } from "../utils/helper";
import Figure from "../component/figure";
import PreviewModal from "./modal";

function GridView({groupedFields, images, current}) {

  const selectedSet = useMemo(() => selectSome(groupedFields), [current]);
  const [preview, setPreview] = useState()

  return (
    <section className="h-screen grid grid-rows-3 grid-flow-col gap-4">
    {selectedSet.map((item) => {
      const imageData = findImageData(images.nodes, item)
      return (
        <Figure item={item} imageData={imageData} onSelect={() => setPreview({item, imageData})}/>
      )
    })}

    <PreviewModal preview={preview} onClose={() => setPreview(null)}></PreviewModal>
  </section>
  )
}

export default GridView