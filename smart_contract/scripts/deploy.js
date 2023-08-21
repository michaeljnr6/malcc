const { ethers } = require("hardhat");

async function main() {
  const transactionsFactory = await ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  // The address is available immediately after deployment
  console.log("Transactions address: ", transactionsContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
