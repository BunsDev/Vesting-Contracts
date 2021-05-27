const MockERC20 = artifacts.require('MockERC20.sol');
const Vesting = artifacts.require('Vesting.sol');

module.exports = async function(deployer) {
  
  // Deploy Mock Token and Vesting
    const token = await MockERC20.new('Token', 'TK', web3.utils.toWei('1000'));
    const Vesting = await deployer.deploy(Vesting);
}

const Vesting = artifacts.require('Vesting.sol');

module.exports = async function(deployer) {

  // Deploy Vesting
  const Vesting = await deployer.deploy(
    Vesting
    );
}