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


const public_key_hash  = keccak256(pubKey)
const address = "0x" + public_key_hash.slice(-40)
console.log("address:", address);
