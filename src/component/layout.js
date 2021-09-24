import React from "react";
import Seo from "./seo";

import Timestamp from "./timestamp";

function Layout ({
  children,
  seoTitle = "Huerto Research Archive"
}){

  return (
    <>
    <header>
        <Seo title={seoTitle} />
      </header>
      <Timestamp/>
      <main className="bg-paper m-6 border">{children}</main>
    </>
  )
}

export default Layout