// function name(){
//     console.log("ikram")
// }
// let oneSecond = setInterval(name,1000)


// setTimeout(() => {
//     (clearInterval(oneSecond,1000))
// }, 5000);


var cancellable = function(fn, args, t) {
    fn(...args)
    let delayTimer = setInterval(() => {
        fn(...args)
    },t)
    let cancelFn = () => {
        clearInterval(delayTimer)
    }
    return cancelFn
};