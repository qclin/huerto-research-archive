import React, { useRef } from "react"
import ReactPlayer from "react-player"

export default ({
  URL,
  ...props
}) => {

  const player = useRef()
  return (
      <ReactPlayer
        url={URL}
        loop
        ref={player}
        config={{
          youtube: {
            embedOptions: {
              autoplay: true,
              rel: false
            }
          }
        }}
        {...props}
      />
  )
}
