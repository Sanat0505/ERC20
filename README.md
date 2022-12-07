# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```





ERC-20_SmartContract
ERC20(It is the technical standard for fungible tokens created using the Ethereum blockchain)

There are 6 functions... TotalSupply() --> supply of tokens



TotalSupply() --> supply of tokens

balanceOf(account)-->Account's Balance(number of tokens)

transfer(to,amont)--> takes tokens from the totalSupply and transfer to the user

transferFrom()-->tranfer tokens one account to the another

allownce()-->This method is exactly the same as the approved method
except that it checks if one user has enough balance to send a certain
amount of tokens to another

approave() --> verifies whether a smart contract is allowed to
allocate a certain amount of tokens to a user, considering the total
supply.



TOKEN DESIGN

initial supply (  send to owner  (70,000,000)  )
capped/max supply  (  100,000,000  )
burnable
//mining strategy
block reward --(
	_beforeTokenTransfer()
	_mintMinerReward()
)






deploy:-


npx hardhat run --network bsc scripts/deploy.js

