// JavaScript Code

//Event Listerner on the button
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //input
  let number1 = +document.getElementById("q1").value;
  let number2 = +document.getElementById("q2").value;
  let number3 = +document.getElementById("q3").value;
  let number4 = +document.getElementById("q4").value;
  let number5 = +document.getElementById("q5").value;

  // Process
  let total = (number1 + number2 + number3 + number4 + number5) / 5;

  // Output
  document.getElementById("output").innerHTML = total;
}
