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

function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`making request to ${location}`)
        if(location === "Google"){
            resolve("Google says Hi")
        }else{
            reject("We can only talk to google")
        }
    })
}

function processRequest(response){
    return new Promise ((resolve, reject) => {
        console.log("Processing responese")
        resolve(`Extra information ${response}`)
    })
}

async function dowork() {
    try{
        const response = await makeRequest("aaa")
        console.log("Response Received")
        const processResponse = await processRequest(response)
        console.log(processResponse)
    }catch(error){
        console.log(error)
    }
}

dowork()