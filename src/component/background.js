import React from "react";
import Chance from "chance"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import clsx from "clsx";


const chance = new Chance();

function Background({images}){

  const imageSet = chance.pickset(images.nodes, 4);
  console.log("backtround", imageSet);

  const positions = [
    "top-20 -left-24",
    "top-6 -right-12",
    "bottom-24 -left-24",
    "bottom-12 -right-24",

  ]
  return (
    <div>
      {
        imageSet.map((imageData, index) => {
          const image = getImage(imageData);
          return (
            <div className={clsx("w-52 filter grayscale opacity-50 shadow backdrop-blur-sm drop-shadow fixed z-0", positions[index])}
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