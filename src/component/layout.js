import React from "react";
import Seo from "./seo";
import clsx from "clsx";
import Timestamp from "./timestamp";
import { getColorScheme } from "../utils/helper";


function Layout ({
  children,
  seoTitle = "Huerto Research Archive"
}){
  const scheme = getColorScheme()
  return (
    <>
    <header>
        <Seo title={seoTitle} />
    </header>
      <Timestamp/>
      <main className={clsx(scheme.lightBg, "p-6")}>
        <section className={clsx(scheme.bg, scheme.border, "border")}>{children}</section>
      </main>
    </>
  )
}

export default Layout