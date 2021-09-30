import React  from "react"
import clsx from "clsx";

import Figure from "./figure";
import { findImageData } from "../utils/helper";

function PlotRow({items, className, images, setPreview, selectedCategory}){

  const sizes = ["w-1/5 h-72", "w-1/4 h-60"]

  const Placeholder = ({item, index}) => (
    <div className={clsx(sizes[index % 2 ], "bg-eggwash text-center justify-center items-center mx-2 shadow-lg")}>
      <span>{item.IDENTIFIER}</span>
    </div>
  )

  return (
    <div className={clsx(className, "flex md:max-h-60 2xl:max-h-80 mb-3 items-center")}>
      {items.map((item, index) => {
          const imageData = findImageData(images.nodes, item)
          if(!imageData) return  <Placeholder item={item} index={index}/>

          const { height, width } = imageData?.childImageSharp?.original
          const aspectRatio = width/height
          return (
            <Figure
              item={item}
              imageData={imageData}
              isFocus={item.CATEGORY.includes(selectedCategory)}
              onSelect={() => setPreview({item, imageData})}
              className={clsx(aspectRatio > 1 ? "w-1/4" : "w-1/5", "mx-2")}
              key={`image.${item.IDENTIFIER}.${index}`}/>
            )
          }
        )}
    </div>
  )
}

export default PlotRow;