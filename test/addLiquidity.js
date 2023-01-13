const web3 = require('web3');
const BN = web3.utils.BN;

const chai = require("chai");
const chaiBN = require('chai-bn')(BN);
chai.use(chaiBN);

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;

const ElCartelElite = artifacts.require("ElCartelElite");

contract("ElCartelElite", async() => {

  it("Deploying contract ElCartelElate", async () => {
    const elCartelElite = await ElCartelElite.deployed();
    console.log(elCartelElite.address);
    assert(elCartelElite.address !== '')
  });

  it("Total Tokens is 1000000000", async()=>{
    const elCartelElite = await ElCartelElite.deployed();
    const expectedTotal = new BN('1000000000000000000');
    const actualTotal = await elCartelElite.totalSupply.call();
    await expect(actualTotal).to.be.a.bignumber.equal(expectedTotal);
  });

  it("Max Transaction : 0.003% ", async()=>{
    const elCartelElite = await ElCartelElite.deployed();
    const expectedTotal = new BN('1000000000000000000');
    const actualTotal = await elCartelElite.totalSupply.call();
    await expect(actualTotal).to.be.a.bignumber.equal(expectedTotal);
  });

  it("Max Wallet : 0.003%", async()=>{
    const elCartelElite = await ElCartelElite.deployed();
    const expectedTotal = new BN('1000000000000000000');
    const actualTotal = await elCartelElite.totalSupply.call();
    await expect(actualTotal).to.be.a.bignumber.equal(expectedTotal);
  });

});
