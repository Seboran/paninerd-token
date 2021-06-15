const PaninerdToken = artifacts.require("PaninerdToken");

module.exports = function (deployer) {
  deployer.deploy(PaninerdToken);
};
