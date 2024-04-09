const { ethers } = require("hardhat");
require("dotenv").config();

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

async function main() {
  const CPVContractFactory = await ethers.getContractFactory("CPVContract");
  CPVContract = await CPVContractFactory.attach(CONTRACT_ADDRESS);

  //Registering the Product
  console.log("Sending Transaction for Registering Product...");
  const txn = await CPVContract.registerProduct("hrm08", "Levano", "Hariom Bhai");
  await txn.wait();

  console.log("\nReading Chaindata for getting Product info...");
  prodInfo = await CPVContract.getProduct("hrm08");
  console.log("Product Detail is : " + prodInfo);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
