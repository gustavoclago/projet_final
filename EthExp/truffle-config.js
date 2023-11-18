require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
//const { INFURA_API_KEY, MNEMONIC } = process.env;
const mnemonic = "PALAVRAS_DA_CARTEIRA_METAMASK"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, "https://MOEDA_DE_TESTE.infura.io/v3/API_KEY"),
      network_id: "5", // ID 5 representa a Goerli, ID 11155111 representa a Sepolia
      gas: 4465030,
    },
  },
};
