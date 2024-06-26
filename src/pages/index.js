import React from "react";
import { Link } from "gatsby";

import { Corners } from "../component/corners";
import { getColorScheme } from "../utils/helper";
import clsx from "clsx";

function IndexPage() {
  const scheme = getColorScheme();

  return (
    <div className={clsx(scheme.lightBg, "p-6 h-screen")}>
      <Corners showBottom />
      <Link to="/garden">
        <div
          className={clsx(
            scheme.border,
            "flex justify-center items-center border h-full",
          )}
        >
          <div className="bg-bloodOrange opacity-95 blur-md h-full w-screen z-0"></div>
          <div className="text-center z-10 absolute">
            <h1 className="text-5xl md:text-7xl uppercase mb-4">
              Plot Dialogues
              <br />
              <i>Archive</i>
            </h1>
            <span className="md:hidden">Better view on desktop</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default IndexPage;
