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

var Lazare = eth.accounts[0]
var sync = 100 * eth.syncing.currentBlock / eth.syncing.highestBlock
