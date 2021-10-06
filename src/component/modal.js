import React, { useMemo } from "react";
import Modal from "react-modal";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Pill from "./pill";
import clsx from "clsx";
import Video from "../component/video";
import MarkedText from "../component/markedText";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor:"#ede291F2",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.18)",
  },
};

function PreviewModal({ preview, onClose }) {

  const image = useMemo(() => preview && getImage(preview.imageData), [preview])
  if(!preview) return <></>
  const { IDENTIFIER, CATEGORY, TITLE, YEAR, MEDIA_TYPE, MEDIA, RECIPE} = preview.item
  const topPillClass = "absolute top-2 z-10 uppercase"

  const medialURL = MEDIA && MEDIA[0].data.URL
  const isVideo = MEDIA_TYPE === "Video"
  const isRecipe = CATEGORY.includes("Recipe") && RECIPE
  const isImage = preview && !isVideo


  return (
    <Modal isOpen={!!preview} onRequestClose={onClose} style={customStyles}>
      <Pill className={clsx(topPillClass, "left-8")}>{CATEGORY.join(' - ')}</Pill>
      {medialURL && <Pill className={clsx(topPillClass, "right-8 shadow")}>
        <a href={medialURL} target="_blank" rel="noreferrer">LINK</a>
      </Pill>}
      {isVideo && <Video URL={medialURL} />}
      {isRecipe && <MarkedText text={RECIPE[0].data.Notes} className="max-w-screen-md p-6 bg-white"/>}
      {isImage && (
        <figure key={`${CATEGORY}.${IDENTIFIER}`}>
          {image && <GatsbyImage image={image}
            transformOptions={{fit: "contain"}} alt={TITLE}
            className="max-w-screen-md w-full mx-auto h-auto object-contain"
            style={{maxHeight: "80vh"}}/>}

          <figcaption className="flex justify-between">{TITLE},{YEAR}<span>{MEDIA_TYPE}</span></figcaption>
        </figure>
      )}
    </Modal>
  );
}

export default PreviewModal;