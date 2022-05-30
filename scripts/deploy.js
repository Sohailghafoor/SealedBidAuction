
const hre = require("hardhat");

async function main() {

  const SealedAuction = await hre.ethers.getContractFactory("SealedBidAuction");
  const auction = await SealedAuction.deploy("0x11F8BFE6DAc774B7a1adDa5952a6382A4d274C19","10","10");

  await auction.deployed();

  console.log("SealedBidAuction deployed to:", auction.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
