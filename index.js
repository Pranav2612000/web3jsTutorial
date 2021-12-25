const Web3 = require('web3');
const rpcUrlRinkeby = "https://rinkeby.infura.io/v3/a6abe02cd180441d9ce434ad5b3836d5";
const rpcUrlMain = "https://mainnet.infura.io/v3/a6abe02cd180441d9ce434ad5b3836d5";
const account = "0x4Ad0De042eD1AE34798C21e53F1314A5Bc515D7E";

const web3 = new Web3(rpcUrlRinkeby);

web3.eth.getBalance(account, (err, wei) => {
  const balance = web3.utils.fromWei(wei, "ether");
  console.log("Balance for the account is", balance);
});

