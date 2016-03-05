// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.
function sumAll(arr) {
    // sort array
    var sortedArr = arr.sort(function(a, b) {
        return a - b;
    });
    var rangeArr = [];

    // get numbers in range a..b
    // add numbers in range a..b to array
    for (var i=sortedArr[0], l = sortedArr[1]; i<=l; i++) {
        rangeArr.push(i);
    }
    // sum all elements of array
    return rangeArr.reduce(getSum);

    function getSum(accumulator, element) {
        return accumulator + element;
    }
}

console.log(sumAll([4, 1]));
console.log(sumAll([10, 5]));
console.log(sumAll([4, 1]) == 10);
