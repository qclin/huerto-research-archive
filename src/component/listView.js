import clsx from "clsx"
import React, {useState, useMemo} from "react"
import { getColorScheme, findImageData } from "../utils/helper";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { bgByCategory } from "../utils/colors";

function ListView({groupedFields, images}){

  const scheme = getColorScheme()
  const [selected, setSelected] = useState();

  const image = useMemo(() => getImage(selected), [selected]);

  return(
    <section className="flex">
      <section className="ml-16 pb-24 max-w-screen-md">
      {Object.entries(groupedFields).map(([type, fields]) =>  (
        <dl key={type}>
        <dt className={clsx("rounded-full w-min whitespace-nowrap py-1 px-2 my-6",
          bgByCategory[type.toLowerCase()] ? `bg-[${bgByCategory[type.toLowerCase()]}]`:"bg-white"
        )}>
          {type}
          <span className="pl-2">({fields.length})</span>
        </dt>
        {fields.map((field) => {
          const imageData = findImageData(images.nodes, field)
          return(
          <dd key={field.IDENTIFIER} className={scheme.text}>
            <button
              onClick={() => {
                imageData && setSelected(imageData)
              }}
              className={clsx("w-full grid grid-flow-col auto-cols-fr text-left px-2 hover:bg-white hover:bg-opacity-25 focus:outline-none",
              selected?.Key?.includes(field.IDENTIFIER) && "bg-eggwash"
            )}>
              <span>{field.YEAR ? field.YEAR : "     "}</span>
              <span>{field.MEDIA_TYPE}</span>
              <span className="col-span-4">{field.TITLE}</span>
            </button>
            </dd>
          )
        })}
        </dl>
      ))}
      </section>
      <div className="flex items-center fixed right-0 justify-items-center h-full">
        <div className="relative max-w-prose mr-12">
          <GatsbyImage image={image} className="shadow"/>
        </div>
      </div>

    </section>
  )
}

export default ListView