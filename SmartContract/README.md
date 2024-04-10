# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Plesase Refer this tutorial to if you encounter any errors

- [Sample Tutorial MetaSchool](https://metaschool.so/courses/writing-your-first-hello-world-contract-in-solidity)

Setting up the environment variables

```
npm install dotenv --save --force
```

Open the .env file you have just created. Replace YOUR_PRIVATE_KEY with your MetaMask Private Key.

```
PRIVATE_KEY="YOUR_PRIVATE_KEY"
```

Please do run the following command to make sure each library is installed.

```
npm install --force
```

Updating Hardhat Config fileOpen your hardhat.config.js file and paste the following code. Don’t forget to update <YOUR-HTTPS-LINK> with your Alchemy HTTPS link.

```
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "<YOUR-HTTPS-LINK>",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
```

First, run the following command to compile the smart contract

```
npx hardhat compile
```

Now, run the script file using the following command.

```
npx hardhat run scripts/deploy.js --network sepolia
```

When you deploy your contract, you might see a warning related to ‘zodiac sign’ parameter being unused, let’s ignore that for now. We will get to it laterrrrr.If all goes well, your contract will be deployed and you will be able to see the address of the contract on the terminal. Copy that and save in your .env file with variable name as CONTRACT_ADDRESS, we will use it later to interact with the contract.Now your .env file should look something like this.

```
PRIVATE_KEY="YOUR_PRIVATE_KEY"
CONTRACT_ADDRESS="YOUR_DEPLOYED_CONTRACT_ADDRESS"
```

Contract is deployed. 🚀

#Interacting with the Deployed Contract

Run the following command to run the interact.js file.

```
npx hardhat run scripts/interact.js --network sepolia
```