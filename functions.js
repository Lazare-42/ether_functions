function checkAllBalances() {
	var totalBal = 0;
	for (var acctNum in eth.accounts) {
		var acct = eth.accounts[acctNum];
		var acctBal = web3.fromWei(eth.getBalance(acct), "ether");
		totalBal += parseFloat(acctBal);
		console.log("  eth.accounts[" + acctNum + "]: \t" + acct + " \tbalance: " + acctBal + " ether");
	}
	console.log("  Total balance: " + totalBal + " ether");
};

var Lazare = "0xb740184a57642C3e4AD7E22493F26b1E8CF73Ae"
var sync = 100 * eth.syncing.currentBlock / eth.syncing.highestBlock



