import pickBy from "lodash/pickBy"
import isEmpty from "lodash/isEmpty"
export const CATEGORY = [
  "Figures",
  "Living",
  "Spatial",
  "Practices",
  "Governance",
  "Stories"
]

export function groupByCategory(edges){

  const obj = CATEGORY.reduce((o, key) => ({ ...o, [key]: []}), {})

  edges.forEach(edge => {
    const {data} = edge.node
    data.CATEGORY.forEach(cate => {
      obj[cate].push(data)
    })
  });

  var cleanObj = pickBy(obj, function(value, key) {
    return !isEmpty(value);
  });

  return cleanObj
}