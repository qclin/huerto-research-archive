import * as React from "react"
import { graphql } from "gatsby"
import { groupByCategory, selectSome  } from "../utils/helper";
import Row from "../component/row";
import Figure from "../component/figure";
import Layout  from "../component/layout";


const IndexPage = ({data}) => {

  const groupedFields = groupByCategory(data.projects.edges)

  const selectedSet = selectSome(groupedFields)

  console.log(" selectedSet ", selectedSet)

  return (
    <Layout>
      <section className="h-screen grid grid-rows-3 grid-flow-col gap-4">
        {selectedSet.map((item) =>
          <Figure item={item} images={data.images}/>)
        }
      </section>
      {/* <div className="uppercase w-32 sticky left-0 text-base font-bold px-4 border-r">ARCHIVE</div> */}
      {/* {Object.keys(groupFields).map((type, idx) => (
        <Row fields={groupFields[type]} type={type} key={`${idx}.${type}`}/>
      ))} */}
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
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`
