async function main() {
  const CPVContract = await ethers.getContractFactory("CPVContract");
  console.log("Deploying Contract...");
  const cpvContract = await CPVContract.deploy();
  const txHash = cpvContract.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  console.log("Contract deployed to address:", txReceipt.contractAddress);
  console.log(txReceipt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
