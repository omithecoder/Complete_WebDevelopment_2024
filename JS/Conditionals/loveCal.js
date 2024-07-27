var yourName = prompt("Enter your name : ");
var partnerName = prompt("Enter your partner Name : ");
var lovePercent = Math.round(Math.random() * 100) + 1;

if (lovePercent > 70) {
	alert(
		"Your love score is " +
			lovePercent +
			" % \nAnd you both love each other so much 💖💖💖💗"
	);
} else if (lovePercent >= 30 && lovePercent < 70) {
	alert(
		"Your love score is " +
			lovePercent +
			" % \nYour love is like Wi-Fi 🛜 – sometimes strong💪, sometimes weak ❤️‍🩹, but always connected!🔗"
	);
} else {
	alert(
		"Your love score is : " +
			lovePercent +
			" %" +
			"\nYou’re like two puzzle pieces 🧩 from different boxes 📦 – a challenging fit! 💔"
	);
}
