import Chance from "chance";
import getHours from "date-fns/getHours";
import inRange from "lodash/inRange";
import colorScheme from "./colors";

const chance = new Chance();

export function groupByCategory(edges) {
  const categoryList = {};

  edges.forEach((edge) => {
    const { data } = edge.node;

    data.CATEGORY?.forEach((category) => {
      if (categoryList[category]) {
        categoryList[category].push(data);
      } else {
        categoryList[category] = [data];
      }
    });
  });

  return categoryList;
}

export function selectFew(categoryList) {
  const selected = [];
  Object.entries(categoryList).forEach(([key, list]) => {
    if (key === "People") {
      selected.push(chance.pickone(list));
    } else {
      selected.push(...chance.pickset(list, 3));
    }
  });
  return selected;
}

export function countOccurences(selectedSet) {
  return selectedSet.reduce((r, a) => {
    a.CATEGORY.forEach((category) => {
      r[category] = (r[category] || 0) + 1;
    });
    return r;
  }, {});
}

export function findImageData(imageNodes, item) {
  return imageNodes.find((node) => node.Key.includes(item.IDENTIFIER));
}

export function getColorScheme() {
  const now = new Date();
  const timenow = getHours(now);

  let timeOfDay;
  if (inRange(timenow, 0, 6)) {
    timeOfDay = "dawn";
  } else if (inRange(timenow, 6, 12)) {
    timeOfDay = "morning";
  } else if (inRange(timenow, 12, 18)) {
    timeOfDay = "afternoon";
  } else if (inRange(timenow, 18, 24)) {
    timeOfDay = "night";
  }

  return colorScheme[timeOfDay];
}

export function splitArrayIntoChunks(array, sizes) {
  let result = [];
  let currentIndex = 0;

  for (let size of sizes) {
    // Extract the chunk and push to result
    const chunk = array.slice(currentIndex, currentIndex + size);
    result.push(chunk);
    // Update currentIndex for next iteration
    currentIndex += size;
  }

  return result;
}