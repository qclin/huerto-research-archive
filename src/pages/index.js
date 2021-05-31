import * as React from "react"
import { graphql } from "gatsby"
import {groupByCategory, CATEGORY} from "../utils/constants"; 


const IndexPage = ({data}) => {

  const groupFields = groupByCategory(data.projects.edges)

  return (
    <main >
      {CATEGORY.map((type) =>(
          <h1 key={type}> {key}</h1>
        )
      )}

    {Object.values(groupFields).map((fields, idx) => (
        <section key={`row.${idx}`}>
          {fields.map((field, index) => {
            return(
              <div key={`${field.IDENTIFIER}.${index}`}>
                <p>{field.TITLE}</p>
                <span>{field.MEDIA_TYPE}</span>
                {field.MEDIA && field.MEDIA[0].data &&
                <div style={{width: 265, height: 200}}>
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
              </div>
            )}
          )}
        </section>
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

