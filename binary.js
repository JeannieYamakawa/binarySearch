// var myArr = [1,3,4,6,7,10];
// var nonNum = 5;
// var num = 7;

var search = {
    binarySearch: function(arr, numToLocate){
    //choose an index in the array as a middle number by taking arr.length/2
    var middle = Math.floor(arr.length/2);
    //check if that index's value equals the numToLocate
    if(arr[middle] === numToLocate){
        return true;
    }
    else if (arr.length === 1){
        return false
    }
    //check if that value is more than numToLocate. if yes, search below that index in array
    else if (arr[middle] > numToLocate){
        var newArray = arr.slice(0, middle);
         return this.binarySearch(newArray, numToLocate)
    }
    //else search below that index
    else {
        var newArray = arr.slice(middle, arr.length);
         return this.binarySearch(newArray, numToLocate)
        }
    }
}

module.exports = search;

// console.log(binarySearch(myArr, nonNum));
// console.log(binarySearch(myArr, num) );
