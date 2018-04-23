function bubbleSort(arr) {
  let tempSwap, swaps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
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
    return bubbleSort(arr)
  }
}
