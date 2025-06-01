
setInterval( function(){
    let time = new Date()
    document.querySelector('#clock').innerHTML = time.toLocaleTimeString()
    
}, 1000  )