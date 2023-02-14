function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let nearestIndex = -1;
  let minimum = Infinity;

  for (let i = 0; i < points.length; i++) {
    const [x2, y2] = points[i];
    if (x2 !== x && y2 !== y) continue;
    const distance = Math.abs(x2 - x) + Math.abs(y2 - y);
    if (distance < minimum) {
      minimum = distance;
      nearestIndex = i;
    }
  }
  return nearestIndex;
}

console.log(nearestValidPoint(3, 4, [[3, 4]]));
