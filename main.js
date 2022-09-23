// JavaScript Code

//input
//Process
const button = document.getElementById("btn1");

button.addEventListener("click", () => {
  let number1 = parseInt(document.getElementById("q1").value || "0");
  let number2 = parseInt(document.getElementById("q2").value || "0");
  let number3 = parseInt(document.getElementById("q3").value || "0");
  let number4 = parseInt(document.getElementById("q4").value || "0");
  let number5 = parseInt(document.getElementById("q5").value || "0");

  let total = (number1 + number2 + number3 + number4 + number5) / 5;

  const resElem = document.getElementById("result1");

  resElem.innerHTML = `Final CS10 Grades: ${total}%`;

  if (total < 50) {
    document.getElementById("msg").innerHTML = "Better Luck Next Time Kid!😢";
  }
});
//Output
