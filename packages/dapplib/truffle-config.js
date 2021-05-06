require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remind concert harvest brave bottom theme'; 
let testAccounts = [
"0x131c1ce4452c71ae92e0223fb143e7202d99f849e4af0c4818f90adb549d430e",
"0x5f15841505f3e7fa6873c967f38cb8a8a0061cf2c8ddc71d1e58cd4445f4d904",
"0xe678d006b6740605918736369b49f1197e6b04bcce61217c02605e80c8e75e7f",
"0xb256dad80454732941596d917fb58e0cc1ea1603b61bb014a4708cff8c562699",
"0xdb2af3d6b89173eb6de9179b61d1ebbba636f44b9739af9d4c2f891252d63d48",
"0x31401a278c385a04cbf12cce973261feddec1a42033a4113119c8dd1928e470c",
"0x0d35db67b0a173723c4e4f17e83a2e5a8b26b6e07271b0259e41c88e1e1f04bd",
"0x59afdd2e71ad39d3c4b93c7aa2a2328d9bddf0c935ac7947ff23ec302efec8f5",
"0xa5730bcec1a8e0add2bef82ca0d339e822be55bddf7163ff61135b38a09c5f82",
"0x56b26e4e21bb66343f85beb2d1a325aa4c8102961d3a4a1bfd7fecacfe589f6e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

