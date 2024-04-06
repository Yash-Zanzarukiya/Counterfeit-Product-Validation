const { ethers } = require("hardhat");
require("dotenv").config();

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

async function main() {
  const CPVContractFactory = await ethers.getContractFactory("CPVContract");
  CPVContract = await CPVContractFactory.attach(CONTRACT_ADDRESS);

  //Registering the Product
  console.log("Sending Transaction for Registering Product...");
  const txn = await CPVContract.registerProduct("vk18vk", "Wragon", "Virat Kohli");
  await txn.wait();

  // getting product info
  console.log("Reading Chaindata for getting Product info...");
  let prodInfo = await CPVContract.getProduct("vk18vk");
  console.log("Product Detail is : " + prodInfo);

  console.log("Reading Chaindata for getting Product info...");
  prodInfo = await CPVContract.getProduct("k2d8xa");
  console.log("Product Detail is : " + prodInfo);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
