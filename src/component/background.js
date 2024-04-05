import React from "react";
import Chance from "chance"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import clsx from "clsx";


const chance = new Chance();

function Background({images}){

  const imageSet = chance.pickset(images.nodes, 4);

  const positions = [
    "top-20 -left-28",
    "top-12 -right-24",
    "bottom-24 -left-24",
    "bottom-12 -right-28",

  ]
  return (
    <div>
      {
        imageSet.map((imageData, index) => {
          const image = getImage(imageData);
          return (
            <div className={clsx("w-52 filter grayscale opacity-50 brightness-125 shadow-md fixed z-0", positions[index])}
              style={{blur: "blur(2px)"}}
            >
              <GatsbyImage image={image} alt={imageData.Key} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Background