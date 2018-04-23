function split(arr) {
  let half = Math.ceil(arr.length / 2)
  return [arr.slice(0, half), arr.slice(half)]
}

function merge(arr1, arr2) {
  let stop = arr1.length + arr2.length
  let arr = []

  for (let i = 0; arr.length < stop; i++) {
    if (arr1[i] > arr2[i]){
      arr.push(arr2[i])
      arr.push(arr1[i])
    } else {
      arr.push(arr1[i])
      arr.push(arr2[i])
    }
  }
  return arr
}

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr
  } else {
    let [firstHalf, secondHalf] = split(arr)
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}