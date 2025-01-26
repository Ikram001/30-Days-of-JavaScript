var filter = function(arr, fn) {
    let filteredArray = [];
    // filteredArray = arr.filter(fn);
    // return filteredArray;
    for(let i = 0; i < arr.length; i++){
        if (fn(arr[i], i)){
            filteredArray.push(arr[i]);
        }
    } return filteredArray;

};