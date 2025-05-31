const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // console.table(height,weight,results)

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

    results.innerHTML = `<span>${bmi}</span>`;

    console.log(bmi);

    if (bmi < 18.6) {
      cat = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      cat = "Normal Range";
    } else {
      cat = "Overweight";
    }

    results.innerHTML = `<span>${bmi} is ${cat}</span>`;
  }
});
