
function name(){
    console.log("ikram")
}
let oneSecond = setInterval(name,1000)


setTimeout(() => {
    (clearInterval(oneSecond,1000))
}, 5000);