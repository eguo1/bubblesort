'use strict'

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