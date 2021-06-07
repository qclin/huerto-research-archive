import * as React from "react"
import { graphql } from "gatsby"
import { groupByCategory } from "../utils/constants";
import Row from "../component/row";

const IndexPage = ({data}) => {


  const groupFields = groupByCategory(data.projects.edges)
  return (
    <main  className="bg-paper">
      <div className="uppercase w-32 sticky left-0 text-base font-bold px-4 border-r">ARCHIVE</div>
      {Object.keys(groupFields).map((type, idx) => (
        <Row fields={groupFields[type]} type={type} key={`${idx}.${type}`}/>
      ))}
    </main>
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
  }
`
