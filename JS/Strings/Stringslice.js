alert("Welcome to Twitter!");
var tweet = prompt("Enter the tweet (limit 100 Characters)");
if (tweet.length > 100) {
	tweet = tweet.slice(0, 100);
	alert(tweet + "\n\nCuts your tweet down into 100 characters!");
	alert(tweet.length);
} else {
	alert(
		tweet +
			"\n\nYou left with " +
			Number(100 - tweet.length) +
			" Characters out of 100!"
	);
}
