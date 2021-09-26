import React, { useMemo, useState } from "react"
import { selectSome, findImageData } from "../utils/helper";
import Figure from "../component/figure";
import PreviewModal from "./modal";
import Chance from "chance";
import clsx from "clsx";
import chunk from "lodash/chunk";

function GridView({groupedFields, images, current}) {
  const chance = new Chance();
  const selectedSet = useMemo(() => selectSome(groupedFields), [current]);
  const [preview, setPreview] = useState()

  const groupedSet = chunk(selectedSet, 3)
  const rowAlign = ["justify-end", "justify-center", "justify-start"]

  const Placeholder = ({item}) => {
    const sizes = ["w-1/6 h-100", "w-1/4 h-50"]
    return <div className={clsx(chance.pickone(sizes), "bg-docYellow text-center justify-center items-center mx-2 shadow-md")}><span>{item.IDENTIFIER}</span></div>
  }
  return (
  <section
    className="max-w-7xl mx-auto overflow-y-hidden"
    style={{ height: 'calc(100vh - 4.5rem)'}}>
    {groupedSet.map((list, listIndex) => (

      <div key={listIndex} className={clsx(rowAlign[listIndex], "flex h-1/3 mb-3")}>
      {list.map((item, index) => {
          const imageData = findImageData(images.nodes, item)
          if(!imageData) return  <Placeholder item={item}/>

          const { height, width } = imageData?.childImageSharp?.original
          const aspectRatio = width/height
          return (
            <Figure
              item={item}
              imageData={imageData}
              onSelect={() => setPreview({item, imageData})}
              className={clsx(aspectRatio > 1 ? "w-1/6" : "w-1/4", "mx-2")}
              key={`image.${item.IDENTIFIER}.${index}`}/>
            )
          }
        )}
      </div>
    ))}
    <PreviewModal preview={preview} onClose={() => setPreview(null)}></PreviewModal>
  </section>
  )
}

export default GridView