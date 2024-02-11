function mincost(arr) {
  arr.sort((a, b) => a - b);
  let sum = arr.reduce((acc, curr, index) => acc + index, 0);
  return sum;
}

module.exports=mincost;
