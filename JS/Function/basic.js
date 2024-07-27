// Buy milk bottles from money inside your wallet
var moneyInWallet = prompt(
	"Enter how much money do you have in your wallet : "
);
alert(
	"As One bottle of milk cost 1.5 Rupees then you can able to buy " +
		getBottles(moneyInWallet) +
		" milk bottles"
);

function getBottles(money) {
	return Math.floor(money / 1.5);
}
