import React, { useMemo } from "react";
import Modal from "react-modal";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.24)",
  },
};

function PreviewModal({ preview, onClose }) {

  const image = useMemo(() => preview && getImage(preview.imageData), [preview])

  return (
    <Modal isOpen={preview} onRequestClose={onClose} style={customStyles}>
      <button
        className="text-white float-right focus:outline-none"
        style={{ marginRight: "-1rem" }}
        onClick={onClose}
      >
        <span className="text-3xl font-light">X</span>
      </button>
      {preview && (
        <figure key={`${preview.item.CATEGORY}.${preview.item.IDENTIFIER}`}>
          {image && <GatsbyImage image={image} alt={preview.item.TITLE} className="h-auto"/>}
          <figcaption>{preview.item.TITLE}</figcaption>
        </figure>
      )}
    </Modal>
  );
}

export default PreviewModal;