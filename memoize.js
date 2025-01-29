function memoize(fn) {
    let cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if(key in cache){
            return cache[key];
        }else{

         cache[key] = fn(...args)
         return cache[key];
        }
    }
}

function slowFunction(num) {
    console.log("Computing...");
    return num * 2;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5));  // Output: "Computing..." 10
console.log(memoizedFunction(5));  // Output: 10 (No "Computing..." since it's cached)
console.log(memoizedFunction(6));  // Output: "Computing..." 12
console.log(memoizedFunction(6));  // Output: 12 (Cached)
