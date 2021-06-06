import * as React from "react"
import { graphql } from "gatsby"
import {groupByCategory} from "../utils/constants";


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
          {groupFields[type].map((field, index) => {
            return(
              <dd key={`${field.IDENTIFIER}.${index}`} className="border-r flex-shrink-0 w-80 hover:bg-melone">
                <p className="border-b uppercase align-middle bg-eggwash text-base px-4 hover:bg-melone">{field.TITLE} <span className="float-right text-sm">{field.MEDIA_TYPE}</span></p>
                {field.MEDIA && field.MEDIA[0].data &&
                <div  className="h-100">
                  <iframe src={field.MEDIA[0].data?.URL}
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                    title={field.MEDIA[0].data?.Title}
                  />
                </div>
                }
              </dd>
            )}
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
