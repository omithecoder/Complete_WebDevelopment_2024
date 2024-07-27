// Array
var Nums = [1];
function fizzBuzz() {
	num = Nums.length + 1;
	if (num % 15 == 0) {
		Nums.push("FizzBuzz");
	} else if (num % 5 == 0) {
		Nums.push("Buzz");
	} else if (num % 3 == 0) {
		Nums.push("Fizz");
	} else {
		Nums.push(num);
	}
	console.log(Nums);
}
