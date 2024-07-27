alert("Are you ready to read 99 Bottle🍾🍾 Song!");
var bottle = 99;
while (bottle >= 1) {
	var rem = bottle - 1;
	if (rem == 0) {
		rem = "no more";
	}
	console.log(
		bottle +
			" bottles of beer on the wall, " +
			bottle +
			" bottles of beer.\nTake one down and pass it around, " +
			rem +
			" bottles of beer on the wall.\n"
	);
	bottle--;
}

console.log(
	"No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."
);
