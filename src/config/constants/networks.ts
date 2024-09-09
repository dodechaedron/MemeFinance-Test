import { ChainId } from '@pancakeswap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://hardworking-quick-pine.bsc.discover.quiknode.pro/88bb8b036ef3ae642ee0af4e32e7886b91628cbf',
  [ChainId.TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
}

export default NETWORK_URLS
