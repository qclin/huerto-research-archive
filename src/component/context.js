import clsx from "clsx";
import React, { useState } from "react";
import { getColorScheme } from "../utils/helper";

const className = {
  left: {
    position: "left-0",
  },
  right: {
    position: "right-0",
  },
};
const Context = ({ orientation, label, payload }) => {
  const [open, setOpen] = useState(false);
  const scheme = getColorScheme();
  const styles = className[orientation];

  return (
    <div
      className={clsx(
        open ? "md:max-w-xs w-full" : "w-0",
        "fixed z-50 top-12",
        styles.position,
      )}
      style={{ height: "calc(100vh - 4.5rem)" }}
    >
      <section
        className={clsx(
          open
            ? "visible shadow-inner p-11 h-full overflow-y-scroll"
            : "invisible",
          scheme.lightBg,
          scheme.text,
        )}
      >
        <div
          className="whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: payload.html }}
        />
        <a href="https://andrea-m-y.com/" className="underline">andrea-m-y.com</a>
      </section>
      <button
        className={clsx(
          "focus:outline-none hover:bg-eggwash w-6 absolute h-full top-0 border-t border-b",
          styles.position,
          scheme.lightBg,
          scheme.border,
          scheme.text,
        )}
        onClick={() => setOpen(!open)}
      >
        <span className="uppercase text-base absolute transform -rotate-90 -left-3.5">
          {label}
        </span>
      </button>
    </div>
  );
};

export default Context;
