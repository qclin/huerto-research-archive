import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getColorScheme } from "../utils/helper";
import clsx from "clsx";


function Figure({item, imageData, onSelect, ...rest}){
  const image = getImage(imageData)
  return (
    <button onClick={onSelect} {...rest}>
    <figure key={`${item.CATEGORY}.${item.IDENTIFIER}`} className="w-full shadow-md">
      <GatsbyImage image={image} alt={item.TITLE}/>
      <figcaption className="sr-only">{item.TITLE}</figcaption>
    </figure>
    </button>
  )
}

export default Figure