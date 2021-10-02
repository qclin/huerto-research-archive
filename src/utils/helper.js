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

export function selectFew(categoryList){
  const selected = []
  Object.entries(categoryList).forEach(([key, list]) => {
    if(key === "Living"){
      selected.push(...chance.pickset(list, 3))
    }else if(["Recipe", "Zones-of-Practice"].includes(key)){
      selected.push(chance.pickone(list))
    }else {
      selected.push(...chance.pickset(list, 2))
    }
  })
  return selected
}

export function countOccurences(selectedSet){
  return selectedSet.reduce((r, a) => {
    a.CATEGORY.map((category) => {
      r[category] = (r[category] || 0) + 1;
    })
    return r;
  }, {});
}

export function findImageData(imageNodes, item){
  return imageNodes.find(node => node.Key.includes(item.IDENTIFIER))
}

export function getColorScheme(){
  const now = new Date();
  const timenow = getHours(now)

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

  return colorScheme[timeOfDay]
}