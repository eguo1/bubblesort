'use strict'

describe('Split Array function', function() {
  const initArray = [4, 5, 2, 3, 1]
  it('is able to split an array into two halves', function() {
    expect(split(initArray)).toEqual([[4, 5, 2], [3, 1]])
    expect(split([2, 19, 30, 23, 415, 31])).toEqual([[2, 19, 30], [23, 415, 31]])
  })
})

describe('Merge Array function', function() {
  const testArray = [1, 3, 5]
  const testArray2 = [2, 4, 6]
  it('merges two sorted arrays into one sorted array', function () {
    expect(merge(testArray, testArray2)).toEqual([1, 2, 3, 4, 5, 6])
  })
})

describe('Merge Sort function', function() {
  const initArray = [2, 3, 4, 1]
  it('sorts an unsorted array', function() {
    expect(mergeSort(initArray)).toEqual([1, 2, 3, 4])
  })
})