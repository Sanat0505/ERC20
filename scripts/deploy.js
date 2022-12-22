
const hre = require("hardhat");

async function main() {
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(100000000,50);
  await myToken.deployed();
  
  console.log("My Token deployed",myToken.address);
}
//error handling
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
