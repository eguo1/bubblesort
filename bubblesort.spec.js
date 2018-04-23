'use strict'

<<<<<<< HEAD
describe('Bubble Sort', function(){
  beforeEach(function () {
    spyOn(window, 'bubbleSort').and.callThrough()
  })
  it('handles an empty array', function (){
    expect(bubbleSort([])).toEqual([])
  })
  it('takes a certain amount of steps to get to the ending', function () {
    bubbleSort([])
    expect(bubbleSort.calls.count()).toEqual(1)
  })
})
=======
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

  it('sorts array', function () {
    expect(bubbleSort(arr1)).toEqual([2, 1])
    expect(bubbleSort(arr2)).toEqual([1, 2, 3, 4, 5])
    expect(bubbleSort.calls.count()).toEqual(5)
  })
})
// change

>>>>>>> a223fb2fd162462cae75a92b5e19e8c33579c9c2
