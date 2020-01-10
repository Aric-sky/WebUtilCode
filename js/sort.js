//三大排序: 冒泡，插入，快速
var arr = [4, 1, 3, 5, 2, 7, 6]
// 冒泡排序
var examplearr = [8, 94, 15, 88, 55, 76, 21, 39]

function sortarr(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
sortarr(examplearr)
console.log(examplearr)

//插入排序
function insertSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var t = arr[i]
    var p = i - 1
    while (p >= 0 && arr[p] > t) {
      arr[p + 1] = arr[p]
      p--
    }
    arr[p + 1] = t
  }
}
//insertSort(arr)
//快速排序:
function quickSort(arr) {
  if (arr.length > 1) {
    var c = parseInt((arr.length + 1) / 2)
    var center = arr.splice(c, 1)[0]
    var left = [],
      right = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < center) left.push(arr[i])
      else right.push(arr[i])
    }
    return quickSort(left).concat(center, quickSort(right));
  } else
    return arr;
}
arr = quickSort(arr)
console.log(String(arr))

// 归并排序
const mergeSort = function mergeSort(source) {
  let len = source.length
  if (len < 2) {
    return source
  }
  let mid = Math.floor(len / 2)
  let left = source.slice(0, mid)
  let right = source.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}
console.log(mergeSort([4, 8, 1, 3, 5, 9, 6])) // [1,3,4,5,6,8,9]


// 选择排序
let count = 0 // 记录循环次数
const selectSort = function (soucre) {
  let len = soucre.length
  let minidx;
  for (let i = 0; i < len; i++) {
    minidx = i
    for (let j = i + 1; j < len; j++) {
      count++
      if (soucre[minidx] > soucre[j]) {
        minidx = j
      }
    }
    if (minidx !== i) {
      change(soucre, i, minidx)
    }
  }
  return soucre
}
console.log(selectSort([3, 6, 2, 4, 9, 1, 8, 23, 45, 16, 14])) // [1, 2, 3, 4, 6, 8, 9, 14, 16, 23, 45]
console.log(count) // 55