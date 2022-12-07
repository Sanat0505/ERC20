require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    bsc:{
      url : process.env.INFURA_BSC_ENDPOINT,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
