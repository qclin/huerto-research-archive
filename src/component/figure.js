import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getColorScheme } from "../utils/helper";
import clsx from "clsx";


function Figure({item, imageData, onSelect}){
  const image = getImage(imageData)
  const scheme = getColorScheme()

  return (
    <button onClick={onSelect}>
    <figure key={`${item.CATEGORY}.${item.IDENTIFIER}`}>
      {imageData && <GatsbyImage image={image} alt={item.TITLE} className="h-auto"/>}
      <figcaption className={clsx(scheme.text)}>{item.TITLE}</figcaption>
    </figure>
    </button>
  )
}

export default Figure