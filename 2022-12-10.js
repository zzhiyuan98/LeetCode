/* 1691. 堆叠长方体的最大高度 */

const compareFunc = (a, b) => {
  if (a[0] > b[0]) return -1;
  if (a[0] < b[0]) return 1;
  return a[1] === b[1] ? a[2] - b[2] : b[1] - a[1];
};

const getSortedCuboids = cuboids =>
    cuboids.map(cuboid => cuboid.sort((a,b)=> b - a)).sort(compareFunc);

const maxHeight = cuboids => {
  const sortedArray = getSortedCuboids(cuboids);
  let [sumHeight, maxWidth, maxLength] = sortedArray[0];
  for (let i = 1; i < sortedArray.length; i++) {
    const [height, width, length] = sortedArray[i];
    if (width > maxWidth || length > maxLength) break;
    maxWidth = width;
    maxLength = length;
    sumHeight += height;
  }
  return sumHeight;
};

console.log(maxHeight([[36,46,41],[15,100,100],[75,91,59],[13,82,64]]));
