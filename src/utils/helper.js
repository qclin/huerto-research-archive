import Chance from "chance"
import { getHours } from "date-fns";
import {omit, flatten, shuffle, inRange} from "lodash";
import colorScheme from "./colors";

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

export function getColorScheme(){
  const timenow = getHours(new Date())
  let timeOfDay;
  if(inRange(timenow, 0, 6)){
    timeOfDay = "dawn"
  }else if(inRange(timenow, 6, 12)){
    timeOfDay = "morning"
  }else if(inRange(timenow, 12, 18)){
    timeOfDay = "afternoon"
  }else if(inRange(timenow, 18, 24)) {
    timeOfDay = "night"
  }

  console.log(" time of day --- ", timeOfDay)

  return colorScheme[timeOfDay]
}