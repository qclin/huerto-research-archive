import React, { useMemo } from "react";
import Modal from "react-modal";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Pill from "./pill";
import clsx from "clsx";

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
  const { IDENTIFIER, CATEGORY, TITLE, YEAR, MEDIA_TYPE} = preview.item
  const topPillClass = "absolute top-2 z-10 uppercase"
  return (
    <Modal isOpen={preview} onRequestClose={onClose} style={customStyles}>
      {/* <button
        className="text-white absolute -right-4 focus:outline-none"
        style={{ marginRight: "-1rem" }}
        onClick={onClose}
      >
        <span className="text-3xl font-light">X</span>
      </button> */}
      <Pill className={clsx(topPillClass, "left-8")}>item {}</Pill>
      <Pill className={clsx(topPillClass, "right-8")}>{CATEGORY.join(' - ')}</Pill>
      {preview && (
        <figure key={`${CATEGORY}.${IDENTIFIER}`}>
          {image && <GatsbyImage image={image} alt={TITLE} className="max-w-screen-md w-full mx-auto h-auto"/>}
          <figcaption className="flex justify-between">{TITLE},{YEAR}<span>{MEDIA_TYPE}</span></figcaption>
        </figure>
      )}
    </Modal>
  );
}

export default PreviewModal;