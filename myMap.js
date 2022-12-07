// ===== >>  Map  ====== >>
// It creates a new array from calling a function for every array of elements
// It calls a function once for each element
// It does not execute the program for empty elements
// It does not modify the original elements

let arr = [1, 2, 3, 2, 1]

// Normal Map function
console.log('Original Array', arr)
let squareArr = arr.map((val) => val * 2)

console.log('Original Map', squareArr)

// Polyfill Map Example 1

Array.prototype.map = null

Array.prototype.myMap = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

let squarePolyFillMap = arr.myMap((val, index, array) => val * 2)

console.log('example 1 polyfill map', squarePolyFillMap)

// Polyfill Map Example 2

function myPolyfillMap(arr, cb) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]))
  }
  return newArr
}

function square(x) {
  return x * 2
}

let PolyfillMapOne = myPolyfillMap(arr, square)

console.log('example 2 Polyfill Map', PolyfillMapOne)
