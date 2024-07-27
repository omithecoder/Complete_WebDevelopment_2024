// GuestList
var guestList = ["Omkar", "Soham", "Rohan", "Sarthak", "Raj"];
for (var i = 0; i < guestList.length; i++) {}
var guest = prompt("Enter your name : ");
if (guestList.includes(guest)) {
	alert("Welcome " + guest);
} else {
	alert("Sorry, You are not invited to the party!");
}
