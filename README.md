# Simple dapp with ethers and Hardhat
<img width="805" alt="截圖 2022-02-19 下午6 45 28" src="https://user-images.githubusercontent.com/73696750/154797625-bd047c69-9ce5-4bcd-be77-28c6a7b3f850.png">

> description: In this project, you will learn how to create a dapp with hardhat and ethers on Next.js framework.<br/>
> This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

prerequest:

1. node v16.13.1

## Live Demo: https://buy-me-a-coffee-r1vmmfnc7-jill6666.vercel.app/

# :fire: get started!

## see current accounts on the chain

```shell
npx hardhat accounts
```

## add .env to PRIVATE_KEY for infura if deploy on rinkeby

```
// .env
INFURA_ID=YOUR_INFURA_ID
PRIVATE_KEY=YOUR_INFURA_PRIVATE_KEY
```

## deploy contract

make sure that the contract name is correct in `scripts/deploy.js`.

```shell
npx hardhat clean
npx hardhat node
npx hardhat run scripts/run.js
```

:warning: There is no need to transfer ETH to deployer account address because it's already had 100 ETH by hardhat default.
<br/>
See the information about this deployment and deployment configuration in terminal.

```shell
Deploying contracts with account:  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Account balance:  10000000000000000000000
Yo! Smart Contract
CoffeePortal address:  YOUR_DEPLOYED_CONTRACT_ADDRESS
```

## Replace contractAddress in frontend `client/pages/index.js`

```javascript
const contractAddress = YOUR_DEPLOYED_CONTRACT_ADDRESS;
```

## Run frontend

```shell
yarn
yarn dev
```

📱 open localhost:3000


---

ref: https://blog.idrisolubisi.com/build-a-mini-buymeacoffee-dapp-using-solidity-ethereum-smart-contract-reactjs-tailwindcss
