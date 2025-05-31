// START, old version this is not for <form>


// console.log('hello aryan');

function get() {
        let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    // console.log(height);
    let bmi = Number(weight) / Math.pow(Number(height), 2);


    document.getElementById('results').innerText = bmi

}

// END, old version this is not for <form>




