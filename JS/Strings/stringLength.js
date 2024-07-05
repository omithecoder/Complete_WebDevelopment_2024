// string length

var message = prompt("Enter the message in just 30 characters : ");
var len = message.length;
var rem = 30 - len;
var send =
	"You have written " +
	len +
	" characters and you have " +
	rem +
	" characters remaining!";
alert(send);
