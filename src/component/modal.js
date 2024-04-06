import React, { useMemo } from "react";
import Modal from "react-modal";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Video from "../component/video";
import MarkedText from "../component/markedText";
import { bgByCategory } from "../utils/colors";

const customStyle = (category) => ({
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: bgByCategory[category] ?? "#ede291F2",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.18)",
  },
});

function PreviewModal({ preview, onClose }) {
  const image = useMemo(
    () => preview && getImage(preview.imageData),
    [preview],
  );
  if (!preview) return <></>;
  const { IDENTIFIER, CATEGORY, TITLE, YEAR, MEDIA_TYPE, MEDIA, RECIPE } =
    preview.item;
  const medialURL = MEDIA && MEDIA[0].data.URL;
  const isVideo = MEDIA_TYPE === "Video";
  const isRecipe = CATEGORY.includes("Recipe") && RECIPE;
  const isImage = preview && !isVideo;

  const RenderLink = () =>
    medialURL && (
      <a
        href={medialURL}
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        Link
      </a>
    );

  return (
    <Modal
      isOpen={!!preview}
      onRequestClose={onClose}
      style={customStyle(CATEGORY[0].toLowerCase())}
    >
      {isVideo && <Video URL={medialURL} />}
      {isRecipe && (
        <MarkedText
          text={RECIPE[0].data.Notes}
          className="max-w-screen-md p-6 bg-white"
        />
      )}
      {isImage ? (
        <figure key={`${CATEGORY}.${IDENTIFIER}`}>
          {image && (
            <GatsbyImage
              image={image}
              objectFit="contain"
              alt={TITLE}
              className="max-w-screen-md w-full mx-auto h-auto !object-contain"
              style={{ maxHeight: "80vh" }}
            />
          )}
          <figcaption className="flex items-center text-xs mt-1 justify-between">
            <p>
              {CATEGORY.map((value) => (
                <span className="rounded-full border-white border p-1 px-2 mx-1">
                  {value}
                </span>
              ))}
              <span className="uppercase">{MEDIA_TYPE}</span> /{" "}
              {[TITLE, YEAR].join(" / ")}
            </p>
            {RenderLink()}
          </figcaption>
        </figure>
      ) : (
        RenderLink()
      )}
    </Modal>
  );
}

export default PreviewModal;
