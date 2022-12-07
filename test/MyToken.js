const{ expect } = require("chai");
const hre = require("hardhat");
describe("MyToken contract",function(){
    let Token;
    let myToken;
    let owner;
    let add1;
    let add2;
    let tokenCap = 100000000;
    let tokenBlockReward = 50;

    beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        Token = await ethers.getContractFactory("MyToken");
        [owner, add1, add2] = await hre.ethers.getSigners();
    
        myToken = await Token.deploy(tokenCap, tokenBlockReward);
      });

      describe("Deployment", function () {
        it("Should set the right owner", async function () {
          expect(await myToken.owner()).to.equal(owner.address);
        });//owner deploying the contract
    
        it("Should assign the total supply of tokens to the owner", async function () {
          const ownerBalance = await myToken.balanceOf(owner.address);
          expect(await myToken.totalSupply()).to.equal(ownerBalance);
        });
    
        it("Should set the max capped supply to the argument provided during deployment", async function () {
          const cap = await myToken.cap();
          expect(Number(hre.ethers.utils.formatEther(cap))).to.equal(tokenCap);
        });
    
        it("Should set the blockReward to the argument provided during deployment", async function () {
          const blockReward = await myToken.blockReward();
          expect(Number(hre.ethers.utils.formatEther(blockReward))).to.equal(tokenBlockReward);
        });
      });//first block of test


      describe("Transactions", function () {
        it("Should transfer tokens between accounts", async function () {
          // Transfer 50 tokens from owner to add1
          await myToken.transfer(add1.address, 50);
          const add1Balance = await myToken.balanceOf(add1.address);
          expect(add1Balance).to.equal(50);
    
          // Transfer 50 tokens from add1 to add2
          // We use .connect(signer) to send a transaction from another account
          await myToken.connect(add1).transfer(add2.address, 50);
          const add2Balance = await myToken.balanceOf(add2.address);
          expect(add2Balance).to.equal(50);
        });
    
        it("Should fail if sender doesn't have enough tokens", async function () {
          const initialOwnerBalance = await myToken.balanceOf(owner.address);
          // Try to send 1 token from add1 (0 tokens) to owner (1000000 tokens).
          // `require` will evaluate false and revert the transaction.
          await expect(
            myToken.connect(add1).transfer(owner.address, 1)
          ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
    
          // Owner balance shouldn't have changed.
          expect(await myToken.balanceOf(owner.address)).to.equal(
            initialOwnerBalance
          );
        });
    
        it("Should update balances after transfers", async function () {
          const initialOwnerBalance = await myToken.balanceOf(owner.address);
    
          // Transfer 100 tokens from owner to addr1.
          await myToken.transfer(add1.address, 100);
    
          // Transfer another 50 tokens from owner to addr2.
          await myToken.transfer(add2.address, 50);
    
          // Check balances.
          const finalOwnerBalance = await myToken.balanceOf(owner.address);
          expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150));
    
          const add1Balance = await myToken.balanceOf(add1.address);
          expect(add1Balance).to.equal(100);
    
          const add2Balance = await myToken.balanceOf(add2.address);
          expect(add2Balance).to.equal(50);
        });
      });//final block of test

});