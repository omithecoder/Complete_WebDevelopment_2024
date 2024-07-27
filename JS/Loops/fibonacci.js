// using Loop
var out = [];
var n = prompt("Enter the number till which you want a fibonacci number : ");
for (var i = 1; i <= n; i++) {
	if (i == 1) {
		out.push(0);
	} else if (i == 2) {
		out.push(1);
	} else {
		out.push(out[i - 2] + out[i - 3]);
	}
}
document.write(out);

// using Reccursion
console.log(getFibbo(n));
function getFibbo(n) {
	if (n == 1) {
		return 0;
	} else if (n == 2) {
		return 1;
	}
	return getFibbo(n - 1) + getFibbo(n - 2);
}
