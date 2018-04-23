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
// change

