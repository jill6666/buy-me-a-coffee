# Simple dapp with ethers and Hardhat

description: In this project, you will learn how to create a dapp with hardhat and ethers on Next.js framework.<br/>
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

- prerequest:

1. Node/NPM on your PC

```shell
node -v // v16.13.1
```

# Basic Sample Hardhat Project

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
```

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
npx hardhat run scripts/run.js
```

:warning: There is no need to transfer ETH to deployer account address because it's already had 100 ETH by hardhat default.
<br/>
See the information about this deployment and deployment configuration in terminal.

```shell
Deploying contracts with account:  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Account balance:  10000000000000000000000
Yo! Smart Contract
CoffeePortal address:  0x5FbDB2315678afecb367f032d93F642f64180aa3
```

## Replace contractAddress in frontend `client/pages/index.js`

```javascript
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
```

## Run frontend

```shell
yarn
yarn dev
```

📱 open localhost:3000
