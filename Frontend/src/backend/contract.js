import { ethers } from "ethers";


const registerProduct = async (product_id, product_name, brand_id) => {
  try {
    const { ethereum } = window;

    const CONTRACT_ABI = [
      {
        inputs: [
          {
            internalType: "string",
            name: "_serialNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_brand",
            type: "string",
          },
        ],
        name: "registerProduct",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_serialNumber",
            type: "string",
          },
        ],
        name: "getProduct",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
          {
            internalType: "string",
            name: "",
            type: "string",
          },
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];
    const CONTRACT_ADDRESS = "0x3f5e1f7ca6fb10db8791d3d80219283f20b8a641";

    if (ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const productContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      return await productContract.registerProduct(product_id, product_name, brand_id);
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};
const getProduct = async (product_id) => {
  try {
    const { ethereum } = window;
    const CONTRACT_ABI = [
      {
        inputs: [
          {
            internalType: "string",
            name: "_serialNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_brand",
            type: "string",
          },
        ],
        name: "registerProduct",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_serialNumber",
            type: "string",
          },
        ],
        name: "getProduct",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
          {
            internalType: "string",
            name: "",
            type: "string",
          },
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];

    const CONTRACT_ADDRESS = "0x3f5e1f7ca6fb10db8791d3d80219283f20b8a641";

    if (ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);

      const productContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
      return await productContract.getProduct(product_id);
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

export { registerProduct, getProduct };
