var buttons = document.getElementsByClassName("button");
var displayT = document.getElementById("displayText");
var backspace = document.getElementById("backspace");
var operand1 = 0;
var operand2 = null;
var operator = null;
var count = true;

backspace.addEventListener("click", function () {
  var myString = displayT.innerText;
  var newString = myString.substr(0, myString.length - 1);
  displayT.innerText = newString;
});
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "+") {
      operator = "+";
      operand1 = parseFloat(displayT.innerText);
      displayT.innerText = "";
    } else if (value == "=") {
      operand2 = parseFloat(displayT.innerText);
      var result = eval(operand1 + "" + operator + "" + operand2);
      displayT.innerText = "";
      displayT.innerText = result;
      operand1 = 0;
      operand2 = null;
      operator = null;
    } else if (value == "-") {
      operator = "-";
      operand1 = parseFloat(displayT.innerText);
      displayT.innerText = "";
    } else if (value == "*") {
      operator = "*";
      operand1 = parseFloat(displayT.innerText);
      displayT.innerText = "";
    } else if (value == "/") {
      operator = "/";
      operand1 = parseFloat(displayT.innerText);
      displayT.innerText = "";
    } else if (value == "%") {
      operator = "%";
      operand1 = parseFloat(displayT.innerText);
      var result = operand1 / 100;
      displayT.innerText = "";
      displayT.innerText = result;
      operand1 = 0;
      operand2 = null;
      operator = null;
    } else if (value == "C") {
      displayT.innerText = "";
    } else if (value == "+/-") {
      // var displayValue=displayT.innerText;
      if (count == true) {
        displayT.innerText = "-" + displayT.innerText;
        count = false;
      } else {
        var myString = displayT.innerText;
        var newString = myString.substr(1);
        displayT.innerText = newString;
        count = true;
      }
    } else {
      displayT.innerText += value;
    }
  });
}
