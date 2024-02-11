function mincost(arr) {
  if (arr.length <= 1) return 0;

  arr.sort((a, b) => a - b);

  let totalCost = 0;
  while (arr.length > 1) {
    const rope1 = arr.shift();
    const rope2 = arr.shift();
    const cost = rope1 + rope2;
    totalCost += cost;
    arr.push(cost);
    arr.sort((a, b) => a - b);
  }

  return totalCost;
}


module.exports=mincost;
