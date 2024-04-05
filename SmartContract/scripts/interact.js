const { ethers } = require("hardhat");
require("dotenv").config();

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

async function main() {
  const CPVContractFactory = await ethers.getContractFactory("CPVContract");
  CPVContract = await CPVContractFactory.attach(CONTRACT_ADDRESS);

  //Updating the current message
  const tx = await CPVContract.registerProduct("k2d8xa", "Jaguar", "TATA");
  await tx.wait();

  const prodInfo = await CPVContract.getProduct("k2d8xa");
  console.log("Product Detail is " + prodInfo);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
