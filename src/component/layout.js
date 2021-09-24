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
        <div className={clsx(scheme.lightBg, scheme.border, "h-6 w-screen border-b fixed top-0 left-0") }></div>
        <section className={clsx(scheme.bg, scheme.border, "border")}>{children}</section>
      </main>
    </>
  )
}

export default Layout