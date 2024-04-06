import React from "react";
import clsx from "clsx";

import Figure from "./figure";
import MarkedText from "./markedText";
import Pill from "./pill";

import { findImageData } from "../utils/helper";
import { bgByCategory } from "../utils/colors";

function PlotRow({ items, className, images, setPreview, selectedCategory }) {
  const sizes = ["w-1/5 h-72", "w-1/4 h-60"];
  const buttonClass = "mx-2 shadow-lg focus:outline-none active:outline-none";

  const Placeholder = ({ item, index, isFocus }) => {
    return (
      <button
        onClick={() => setPreview({ item })}
        className={clsx(
          sizes[index % 2],
          buttonClass,
          isFocus ? "bg-eggwash" : "bg-white",
          "text-center justify-center items-center",
        )}
      >
        <span>
          {item.TITLE}, {item.YEAR}
        </span>
      </button>
    );
  };

  const RecipeCard = ({ item, index, isFocus, highlightColor }) => {
    return (
      <button
        onClick={() => setPreview({ item })}
        className={clsx(
          sizes[index % 2],
          isFocus ? "bg-eggwash" : "bg-white",
          "relative overflow-y-hidden overflow-ellipsis",
        )}
      >
        <MarkedText
          text={item.RECIPE[0].data.Notes}
          className="p-6 text-sm text-left leading-4"
        />
        {isFocus && (
          <Pill isOverlay className={`bg-[${highlightColor}]`}>
            {item.TITLE}
          </Pill>
        )}
      </button>
    );
  };

  return (
    <div
      className={clsx(
        className,
        "flex my-4 items-center max-h-25vh 2xl:max-h-30vh",
      )}
    >
      {items.map((item, index) => {
        const imageData = findImageData(images.nodes, item);
        const isRecipe = item.CATEGORY.includes("Recipe") && item.RECIPE;
        const sharedProps = {
          index,
          item,
          isFocus: item.CATEGORY.includes(selectedCategory),
          highlightColor:
            selectedCategory && bgByCategory[selectedCategory.toLowerCase()],
        };

        if (isRecipe)
          return <RecipeCard key={`recipe-${index}`} {...sharedProps} />;
        if (!imageData)
          return <Placeholder key={`placeholder-${index}`} {...sharedProps} />;

        const { height, width } = imageData?.childImageSharp?.original;
        const aspectRatio = width / height;

        return (
          <Figure
            {...sharedProps}
            key={`image-${item.IDENTIFIER}`}
            imageData={imageData}
            onSelect={() => setPreview({ item, imageData })}
            className={clsx(aspectRatio > 1 ? "w-1/4" : "w-1/5", "mx-2")}
          />
        );
      })}
    </div>
  );
}

export default PlotRow;
