import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { findImageData } from "../utils/helper";


 function Figure({item, images}){

  const imageData = findImageData(images.nodes, item)
  const image = getImage(imageData)
  return (
    <figure key={`${item.CATEGORY}.${item.IDENTIFIER}`}>
      {imageData && <GatsbyImage image={image} alt={item.TITLE} className="h-auto"/>}
      <figcaption>{item.TITLE}</figcaption>
    </figure>
)

}

export default Figure