function bubbleSort(arr, last = 0) {
  let tempSwap, swaps = 0;
  for (let i = 0; i < arr.length - 1 - last; i++) {
    if (arr[i] > arr[i + 1]) {
      tempSwap = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = tempSwap
      swaps++
    }
  }
  if (swaps === 0) {
    return arr
  } else {
    return bubbleSort(arr, last + 1)
  }
}

function bubbleSortFn(arr, fn) {
  let tempSwap, swaps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (fn(arr[i], arr[i + 1]) === 1) {
      tempSwap = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = tempSwap
      swaps++
    }
  }
  if (swaps === 0) {
    return arr
  } else {
    return bubbleSortFn(arr, fn)
  }
}
