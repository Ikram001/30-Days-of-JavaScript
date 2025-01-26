var map = function(arr, fn) {
    // let newArray = arr.map(fn);
    // return newArray;
    let newArr = [];
    for(let i = 0 ; i < arr.length; i++){
        newArr[i] =  fn(arr[i], i);
    }
    return newArr;
};