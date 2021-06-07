import * as React from "react"
import { graphql } from "gatsby"
import { groupByCategory } from "../utils/constants";
import Block from "../component/block";

const IndexPage = ({data}) => {

  const groupFields = groupByCategory(data.projects.edges)
  return (
    <main  className="bg-paper">
      <div className="uppercase w-32 sticky left-0 text-base font-bold px-4 border-r">ARCHIVE</div>
    {Object.keys(groupFields).map((type, idx) => (
      <dl key={`row.${idx}`} className="h-64 border-b flex flex-row w-screen overflow-x-scroll">
        <dt key={type} className="border-r flex-shrink-0 w-32 sticky left-0 bg-eggwash" >
          <div className="uppercase text-base px-4 border-b">
            {type}
          </div>
        </dt>
        {groupFields[type].map((field, index) => (
          <Block key={`${field.IDENTIFIER}.${index}`} field={field} media={field.MEDIA && field.MEDIA[0].data} />)
        )}
        </dl>
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
