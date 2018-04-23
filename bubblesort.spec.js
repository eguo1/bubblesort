'use strict'

describe('Bubble Sort', function () {
  const arr1 = [2, 1]
  const arr2 = [5, 2, 4, 1, 3]

  beforeEach(function () {
    spyOn(window, 'bubbleSort').and.callThrough()
  })
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort.calls.count()).toEqual(1)
  })

  it('sorts a two element array', function () {
    expect(bubbleSort(arr1)).toEqual([1, 2])
    expect(bubbleSort.calls.count()).toEqual(2)
  })

  it('sorts a bigger array', function () {
    expect(bubbleSort(arr2)).toEqual([1, 2, 3, 4, 5])
    expect(bubbleSort.calls.count()).toEqual(4)
  })
})

describe('Bubble sort w/ callback', function () {
  const arr1 = [2, 1]
  const arr2 = [5, 2, 4, 1, 3]
  function cb(a, b) {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  }

  beforeEach(function () {
    spyOn(window, 'bubbleSortFn').and.callThrough()
  })
  it('handles an empty array', function () {
    expect(bubbleSortFn([], cb)).toEqual([]);
    expect(bubbleSortFn.calls.count()).toEqual(1)
  })

  it('sorts a two element array', function () {
    expect(bubbleSortFn(arr1, cb)).toEqual([1, 2])
    expect(bubbleSortFn.calls.count()).toEqual(2)
  })

  it('sorts a bigger array', function () {
    expect(bubbleSortFn(arr2, cb)).toEqual([1, 2, 3, 4, 5])
    expect(bubbleSortFn.calls.count()).toEqual(4)
  })
})
// change

