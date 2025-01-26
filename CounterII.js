var createCounter = function(init) {
    
    let currentVal =init;
    return {
        increment:function(){
             return ++currentVal;
        },
        decrement: function(){
            return --currentVal;
        },
        reset: function(){
            return currentVal = init;
        }
    }
    
};