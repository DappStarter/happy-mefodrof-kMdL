require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'half argue bright venture strategy razor often uncle include kite metal genuine'; 
let testAccounts = [
"0x9c8a6ccbec07341434db29e05a70785a5d9c5619252343446d9bb142237425c4",
"0x58b2cfd85b7f24d69f848d247aded3954d33a4f17d87f8d87bd2fe8281c2e792",
"0x904a00ad9f489bed7cee56bd7de13fd9dad606f908ccca7a1578817f1f73cd8c",
"0xa2035cce2958d4ba87277ab716485ccfdca167c2d7a5703382915957f99cb14e",
"0x827458c72f6c3ddd5d1e909fb489c9578a1bc35a84e082059e890c05cbfa6a05",
"0xe46bbcea05ee11de3e790a520cb2214ffa615688fa35004df34dab806f7c6778",
"0x3ae4a5d858bc1392f9a0e3474989ed7452ac86a4628e8fdcf7fd48c75a4a25d7",
"0x2a153143b4813e047f19e1f2b2fbca602d14e7dd9a93d544b84375565d749351",
"0x16aae649c119d76a40c3990cd6c1babe6f14529a00c26444331347c69bce86b4",
"0xae2908a86244430238a5c6093cd43ef268d792365f64261f6a71d6b6f9979659"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


