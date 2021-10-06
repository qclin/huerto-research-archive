import React, { useState } from "react"
import { graphql } from "gatsby"
import { groupByCategory  } from "../utils/helper";
import Layout  from "../component/layout";
import ListView from "../component/listView";
import PlotView from "../component/plotView";
import Context from "../component/context";
import Footer from "../component/footer";
import { Corners } from "../component/corners";
import Background from "../component/background";


function PlotPage({data}){

  const groupedFields = groupByCategory(data.projects.edges)
  const [showList, setShowList] = useState(false)
  const [current, setCurrent] = useState(0)

  return (
    <Layout>
      <Corners />
      <Background images={data.images} />
      {
        showList ? <ListView groupedFields={groupedFields} images={data.images}/> :
        <PlotView groupedFields={groupedFields} images={data.images} current={current}/>
      }
      <Context orientation="right" label="Context" payload={data.context}/>
      <Context orientation="left" label="Glossary" payload={data.glossary}/>
      <Footer onToggleView={() => setShowList(!showList)} isList={showList} onNext={() => setCurrent(current + 1)}/>
    </Layout>
  )
}

export default PlotPage

export const query = graphql`
  query {
    projects: allAirtable(filter: {table: {eq: "BODY"}}) {
      edges {
        node {
          id
          data {
            CATEGORY
            IDENTIFIER
            MEDIA_TYPE
            TITLE
            YEAR
            MEDIA {
                data {
                  URL
                  Title
                  Source
                }
              }
            RECIPE {
              data {
                Author
                Notes
              }
            }
          }
        }
      }
    }
    images: allS3ImageAsset {
      nodes {
        Key
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
          original {
            height
            width
          }
        }
      }
    }
    context: markdownRemark(fileAbsolutePath: {regex: "/Context.md/"}) {
      html
    }
    glossary: markdownRemark(fileAbsolutePath: {regex: "/Glossary.md/"}) {
      html
    }
  }
`
