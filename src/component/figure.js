import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Pill from "./pill";


function Figure({item, imageData, onSelect, isFocus, ...rest}){
  const image = getImage(imageData)
  return (
    <button onClick={onSelect} {...rest}>
    <figure key={`${item.CATEGORY}.${item.IDENTIFIER}`} className="shadow-md relative">
      <GatsbyImage image={image} alt={item.TITLE}/>
      <figcaption className="sr-only">{item.TITLE}</figcaption>
      {isFocus && <Pill className="
      absolute z-20 inset-1/2 w-32 h-8 shadow
      transform -translate-x-1/2 -translate-y-1/2
      whitespace-nowrap overflow-ellipsis overflow-hidden">{item.TITLE}</Pill> }
    </figure>
    </button>
  )
}

export default Figure