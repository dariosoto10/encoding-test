function sortAscNumbers(a, b) {
  if (a < b) return -1
  if (a > b) return 1
  return 0 
}

function squaredArray(array) {
  return array.map(number => Math.pow(number, 2)).sort(sortAscNumbers)
}

console.log(squaredArray([1, 2, 3, 5, 6, 8, 9]))
console.log(squaredArray([-2, -1]))