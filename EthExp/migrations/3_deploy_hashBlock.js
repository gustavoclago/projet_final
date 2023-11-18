const hashBlock = artifacts.require("hashBlock");

module.exports = function(deployer) {
  deployer.deploy(hashBlock);
};
