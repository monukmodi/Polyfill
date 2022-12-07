// Normal Filter function
//  ====> Filter ===>>
// Filter always returns a new Array
// It does not effect the original Array
let arr = [1, 2, 3, 4, 5]

let myArrFiltered = arr.filter((val) => val % 2 == 0)

console.log('original Filter Method', myArrFiltered)

// Polyfill Filter Example 1

Array.prototype.filter = null

Array.prototype.myFilter = function (callback) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArr.push(this[i])
    }
  }
  return newArr
}

let myPolyfillFilteredArr = arr.myFilter((val) => val % 2 == 0)
console.log('Polyfill example 1', myPolyfillFilteredArr)

// Polyfill Filter Example 2

function myPolyfillFilter(arr, cb) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i])
    }
  }

  return newArr
}

function isEven(num) {
  if (num % 2 == 0) {
    return num
  }
}

console.log('Polyfill example 2', myPolyfillFilter(arr, isEven))
