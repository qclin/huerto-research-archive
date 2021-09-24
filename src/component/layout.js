import React from "react";
import Seo from "./seo";
import NextArrow from "../images/icons/next-arrow.svg";
import clsx from "clsx";
import { Link } from "gatsby";
import Timestamp from "./timestamp";

function Layout ({
  children,
  seoTitle = "Huerto Research Archive"
}){

  const sideButtonClasses = "border-l border-r py-4 focus:outline-none"
  return (
    <>
    <header>
        <Seo title={seoTitle} />
      </header>
      <Timestamp/>
      <main className="bg-paper m-6">{children}</main>
      <footer className="bg-white w-screen fixed bottom-0 grid md:grid-cols-5  uppercase items-center text-xs text-center mx-6">
        <Link to="/list" className={sideButtonClasses} >VIEW AS LIST</Link>
        <div className="md:col-span-3">plot in dialogue: An Archive</div>
        <button className={clsx(sideButtonClasses, "flex justify-center")} onClick={() => { console.log("render next plot")} }>next plot <NextArrow/></button>
      </footer>
    </>
  )
}

export default Layout