var name = prompt("Enter your name : ");
alert("Welcome " + name + " to Calculator !");
var operation = prompt(
	"Choose the opertation from following \n1) Add \n2) Substract \n3) Multiply \n4) Divide\n"
);
var a = prompt("Enter the first number : ");
var b = prompt("Enter the second number : ");
var ans = 0;

if (operation == 1) {
	ans = Number(a) + Number(b);
	alert("Addition of " + a + " & " + b + " = " + ans);
} else if (operation == 2) {
	ans = Number(a) - Number(b);
	alert("Substraction of " + a + " & " + b + " = " + ans);
} else if (operation == 3) {
	ans = Number(a) * Number(b);
	alert("Multiplication of " + a + " & " + b + " = " + ans);
} else if (operation == 4) {
	ans = Number(a) / Number(b);
	alert("Division of " + a + " & " + b + " = " + ans);
} else {
	alert("Invalide Operation");
}

ans = "Answer : " + ans;
document.getElementById("ans").innerHTML = ans;
