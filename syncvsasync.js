const myPromise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     console.log("async task");
    // }, 1500);
    let a = 1 + 3;
    if ( a === 2){
        resolve("Success");
    } else 
    {
        reject("Failed");
    }
})

myPromise.then((message) => {
    console.log("This is in the then " + message)
}).catch((message) =>{
    console.log("This is in the catch " + message)
})

// function makeRequest(location){
//     return new Promise((resolve, reject) => {
//         console.log('making request to ${location}')
//     })
// }