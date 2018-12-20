// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKeyString();
console.log("privKey:", privKey);
 
// pubKey
const pubKey = wallet.getPublicKeyString();
console.log("pubKey:", pubKey);

// address
const address = wallet.getAddressString();
console.log("address:", address);

//JSON
const keystore = wallet.toV3("nccu");
console.log("keystore:",keystore);
