const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "orange apple banana ...";

module.exports = {
  networks: {
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://white-cool-resonance.bsc-testnet.discover.quiknode.pro/253ac113535fe97d193c581fbec3e238edf419b1/")
      },
      gas: 5000000,
      gasPrice: 5e9,
      network_id: 1
    }
  }
