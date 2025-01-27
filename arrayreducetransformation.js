var reduce = function(nums, fn, init) {
    let newArray = init
    for(let i = 0; i < nums.length; i++){
        if(nums.length === 0){
            return init
        }else{
            newArray = fn(newArray,nums[i]);
        }
    } return newArray;
    
};