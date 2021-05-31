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

  return obj
}