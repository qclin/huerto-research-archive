import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

 function Figure({item, imageData, onSelect}){
  const image = getImage(imageData)
  return (
    <button onClick={onSelect}>
    <figure key={`${item.CATEGORY}.${item.IDENTIFIER}`}>
      {imageData && <GatsbyImage image={image} alt={item.TITLE} className="h-auto"/>}
      <figcaption>{item.TITLE}</figcaption>
    </figure>
    </button>
)

}

export default Figure