import React from "react";
import SEO from "./seo";

function Layout ({
  children,
  seoTitle = "Huerto Research Archive"
}){

  return (
    <>
      <header>
        <SEO title={seoTitle} />
      </header>
      <main className="bg-paper p-6">{children}</main>
      <footer className="bg-white w-screen h-12 absolute bottom-0">
      </footer>
    </>
  )
}

export default Layout