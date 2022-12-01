/* 1779. 找到最近的有相同 X 或 Y 坐标的点 */

const isValidPoint = (x, y, point) => {
  const [x1, y1] = point;
  return x1 === x || y1 === y;
};

const getDistance = (x, y, point) => {
  const [x1, y1] = point;
  return Math.abs(x1 - x) + Math.abs(y1 - y);
};

const nearestValidPoint = (x, y, points) => {
  let min = Infinity;
  let result = -1;
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    if (isValidPoint(x, y, point)) {
      const distance = getDistance(x, y, point);
      if (distance < min) {
        result = i;
        min = distance;
      }
    }
  }
  return result;
};
