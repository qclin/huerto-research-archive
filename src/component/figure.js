import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Pill from "./pill";


function Figure({item, imageData, onSelect, isFocus, ...rest}){
  const image = getImage(imageData)
  return (
    <button onClick={onSelect} {...rest}>
      <figure key={`${item.CATEGORY}.${item.IDENTIFIER}`} className="relative">
        <GatsbyImage image={image} alt={item.TITLE} className="shadow-md"/>
        <figcaption className="sr-only">{item.TITLE}</figcaption>
        {isFocus && <Pill isOverlay>{item.TITLE}</Pill>}
      </figure>
    </button>
  )
}

export default Figure