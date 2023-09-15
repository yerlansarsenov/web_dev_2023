/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = []
    var index = 0
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr[index++] = arr[i]
        }
    }
    return filteredArr
};