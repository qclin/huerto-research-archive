import * as React from "react";

function Block({ field, media }) {
  return (
    <dd className="border-r flex-shrink-0 hover:bg-melone">
      <p className="border-b uppercase align-middle bg-eggwash text-base px-4 hover:bg-melone">
        {field.TITLE}
        <span className="float-right text-sm">{field.MEDIA_TYPE}</span>
      </p>
      {media && (
        <div className="h-100">
          <iframe
            src={media.URL}
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            title={media.Title}
          />
        </div>
      )}
    </dd>
  );
}

export default Block;
