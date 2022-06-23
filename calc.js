// var name = prompt("Enter your name: ");
// alert("Your name is Stella Onyekwelu");

const operatorVar = prompt("Enter operator(either +, -, * or /): ");
const operator1 = parseInt(prompt("Enter First Number: "));
const operator2 = parseInt(prompt("Enter Second Number: "));

var result;

if (operatorVar == "+") {
    result = operator1 + operator2;
}

else if (operatorVar == "-") {
    result = operator1 - operator2;
}

else if (operatorVar == "*") {
    result = operator1 * operator2;
}

else if (operatorVar == "/") {
    result = operator1 / operator2;
}
else{
    alert("Invalid Operator")
}

alert("The result is :" + result);