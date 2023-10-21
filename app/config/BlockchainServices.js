import Web3 from "web3";
import gamblingabi from "./abi.json";
import { ethers } from "ethers";


const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

const Address = "0xD1E9228CCe5acD7F13B15aD43A674b66Eb462023";

export const addDocument = async ({ name,usage,ipfsHash }) => {
 

  const provider = isBrowser() && window.ethereum
  ? new ethers.providers.Web3Provider(window.ethereum)
  : ethers.providers.getDefaultProvider();



  console.log(provider);
  const signer = provider.getSigner();
 
  console.log(signer);
  const Role = new ethers.Contract(Address, gamblingabi, signer);
  console.log(Role);
  const tokenId = await Role.addDocument(name, usage, ipfsHash);
  console.log(tokenId);
  return tokenId;
};

export const getDocuments = async ({ address }) => {
  const provider = isBrowser() && window.ethereum
  ? new ethers.providers.Web3Provider(window.ethereum)
  : ethers.providers.getDefaultProvider();



  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(Address, gamblingabi, signer);
  console.log(Role);
  const tokenId = await Role.getDocuments({
    address
  });
  console.log(tokenId);
  return tokenId;
};
