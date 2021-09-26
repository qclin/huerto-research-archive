import React, { useState } from "react"
import { graphql } from "gatsby"
import { groupByCategory  } from "../utils/helper";
import Layout  from "../component/layout";
import ListView from "../component/listView";
import GridView from "../component/gridView";
import Footer from "../component/footer";

function IndexPage({data}){

  const groupedFields = groupByCategory(data.projects.edges)
  const [showList, setShowList] = useState(false)
  const [current, setCurrent] = useState(0)

  return (
    <Layout>
      {
        showList ? <ListView groupedFields={groupedFields}/> :
        <GridView groupedFields={groupedFields} images={data.images} current={current}/>
      }
      <Footer onToggleView={() => setShowList(!showList)} isList={showList} onNext={() => setCurrent(current + 1)}/>
    </Layout>
  )
}

export default IndexPage

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
                  IDENTIFIER
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
  }
`
