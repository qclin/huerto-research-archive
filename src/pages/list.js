import * as React from "react"
import { graphql } from "gatsby"
import { groupByCategory  } from "../utils/helper";
import Layout  from "../component/layout";

const ListPage = ({data}) => {
  const groupFields = groupByCategory(data.projects.edges)


  console.log("[groupFields ] ", groupFields )
  return (
    <Layout>
      <section className="ml-32 pb-24 max-w-screen-md">
      {Object.entries(groupFields).map(([type, fields], idx) =>  (
        <dl key={`${idx}.${type}`}>
        <dt className="bg-white rounded-full w-min whitespace-nowrap py-1 px-2 my-6">
          {type}
          <span className="pl-2">({fields.length})</span>
        </dt>
        {fields.map((field, index) => (
          <dd key={field.idx} className="grid grid-flow-col auto-cols-fr text-left px-2 hover:bg-white hover:bg-opacity-75">
            <span>#{index}</span>
            <span>{field.MEDIA_TYPE}</span>
            <span>{field.YEAR ? field.YEAR : "unknown"}</span>
            <span className="col-span-3">{field.TITLE}</span>
          </dd>
        ))}
        </dl>
      ))}
      </section>
    </Layout>
  )
}

export default ListPage

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
