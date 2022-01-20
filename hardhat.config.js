require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: require("find-config")(".env") });

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
console.log("PRIVATE_KEY === ", process.env.PRIVATE_KEY);
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/73997a11ad5d433d9e0590d794f3abff",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
