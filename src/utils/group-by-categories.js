export function groupByCategory(edges){

  const categoryList = {}

  edges.forEach(edge => {

    const {data} = edge.node

    data.CATEGORY?.forEach(category => {
      if(categoryList[category]){
        categoryList[category].push(data)
      }else{
        categoryList[category] = [data]
      }
    })
  });

  return categoryList
}