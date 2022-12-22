require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url : process.env.GOERLI_END_POINT,
      accounts:[process.env.PRIVATE_KEY]
    },
    sepolia:{
      url : process.env.SEPOLIA_END_POINT,
      accounts:[process.env.PRIVATE_KEY]
    },
    bsc: {
      url : process.env.BSC_END_POINT,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
