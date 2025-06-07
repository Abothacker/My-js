
let startbtn = document.querySelector('#start')
let stopbtn = document.querySelector('#stop')

let IntervalId;

// random color hex generate
function randomColorHex() {
    let colors = "0123456789ABCDF"
    let hex = '#'
    let i = 0
    
    while (i < 6) {
        hex += colors[Math.round(Math.random()*16)]
        i++    
    }
    
    return hex
}

// color set

let startfun = function(){
    document.body.style.backgroundColor = randomColorHex()
    console.log(`color hex code: ${randomColorHex()}`);
}

startbtn.addEventListener('click',function(){
    if(IntervalId == null ){
        IntervalId = setInterval(startfun,1000)
    }
    // console.log("start clicked");
    
})

stopbtn.addEventListener('click',function(){
    clearInterval(IntervalId)
    IntervalId = null
})



