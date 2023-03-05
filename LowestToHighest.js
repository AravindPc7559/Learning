let arr = [3, 5, 2, 1, 4, 9, 7, 8, 6, 10]
let temp

function x() {
  for (var i = 0; i<arr.length-1; i++) {
    for (var j=arr.length-1 ; j<= i+1; j--) {
      if (arr[j] < arr[i]) {
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
console.log(arr)
}
}

const out = x()

console.log(out)
