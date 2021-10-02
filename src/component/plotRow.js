import React  from "react"
import clsx from "clsx";

import Figure from "./figure";
import MarkedText from "./markedText";
import Pill from "./pill";

import { findImageData } from "../utils/helper";

function PlotRow({items, className, images, setPreview, selectedCategory}){

  const sizes = ["w-1/5 h-72", "w-1/4 h-60"]
  const buttonClass = "mx-2 shadow-lg focus:outline-none active:outline-none"
  const Placeholder = ({item, index}) => (
    <button onClick={() => setPreview({item})}
      className={clsx(sizes[index % 2 ], buttonClass,
      "bg-eggwash text-center justify-center items-center")}>
      <span>{item.TITLE}, {item.YEAR}</span>
    </button>
  )

  const RecipeCard = ({item, index}) => {
    const isFocus=item.CATEGORY.includes(selectedCategory)

    return (
    <button onClick={() => setPreview({item})}
        className={clsx(sizes[index % 2 ],
        isFocus ? "bg-eggwash" : "bg-white",
        "relative overflow-y-hidden overflow-ellipsis")}>
      <MarkedText text={item.RECIPE[0].data.Notes} className="p-6 text-sm text-left leading-4"/>
      {isFocus && <Pill className="
        absolute z-20 inset-1/2 w-32 h-8 shadow
        transform -translate-x-1/2 -translate-y-1/2
        whitespace-nowrap overflow-ellipsis overflow-hidden">
        {item.TITLE}
        </Pill> }
    </button>
  )}

  return (
    <div className={clsx(className, "flex md:max-h-60 2xl:max-h-80 mb-3 items-center")}>
      {items.map((item, index) => {
          const imageData = findImageData(images.nodes, item)
          const isRecipe = item.CATEGORY.includes("Recipe") && item.RECIPE
          if(isRecipe) return <RecipeCard key={`recipe-${index}`} item={item} index={index}/>

          if(!imageData) return  <Placeholder key={`placeholder-${index}`} item={item} index={index}/>

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