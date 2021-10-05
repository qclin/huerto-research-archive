import clsx from "clsx"
import React, { useState } from "react"
import { getColorScheme } from "../utils/helper";

const className = {
  left: {
    position: "left-0",
    labelPosition: "-left-3.5"
  },
  right: {
    position: "right-0",
    labelPosition: "-right-3.5"
  }
}
const Context = ({orientation, label, payload}) => {
  const [open, setOpen] = useState(false)
  const scheme = getColorScheme()
  const styles = className[orientation]

  return (
    <div className={clsx(
      open ? "max-w-screen-sm": "w-0",
      "fixed top-0 z-50 h-screen", styles.position)}>
      <section className={
        clsx(open ? "visible h-screen shadow p-11" : "invisible",
          scheme.lightBg, scheme.text)}>
        <div dangerouslySetInnerHTML={{__html: payload.html}}/>
      </section>
      <button className={
        clsx("focus:outline-none uppercase text-base absolute top-1/2 transform -rotate-90 hover:bg-eggwash", styles.labelPosition)}
        onClick={() => setOpen(!open)}>
        {label}
      </button>
    </div>
  )
}

export default Context
