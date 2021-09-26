import React  from "react"
import clsx from "clsx";
import Chance from "chance";

import Figure from "./figure";
import { findImageData } from "../utils/helper";

const chance = new Chance();

function PlotRow({items, className, images, setPreview}){

  const Placeholder = ({item}) => {
    const sizes = ["w-1/5 h-72", "w-1/4 h-60"]
    return <div className={clsx(chance.pickone(sizes), "bg-docYellow text-center justify-center items-center mx-2 shadow-md")}><span>{item.IDENTIFIER}</span></div>
  }

  return (
    <div className={clsx(className, "flex max-h-72 mb-3 items-center")}>
      {items.map((item, index) => {
          const imageData = findImageData(images.nodes, item)
          if(!imageData) return  <Placeholder item={item}/>

          const { height, width } = imageData?.childImageSharp?.original
          const aspectRatio = width/height
          return (
            <Figure
              item={item}
              imageData={imageData}
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