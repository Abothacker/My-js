let input = document.querySelector("#input");
let string = "";
const buttons = document.querySelectorAll("#buttons");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {

      if (
        string.at(-1) == "-" ||
        string.at(-1) == "+" ||
        string.at(-1) == "*" ||
        string.at(-1) == "/"
      ) {
        input.value = "Error";
      } else {
        result = eval(string);
        input.value = result;
        string = result;
      }


    } else {

      if (e.target.innerHTML == "C") {
        input.value = "Clear";
        string = "";
      } else {
        string = string + e.target.innerHTML;
        input.value = string;
      }

      
    }

  });
});
