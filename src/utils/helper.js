import Chance from "chance"
import {omit, flatten, shuffle} from "lodash";

const chance = new Chance();

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



export function selectSome(categoryList){
  const livingKey = "Living"
  const livingSet = categoryList[livingKey]
  const theRestSet = flatten(Object.values(omit(categoryList, livingKey))).filter((obj) => !obj.CATEGORY.includes(livingKey))

  const living3 = chance.pickset(livingSet, 3)
  const rest5 = chance.pickset(shuffle(theRestSet), 6)

  return  shuffle([...living3, ...rest5])
}

export function findImageData(imageNodes, item){
  return imageNodes.find(node => node.Key.includes(item.IDENTIFIER))
}