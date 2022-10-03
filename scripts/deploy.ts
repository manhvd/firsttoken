import * as Config from "./config"
import { ethers,hardhatArguments } from "hardhat";

async function main() {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
  const [deployer] = await ethers.getSigners();
  console.log('deploy from address: ', deployer.address);


  // const MTK01 = await ethers.getContractFactory("MyFisrtToken");
  // const mtk01 = await MTK01.deploy();
  // console.log('MKT01 address: ', mtk01.address);
  // Config.setConfig(network + '.MKT01', mtk01.address);

  // const MVault = await ethers.getContractFactory("MVault");
  // const mVault = await MVault.deploy();
  // console.log('MVault address: ', mVault.address);
  // Config.setConfig(network + '.Vault', mVault.address);
  
  const USDT = await ethers.getContractFactory("USDT");
  const mtk01 = await USDT.deploy();
  console.log('USDT address: ', mtk01.address);
  Config.setConfig(network + '.USDT', mtk01.address);

  const MTK01CrowdSale = await ethers.getContractFactory("MTK01CrowdSale");
  const crowdSale = await MTK01CrowdSale.deploy(1000,100,'0xA3805bcc742598A6933411360538F4AdB2eDD438', '0xdCA179343cDE489B6f574b8A46Fa5b5BD84Ccc04');
  console.log('MTK01CrowdSale address: ', crowdSale.address);
  Config.setConfig(network + '.MTK01CrowdSale', crowdSale.address);

  // const Ico = await ethers.getContractFactory("FLPCrowdSale");
  // const ico = await Ico.deploy(1000,100,'0xdF8De3b50Be87dE8676c4731187c5DC5C00E70F3', '0xd54D6d5BD983a6cA18F8820f80E0A970FE4A9a8c');
  // console.log('ICO address: ', ico.address);
  // Config.setConfig(network + '.ico', ico.address);

  
  // const Hero = await ethers.getContractFactory("Hero");
  // const hero = await Hero.deploy();
  // console.log('stman hero address: ', hero.address);
  // Config.setConfig(network + '.Hero', hero.address);


  // const MKP = await ethers.getContractFactory("HeroMarketplace");
  // const heroMarketplace = await MKP.deploy("0x65f00a282A58B30f8376D41832d76CeCB7b6186C", "0xd54D6d5BD983a6cA18F8820f80E0A970FE4A9a8c");
  // console.log('Market deployed at: ', heroMarketplace.address);
  
  // const Auction = await ethers.getContractFactory("Auction");
  // const auction = await Auction.deploy("0xd54D6d5BD983a6cA18F8820f80E0A970FE4A9a8c", "0x65f00a282A58B30f8376D41832d76CeCB7b6186C");
  // console.log('Market deployed at: ', auction.address);
  
  //Config.setConfig(network + '.Auction', auction.address);

  await Config.updateConfig();
  
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
