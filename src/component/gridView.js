import React, { useMemo, useState } from "react"
import { selectSome, findImageData } from "../utils/helper";
import Figure from "../component/figure";
import PreviewModal from "./modal";

function GridView({groupedFields, images, current}) {

  const selectedSet = useMemo(() => selectSome(groupedFields), [current]);
  const [preview, setPreview] = useState()

  return (
  <section className="grid grid-rows-3 grid-flow-col gap-4 overflow-y-hidden"
    style={{ height: 'calc(100vh - 4.5rem)'}}>

    {selectedSet.map((item, index) => {
        const imageData = findImageData(images.nodes, item)
        return (
          <Figure
            item={item}
            imageData={imageData}
            onSelect={() => setPreview({item, imageData})}
            key={`image.${item.IDENTIFIER}.${index}`}/>
        )
      }
    )}
    <PreviewModal preview={preview} onClose={() => setPreview(null)}></PreviewModal>
  </section>
  )
}

export default GridView