require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
//const { INFURA_API_KEY, MNEMONIC } = process.env;
const mnemonic = "machine bottom cabbage neck select know coyote power symptom word resemble lazy"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, "https://goerli.infura.io/v3/d56b9d95dc6d4f86bfaa5858283a55f3"),
      network_id: "5",
      gas: 4465030,
    },
  },
};