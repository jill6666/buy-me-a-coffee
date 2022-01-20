const main = async () => {
  // This will actually compile our contract and generate the necessary files we need to work with our contract under the artifacts directory.
  const coffeeContractFactory = await hre.ethers.getContractFactory(
    "CoffeePortal"
  );
  const coffeeContract = await coffeeContractFactory.deploy();

  await coffeeContract.deployed(); // We'll wait until our contract is officially deployed to our local blockchain! Our constructor runs when we actually deploy.
  console.log("Coffee Contract deployed to:", coffeeContract.address);

  /*
   * Get Contract balance
   */
  let contractBalance = await hre.ethers.provider.getBalance(
    coffeeContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  /*
   * Let's try to buy a coffee
   */
  const coffeeTxn = await coffeeContract.buyCoffee(
    "This is coffee #1",
    "idris",
    ethers.utils.parseEther("0.001")
  );
  await coffeeTxn.wait();

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await hre.ethers.provider.getBalance(
    coffeeContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let allCoffee = await coffeeContract.getAllCoffee();
  console.log(allCoffee);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
