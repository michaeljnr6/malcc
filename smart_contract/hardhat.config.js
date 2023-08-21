require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: '0.8.9',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/LyEKAZpDTL4sepPmxCIHjHV9x5AWgs93',
      accounts: ['5925459117286fb1ca5879301258585bf17d1b49de6fc8113783f7213169e237'],
      gas: 600000000,
    },
  },
};