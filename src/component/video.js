import React, { useRef } from "react"
import ReactPlayer from "react-player"

function Video({
  URL,
  ...props
}){

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


export default Video