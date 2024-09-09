import { ChainId, Token } from '@pancakeswap/sdk'

export const MARCO: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x963556de0eb8138E97A85F0A86eE0acD159D210b',
    18,
    'MARCO',
    'MELEGA',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    'MARCO',
    'MelegaSwap',
  ),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
  ),
}

export const WBNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token',
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
export const USDC = new Token(
  ChainId.MAINNET,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
)
export const XRP = new Token(
  ChainId.MAINNET,
  '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
  18,
  'XRP',
  'Binance-Peg XRP Token',
)

const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  cake: {
    symbol: 'MEME',
    address: {
      56: '0x963556de0eb8138E97A85F0A86eE0acD159D210b',
      97: '0x41E276a581CB9db75BFfCD69289dDd9046091586',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  POP: {
    symbol: 'POP',
    address: {
      56: '0x4EBD990c64a914258C3b6590273B135db60C97Db',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.mrpringles.me',
  },
  HUGO: {
    symbol: 'HUGO',
    address: {
      56: '0x28E3fF085F67163532a843fBF714178770A0210c',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://hugoinu.com/',
  },
  GOGU: {
    symbol: 'GOGU',
    address: {
      56: '0x1bd5B673627810576F490135A3E54847DA1d9C58',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://gogucoin.com',
  },
  SUP: {
    symbol: 'SUP',
    address: {
      56: '0x00274214C88e481eCC63460f11b264923C67f602',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  EDENX: {
    symbol: 'EDENX',
    address: {
      56: '0x9eC7850ffa43C2392f103F73b5c36D661F302A65',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://edenxfunding.com/en',
  },
  PRP: {
    symbol: 'PRP',
    address: {
      56: '0xc61b77Ec73BEb344404a3E3b9Bb23524A1cB5562',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'http://pepeprime.live',
  },
  PORN: {
    symbol: 'PORN',
    address: {
      56: '0x7D82b51fF67F94189c7C59A6648fDC34B3038C5E',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.pornai.tech/',
  },
  EYED: {
    symbol: 'EYED',
    address: {
      56: '0xeDd9f422bC4D8E55c93a4E2fE64615f8dAb27223',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.eyed.me',
  },
  BART: {
    symbol: 'BART',
    address: {
      56: '0xC444Dde1cdad47C9082ef5122aAc5301a1e84E14',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://twitter.com/bartofficial0x',
  },
  MongBNB: {
    symbol: 'MongBNB',
    address: {
      56: '0x5D31aA2330EFA65ACCa9567796FDf7d1caa6fA9A',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://linktr.ee/mongbnb',
  },
  MEME: {
    symbol: 'MEME',
    address: {
      56: '0x4a645fB8AE60979eDf7f47C5c1A4569b7Fb07851',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://meme.bio',
  },
  XCEO: {
    symbol: 'XCEO',
    address: {
      56: '0x4647dB3E806bFBdf755Fc3624319c04cEC151b7C',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.x-ceo.com',
  },
  RZ4: {
    symbol: '4RZ',
    address: {
      56: '0x57A5aa266107261C2F497c8b4047D5299824D3CB',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.4realza.cloud',
  },
  BIBI: {
    symbol: 'BIBI',
    address: {
      56: '0xFE8bF5B8F5e4eb5f9BC2be16303f7dAB8CF56aA8',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  SHAUN: {
    symbol: 'SHAUN',
    address: {
      56: '0x05f816B53a4c7b6B3bfbE1F759DA7FE188689c5b',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://shauninu.io',
  },
  PEPA: {
    symbol: 'PEPA',
    address: {
      56: '0xC3137c696796D69F783CD0Be4aB4bB96814234Aa',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://www.pepa-inu.com',
  },
  IFRIT: {
    symbol: 'IFRIT',
    address: {
      56: '0xd86C5C6590394711E1b52bE2DE4Dd5318b2A79Fb',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://ifritnetwork.com',
  },
  BACD2: {
    symbol: 'BACD2',
    address: {
      56: '0xc96Ebbc3b3158aAb69312e89fe04C9Cd192BeE01',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'http://www.bacd.io',
  },
  PepeBNB: {
    symbol: 'PepeBNB',
    address: {
      56: '0x47Fd014706081068448b89Fc6bAca2730977216a',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://melega.finance/',
  },
  SVR: {
    symbol: 'SVR',
    address: {
      56: '0xF599eF4aAEC7462E685C783079Baa3c433f0F6D5',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://savertoken.org/',
  },
  BNBTiger: {
    symbol: 'BNBTiger',
    address: {
      56: '0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://bnbtiger.top/',
  },
  SLR: {
    symbol: 'SLR',
    address: {
      56: '0xf948feA2a95178D1B4889976629643d9a0C50295',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 4,
    projectLink: 'https://solerise.org',
  },
  Dsun: {
    symbol: 'Dsun',
    address: {
      56: '0x1384555d00144c7725aC71DA2bB1fd67b9AD889a',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.dsundao.com/en/index.html',
  },
  NERVE: {
    symbol: 'NERVE',
    address: {
      56: '0x8c21CEf3c0f25E7FA267E33602702e3f91775360',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://nerveflux.io/',
  },
  CDIG: {
    symbol: 'CDIG',
    address: {
      56: '0x74Aa1B8De994239Ae0e1e01BBBeBC7e430E31a88',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 8,
    projectLink: 'https://www.c6digital.com/',
  },
  EBTC: {
    symbol: 'EBTC',
    address: {
      56: '0x756FB749575cAaE216Fc728E91a6cdBb637dA1f2',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'http://www.extremebtc.org/',
  },
  PHDAO: {
    symbol: 'PHDAO',
    address: {
      56: '0xeec0f509e651135c7Cd01C07eA140064cf9AC41b',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'http://xphxco.org/',
  },
  UFCB: {
    symbol: 'UFCB',
    address: {
      56: '0x92514cC3143228F2A25D1e19ABF0d9Bd719Ec50d',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://ufcb.world',
  },
  FRTC: {
    symbol: 'FRTC',
    address: {
      56: '0x88B985007d714d1578BCcdEc2303212c14946cdC',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://fartcoin.gold/',
  },
  SHIBACASH: {
    symbol: 'SHIBACASH',
    address: {
      56: '0x7e4e3BA4675c39FF2863073e171b0a2E93A592E0',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://melega.finance/',
  },
  RMOON: {
    symbol: 'RMOON',
    address: {
      56: '0x78bc22a215C1eF8a2e41Fa1c39CD7BDC09bd5174',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://melega.finance/',
  },
  KAREN: {
    symbol: 'KAREN',
    address: {
      56: '0xFD42728b76772A82cCaD527E298Dd15A55F4DdD6',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://melega.finance/',
  },
  KUSH: {
    symbol: 'KUSH',
    address: {
      56: '0x0a6C10AB62408F8AF68B7132A929aA816b0d85D1',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.kushcoin.cc/',
  },
  TFT: {
    symbol: 'TFT',
    address: {
      56: '0xf647EE2DB2Ce2f42b4A851eFDc89656CC4A3c590',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'http://tombetsportsfantoken.com',
  },
  LMCSWAP: {
    symbol: 'LMCSWAP',
    address: {
      56: '0x383094a91Ef2767Eed2B063ea40465670bf1C83f',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://limocoin.net',
  },
  bytc: {
    symbol: 'bytc',
    address: {
      56: '0xae0D9f4E2ba939289955fB96b3ed6c7EBbEea6b5',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://bytecommerce.io/',
  },
  MIR: {
    symbol: 'MIR',
    address: {
      56: '0x2134f3A7b18aE4161fBaB6EcCCa7497E17a6777b',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://mir-token.com',
  },
  RFX: {
    symbol: 'RFX',
    address: {
      56: '0xB44c63a09adF51f5E62CC7B63628b1B789941FA0',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://melega.finance/',
  },
  TREE: {
    symbol: 'TREE',
    address: {
      56: '0x089DE503a02529e10205EcfaA59db5421e755556',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://treenity.space/',
  },
  FLOSHIDO: {
    symbol: 'FLOSHIDO',
    address: {
      56: '0x87e04a05499cb8d352c2E367870D4cf0Ead460F0',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'http://floshido.com',
  },
  Bera: {
    symbol: 'Bera',
    address: {
      56: '0xa76a484658192cac6a0B7D135699BE2C480929aB',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.bernaswap.finance/',
  },
  REAL: {
    symbol: 'REAL',
    address: {
      56: '0x7b767Ae48D8BB479EFF5427aE5Ab8A90e4198276',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://realtoken.social',
  },
  YKS: {
    symbol: 'YKS',
    address: {
      56: '0x00855c21754FE85fD4E38Ac23D2B3E091B04a042',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'http://www.yourkiss.xyz',
  },
  wCHK: {
    symbol: 'wCHK',
    address: {
      56: '0xCd03bCF9ABBaE8ea85C74Ca079B98768380A2950',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.chikoverse.com/',
  },
  MRABBIT: {
    symbol: 'MRABBIT',
    address: {
      56: '0xbFDA21Db28D5f3dc9586c190804871F831C6eb4F',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://mrrabbit.io',
  },
  FNT: {
    symbol: 'FNT',
    address: {
      56: '0xD6c08040Db9d34932BA34c2cE10Ed37b4667A96a',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://fortnite-token.gitbook.io/fortnite-token/',
  },
  BEP40: {
    symbol: 'BEP40',
    address: {
      56: '0xDA54d75063eA90BC29ba50B6d998929CAe866b16',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://bep40.com/',
  },
  WHEX: {
    symbol: 'WHEX',
    address: {
      56: '0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://www.whexcosystem.com/',
  },
  BTCF: {
    symbol: 'BTCF',
    address: {
      56: '0x1972633C2BE10c4B977d3260Fee1cFf228bf2a5d',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 6,
    projectLink: 'https://btcf.info/en',
  },
  DOWA: {
    symbol: 'DOWA',
    address: {
      56: '0x651909Ea73704b0556a564F732cCF8b195F295Cc',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://dogwars.io',
  },
  alt: {
    symbol: 'ALT',
    address: {
      56: '0x2a6677F132D4aB9c9F8d6a72113094232eA1F830',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://allspot.store/',
  },
  help: {
    symbol: 'HELP',
    address: {
      56: '0xB0666C07E65D43958359ad25AE0307a36005B54d',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://helprewardtoken.io/',
  },
  XPHX: {
    symbol: 'XPHX',
    address: {
      56: '0x8729123aC749359144DB4396F8ecF32976f7A86e',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'http://xphxco.org',
  },
  HYPEC: {
    symbol: 'HYPEC',
    address: {
      56: '0xBc64Cd76FF32Bb8695079Af834f672e8ECe62dd4',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://cervejahype.com/',
  },
  DOGEUM: {
    symbol: 'DOGEUM',
    address: {
      56: '0xE83981C6E294881D92697FdC887D19Acd9A820E3',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'http://dogeum.io',
  },
  diga: {
    symbol: 'DIGA',
    address: {
      56: '0x725ee71e9376366Cb2c978C12cfBe10E82EFc874',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://hancoin.finance/',
  },
  sweep: {
    symbol: 'SWEEP',
    address: {
      56: '0x09c704c1EB9245Af48f058878e72129557a10F04',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://www.sweepproject.com/',
  },
  WHEXDAO: {
    symbol: 'WHEXDAO',
    address: {
      56: '0x1fFD93F8c3d99bDAA4A012A0Fc26868F00Cfa5c2',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'http://whexcosystem.com',
  },
  susu: {
    symbol: 'SUSU',
    address: {
      56: '0x583Bf0642a92cF7512dd120f7669BDd8173b7A4F',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'http://www.susumi.io',
  },
  ipl: {
    symbol: 'IPL',
    address: {
      56: '0xD625E86E41ECf854D7baEd5f519a4a57991417Bb',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.inseparable.cba.pl/',
  },
  dyn: {
    symbol: 'DYN',
    address: {
      56: '0x26212BEbb11F22c938C4d0655962BDA60D14C47C',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.dyakon.eu/',
  },
  lcsc: {
    symbol: 'LCSTOKEN',
    address: {
      56: '0xE5086eF5e4Bc6b7CE5606CdEC5524E8ea407D50e',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://learncryptosecrets.com',
  },
  sbdex: {
    symbol: 'SBDEX',
    address: {
      56: '0x48B15cb805268f88b927e17EC39f078Ca68C388E',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.sbdexcoin.com/',
  },
  rug: {
    symbol: 'RUG',
    address: {
      56: '0xd8751EE1be064dDda268a29fe48538706661820b',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://linktr.ee/rugtoken',
  },
  sfea: {
    symbol: 'SFEA',
    address: {
      56: '0x9D4C96e79aDf11b887cD5E30E78A2Ba88a984114',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://snowflaketoken.io/',
  },
  ggtkn: {
    symbol: 'GGTKN',
    address: {
      56: '0x1F7e8fe01AEbA6fDAEA85161746f4D53DC9bdA4F',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://ggtkn.com/',
  },
  tpcv3: {
    symbol: 'TPCv3',
    address: {
      56: '0xD8405d25f108a0Dd6db68082F1554f08eA6794f3',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.thetransplantcoin.com',
  },
  spaceape: {
    symbol: 'SpaceApe',
    address: {
      56: '0xe7D73b62256c30B5c3F3389Ab6186bD0D95f8ea9',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://www.spaceapebsc.com/',
  },
  hse: {
    symbol: 'HSE',
    address: {
      56: '0x4a6D76C3a65f296468d7910c79f12Fdd5202A920',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://hest.live/',
  },

  luck: {
    symbol: 'LUCK',
    address: {
      56: '0xeE86B71B787f6DCF83a9856D181dda2b7b8398B0',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://4lc.site/',
  },
  poop: {
    symbol: 'POOP',
    address: {
      56: '0xa1611E8D4070dee36EF308952CF34255c92a01c5',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://www.poochain.co/',
  },
  cti: {
    symbol: 'CTI',
    address: {
      56: '0xB9a5676C1614ab480B361A447D1e99c8826e84C9',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://communityinu.org/',
  },
  cvl: {
    symbol: 'CVL',
    address: {
      56: '0x9C845ed620C4AECfB7C4EA1693e135663A55cFc1',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://cryptoverseland.org/',
  },
  fas: {
    symbol: 'FAS',
    address: {
      56: '0x471ed23831918959Bbd85C479120A4365DB7F31a',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://linktr.ee/fasst',
  },
  C4Cv2: {
    symbol: 'C4Cv2',
    address: {
      56: '0x8929dfe88b3A781E07d8Ca08FD0633eB3e79DE2C',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://crypto4ac.net/',
  },
  sfe: {
    symbol: 'SFE',
    address: {
      56: '0x02878FFf5d7CD4F8dc8eCB6701fc98c560fDC1b4',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://snowflaketoken.io/',
  },
  befxold: {
    symbol: 'BEFX',
    address: {
      56: '0xFcab93b4b98Ac0F9C65A724B10cd5Ed1892bB9D7',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://linktr.ee/belifex',
  },
  befx: {
    symbol: 'BEFX',
    address: {
      56: '0x75B2fdd95418e093fCA7DB858B36549e5e412076',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://linktr.ee/belifex',
  },
  fwc: {
    symbol: 'FWC',
    address: {
      56: '0x6D3a160B86eDcD46D8F9bBa25c2F88ccCADe19fc',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://www.fwctoken.io/',
  },
  borz: {
    symbol: 'BORZ',
    address: {
      56: '0x08DA9EB6147694e671A455d946A620A70d721EaE',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://borztoken.com/',
  },
  Ctrl2XY: {
    symbol: 'Ctrl2XY',
    address: {
      56: '0x51e91e3e1E87b923D087cc94ab6678854567c745',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  lois: {
    symbol: 'LOIS',
    address: {
      56: '0xad09104083d182D067CAe2a123C6F1b052D2eA42',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://lois.zone/',
  },
  dogebit: {
    symbol: 'DOG',
    address: {
      56: '0x1DE5Dbcb14Cb8CB9e6A73677066181325CE53f7c',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://www.dogebit.online/',
  },
  lira: {
    symbol: 'LIRA',
    address: {
      56: '0xA80a006A48dc7203EB3AA7E0b3816918d242CFC4',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://lira.financial/',
  },spx: {
    symbol: 'SPX',
    address: {
      56: '0xB705CFFb90A1169C56D5Bf78a5a25B439CD4d381',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://www.swapdepot.net/',
  },
  hbit: {
    symbol: 'HBIT',
    address: {
      56: '0xEda3866f07566d9379a91A07F8D62e19C03183e0',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  ggw: {
    symbol: 'GGW',
    address: {
      56: '0x9Acda5B7Ba829172036D030d5A664298eA0a7129',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://googwaiglobal.com',
  },
  gpay: {
    symbol: 'GPAY',
    address: {
      56: '0xaA3ECC6D3e77Dd33cF259859b0cA58CA93A07A9c',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://gpaycoins.com',
  },
  rotto: {
    symbol: 'ROTTO',
    address: {
      56: '0x9Ae58314b3e11Bc836eCa62302264b617641c6ed',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://linktr.ee/rottoken',
  },
  koala: {
    symbol: 'KOALA',
    address: {
      56: '0xA1217C0cce65A37E77cF43Af277c0B29D808652c',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://twitter.com/infok0ala',
  },
  qcwc: {
    symbol: 'QCWC',
    address: {
      56: '0x1Bd7A9D9675385ad78628ec6Bb87e11F578264E8',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://qatarchampswc.com/',
  },
  ostrich: {
    symbol: 'OSTRICH',
    address: {
      56: '0xFd0a4f965a6F70426053B575FD190E464aa3C5AE',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://linktr.ee/ostrichclubcoin',
  },
  gwt: {
    symbol: 'GWT',
    address: {
      56: '0x0cf1460Cceb0a6DE0722E9f932C1ea6F7c54AA35',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://t.me/gemguardwallet',
  },
  froge: {
    symbol: 'FROGE',
    address: {
      56: '0xe875E0d597A0b71715da182B9A2277bDB4353ADD',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://linktr.ee/everfrogeinu',
  },
  mm19: {
    symbol: 'MM19',
    address: {
      56: '0x3c19956E1EC649831a3728934145D557778D48Eb',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  shib: {
    symbol: 'SHIB',
    address: {
      56: '0x2859e4544C4bB03966803b044A93563Bd2D0DD4D',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  usdd: {
    symbol: 'USDD',
    address: {
      56: '0xd17479997F34dd9156Deef8F95A52D81D265be9c',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  marcobnb: {
    symbol: 'MARCO-BNB',
    address: {
      56: '0x94bAD9CDC0AEdB114456FFD973f1a7602bD18522',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  mxmxbnb: {
    symbol: 'MXMX-BNB',
    address: {
      56: '0x63CC9688F90A92FF19dd3e0904F5b1464865cB9b',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  mm72bnb: {
    symbol: 'MM72-BNB',
    address: {
      56: '0x8Cc55E5A3C1601F44383aD506Aa2347165e6C685',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  pancake: {
    symbol: 'CAKE',
    address: {
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  mxmx: {
    symbol: 'MXMX',
    address: {
      56: '0xc93B7e6d6445f8e7de92abDDbFBC8057CdCaA1a6',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.masterm.world/',
  },
  fbtc: {
    symbol: 'FBTC',
    address: {
      56: '0x39C6dB7f07146A9C4ccdF7e2F7d7A02B5BF61910',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://freebitcoinx.com',
  },
  volt: {
    symbol: 'VOLT',
    address: {
      56: '0x7db5af2B9624e1b3B4Bb69D6DeBd9aD1016A58Ac',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://voltinu.in/',
  },
  mm72: {
    symbol: 'MM72',
    address: {
      56: '0xdF9e1A85dB4f985D5BB5644aD07d9D7EE5673B5E',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.mm72.io/',
  },
  gitto: {
    symbol: 'GIOTTO',
    address: {
      56: '0xD04Ee1B6A9c4E4942f4A3D88C47B256bA5323297',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  bear: {
    symbol: 'BEAR',
    address: {
      56: '0x6effC3B9eA59a081E7132ad2E491D1AE523394F5',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.teddy.finance/',
  },
  gcc2: {
    symbol: '2GCC',
    address: {
      56: '0x1a515bf4e35AA2DF67109281DE6B3b00Ec37675E',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://www.2gcc.eu/',
  },
  m01: {
    symbol: 'M01',
    address: {
      56: '0x4034875250F797D00b819e9011c5BB9c2e799631',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://www.mission1.club/',
  },
  rmbr: {
    symbol: 'RMBR',
    address: {
      56: '0xE7ba8bCf0fe998c77163B42c96C0b12a834b06Ed',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 9,
    projectLink: 'https://melega.finance/',
  },
  zoloto: {
    symbol: 'ZLT',
    address: {
      56: '0x502EEd71FFe313252cADc745fac1223e126e002e',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  
  moceans: {
    symbol: 'MOCEANS',
    address: {
      56: '0x6c4D9bB6Be7dbB88cE3e0e7b6848E306e03fEC55',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  oceans: {
    symbol: 'OCEANS',
    address: {
      56: '0x7769d930BC6B087f960C5D21e34A4449576cf22a',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 5,
    projectLink: 'https://melega.finance/',
  },
  babycake: {
    symbol: 'BABYCAKE',
    address: {
      56: '0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://babycake.app/',
  },
  bmon: {
    symbol: 'BMON',
    address: {
      56: '0x08ba0619b1e7A582E0BCe5BBE9843322C954C340',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://binamon.org/',
  },
  hero: {
    symbol: 'HERO',
    address: {
      56: '0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://metahero.io/',
  },
  wsg: {
    symbol: 'WSG',
    address: {
      56: '0xA58950F05FeA2277d2608748412bf9F802eA4901',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://wsg.gg/',
  },
  mcrn: {
    symbol: 'MCRN',
    address: {
      56: '0xacb2d47827C9813AE26De80965845D80935afd0B',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.macaronswap.finance/',
  },
  revv: {
    symbol: 'REVV',
    address: {
      56: '0x833f307ac507d47309fd8cdd1f835bef8d702a93',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://revvmotorsport.com/',
  },
  skill: {
    symbol: 'SKILL',
    address: {
      56: '0x154A9F9cbd3449AD22FDaE23044319D6eF2a1Fab',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.cryptoblades.io/',
  },
  if: {
    symbol: 'IF',
    address: {
      56: '0xB0e1fc65C1a741b4662B813eB787d369b8614Af1',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://impossible.finance/',
  },
  sps: {
    symbol: 'SPS',
    address: {
      56: '0x1633b7157e7638C4d6593436111Bf125Ee74703F',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://splinterlands.com',
  },
  chess: {
    symbol: 'CHESS',
    address: {
      56: '0x20de22029ab63cf9A7Cf5fEB2b737Ca1eE4c82A6',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://tranchess.com/',
  },
  titan: {
    symbol: 'TITAN',
    address: {
      56: '0xe898EDc43920F357A93083F1d4460437dE6dAeC2',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://titanswap.org',
  },
  harmony: {
    symbol: 'ONE',
    address: {
      56: '0x03fF0ff224f904be3118461335064bB48Df47938',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.harmony.one/',
  },
  mask: {
    symbol: 'MASK',
    address: {
      56: '0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mask.io/',
  },
  dvi: {
    symbol: 'DVI',
    address: {
      56: '0x758FB037A375F17c7e195CC634D77dA4F554255B',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://dvision.network/',
  },
  adx: {
    symbol: 'ADX',
    address: {
      56: '0x6bfF4Fb161347ad7de4A625AE5aa3A1CA7077819',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.adex.network',
  },
  bscpad: {
    symbol: 'BSCPAD',
    address: {
      56: '0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bscpad.com/',
  },
  rabbit: {
    symbol: 'RABBIT',
    address: {
      56: '0x95a1199EBA84ac5f19546519e287d43D2F0E1b41',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://rabbitfinance.io/earn',
  },
  form: {
    symbol: 'FORM',
    address: {
      56: '0x25A528af62e56512A19ce8c3cAB427807c28CC19',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://formation.fi/',
  },
  txl: {
    symbol: 'TXL',
    address: {
      56: '0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://tixl.org/',
  },
  orbs: {
    symbol: 'ORBS',
    address: {
      56: '0xeBd49b26169e1b52c04cFd19FCf289405dF55F80',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.orbs.com/',
  },
  cos: {
    symbol: 'COS',
    address: {
      56: '0x96Dd399F9c3AFda1F194182F71600F1B65946501',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.contentos.io/',
  },
  bunny: {
    symbol: 'BUNNY',
    address: {
      56: '0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://pancakebunny.finance/',
  },
  alice: {
    symbol: 'ALICE',
    address: {
      56: '0xAC51066d7bEC65Dc4589368da368b212745d63E8',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://www.myneighboralice.com/',
  },
  for: {
    symbol: 'FOR',
    address: {
      56: '0x658A109C5900BC6d2357c87549B651670E5b0539',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.for.tube/home',
  },
  bux: {
    symbol: 'BUX',
    address: {
      56: '0x211FfbE424b90e25a15531ca322adF1559779E45',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://getbux.com/bux-crypto/',
  },
  nuls: {
    symbol: 'NULS',
    address: {
      56: '0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://www.nuls.io/',
  },
  belt: {
    symbol: 'BELT',
    address: {
      56: '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://beta.belt.fi/',
  },
  ramp: {
    symbol: 'RAMP',
    address: {
      56: '0x8519EA49c997f50cefFa444d240fB655e89248Aa',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://rampdefi.com/',
  },
  bfi: {
    symbol: 'BFI',
    address: {
      56: '0x81859801b01764D4f0Fa5E64729f5a6C3b91435b',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bearn.fi/',
  },
  dexe: {
    symbol: 'DEXE',
    address: {
      56: '0x039cB485212f996A9DBb85A9a75d898F94d38dA6',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://dexe.network/',
  },
  bel: {
    symbol: 'BEL',
    address: {
      56: '0x8443f091997f06a61670B735ED92734F5628692F',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bella.fi/',
  },
  tpt: {
    symbol: 'TPT',
    address: {
      56: '0xECa41281c24451168a37211F0bc2b8645AF45092',
      97: '',
    },
    decimals: 4,
    projectLink: 'https://www.tokenpocket.pro/',
  },
  watch: {
    symbol: 'WATCH',
    address: {
      56: '0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://yieldwatch.net/',
  },
  xmark: {
    symbol: 'xMARK',
    address: {
      56: '0x26A5dFab467d4f58fB266648CAe769503CEC9580',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://benchmarkprotocol.finance/',
  },
  bmxx: {
    symbol: 'bMXX',
    address: {
      56: '0x4131b87F74415190425ccD873048C708F8005823',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://multiplier.finance/',
  },
  iotx: {
    symbol: 'IOTX',
    address: {
      56: '0x9678E42ceBEb63F23197D726B29b1CB20d0064E5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://iotex.io/',
  },
  bor: {
    symbol: 'BOR',
    address: {
      56: '0x92D7756c60dcfD4c689290E8A9F4d263b3b32241',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.boringdao.com/',
  },
  bopen: {
    symbol: 'bOPEN',
    address: {
      56: '0xF35262a9d427F96d2437379eF090db986eaE5d42',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://opendao.io/',
  },
  dodo: {
    symbol: 'DODO',
    address: {
      56: '0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://dodoex.io/',
  },
  swingby: {
    symbol: 'SWINGBY',
    address: {
      56: '0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://swingby.network/',
  },
  bry: {
    symbol: 'BRY',
    address: {
      56: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://berrydata.co/',
  },
  zee: {
    symbol: 'ZEE',
    address: {
      56: '0x44754455564474A89358B2C2265883DF993b12F0',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://zeroswap.io/',
  },
  swgb: {
    symbol: 'SWGb',
    address: {
      56: '0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://swirgepay.com/',
  },
  swg: {
    symbol: 'SWG',
    address: {
      56: '0xe792f64C582698b8572AAF765bDC426AC3aEfb6B',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://swirgepay.com/',
  },
  sfp: {
    symbol: 'SFP',
    address: {
      56: '0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.safepal.io/',
  },
  lina: {
    symbol: 'LINA',
    address: {
      56: '0x762539b45A1dCcE3D36d080F74d1AED37844b878',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://linear.finance/',
  },
  lit: {
    symbol: 'LIT',
    address: {
      56: '0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.litentry.com/',
  },
  hget: {
    symbol: 'HGET',
    address: {
      56: '0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://www.hedget.com/',
  },
  bdo: {
    symbol: 'BDO',
    address: {
      56: '0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bdollar.fi/',
  },
  egld: {
    symbol: 'EGLD',
    address: {
      56: '0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://elrond.com/',
  },
  ust: {
    symbol: 'UST',
    address: {
      56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  wsote: {
    symbol: 'wSOTE',
    address: {
      56: '0x541E619858737031A1244A5d0Cd47E5ef480342c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://soteria.finance/#/',
  },
  front: {
    symbol: 'FRONT',
    address: {
      56: '0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://frontier.xyz/',
  },
  helmet: {
    symbol: 'Helmet',
    address: {
      56: '0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.helmet.insure/',
  },
  btcst: {
    symbol: 'BTCST',
    address: {
      56: '0x78650B139471520656b9E7aA7A5e9276814a38e9',
      97: '',
    },
    decimals: 17,
    projectLink: 'https://www.1-b.tc/',
  },
  bscx: {
    symbol: 'BSCX',
    address: {
      56: '0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bscex.org/',
  },
  ten: {
    symbol: 'TEN',
    address: {
      56: '0xdFF8cb622790b7F92686c722b02CaB55592f152C',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.tenet.farm/',
  },
  balbt: {
    symbol: 'bALBT',
    address: {
      56: '0x72fAa679E1008Ad8382959FF48E392042A8b06f7',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://allianceblock.io/',
  },
  asr: {
    symbol: 'ASR',
    address: {
      56: '0x80D5f92C2c8C682070C95495313dDB680B267320',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  atm: {
    symbol: 'ATM',
    address: {
      56: '0x25E9d05365c867E59C1904E7463Af9F312296f9E',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  og: {
    symbol: 'OG',
    address: {
      56: '0xf05E45aD22150677a017Fbd94b84fBB63dc9b44c',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  reef: {
    symbol: 'REEF',
    address: {
      56: '0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://reef.finance/',
  },
  ditto: {
    symbol: 'DITTO',
    address: {
      56: '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://ditto.money/',
  },
  juv: {
    symbol: 'JUV',
    address: {
      56: '0xC40C9A843E1c6D01b7578284a9028854f6683b1B',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  psg: {
    symbol: 'PSG',
    address: {
      56: '0xBc5609612b7C44BEf426De600B5fd1379DB2EcF1',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  vai: {
    symbol: 'VAI',
    address: {
      56: '0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://venus.io/',
  },
  babymarco: {
    symbol: 'BABYMARCO',
    address: {
      56: '0x055135F0470C4C8d7C88a576f892ac60c3f70316',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.melegaswap.finance/babymarco',
  },
  wbnb: {
    symbol: 'wBNB',
    address: {
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  blink: {
    symbol: 'BLINK',
    address: {
      56: '0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://blink.wink.org',
  },
  unfi: {
    symbol: 'UNFI',
    address: {
      56: '0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://unifiprotocol.com',
  },
  twt: {
    symbol: 'TWT',
    address: {
      56: '0x4B0F1812e5Df2A09796481Ff14017e6005508003',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://trustwallet.com/',
  },
  hard: {
    symbol: 'HARD',
    address: {
      56: '0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://hard.kava.io',
  },
  broobee: {
    symbol: 'bROOBEE',
    address: {
      56: '0xE64F5Cb844946C1F102Bd25bBD87a5aB4aE89Fbe',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://roobee.io/',
  },
  stax: {
    symbol: 'STAX',
    address: {
      56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://stablexswap.com/',
  },
  nar: {
    symbol: 'NAR',
    address: {
      56: '0xA1303E6199b319a891b79685F0537D289af1FC83',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://narwhalswap.org/',
  },
  nya: {
    symbol: 'NYA',
    address: {
      56: '0xbFa0841F7a90c4CE6643f651756EE340991F99D5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://nyanswop.org/',
  },
  ctk: {
    symbol: 'CTK',
    address: {
      56: '0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://www.certik.foundation/',
  },
  inj: {
    symbol: 'INJ',
    address: {
      56: '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://injectiveprotocol.com/',
  },
  sxp: {
    symbol: 'SXP',
    address: {
      56: '0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://swipe.io/',
  },
  alpha: {
    symbol: 'ALPHA',
    address: {
      56: '0xa1faa113cbE53436Df28FF0aEe54275c13B40975',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://alphafinance.io/',
  },
  xvs: {
    symbol: 'XVS',
    address: {
      56: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://venus.io/',
  },
  sushi: {
    symbol: 'SUSHI',
    address: {
      56: '0x947950BcC74888a40Ffa2593C5798F11Fc9124C4',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://sushi.com/',
  },
  comp: {
    symbol: 'COMP',
    address: {
      56: '0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://compound.finance/',
  },
  syrup: {
    symbol: 'MRT',
    address: {
      56: '0x69Df07E21484c9b64EB4dE08494d6e6C2aa63491',
      97: '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    },
    decimals: 18,
    projectLink: 'https://melega.finance/',
  },
  bifi: {
    symbol: 'BIFI',
    address: {
      56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://beefy.finance/',
  },
  dusk: {
    symbol: 'DUSK',
    address: {
      56: '0xB2BD0749DBE21f623d9BABa856D3B0f0e1BFEc9C',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://dusk.network/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  },
  eth: {
    symbol: 'ETH',
    address: {
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/',
  },
  beth: {
    symbol: 'BETH',
    address: {
      56: '0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/eth2/beacon-chain/',
  },
  mamzn: {
    symbol: 'mAMZN',
    address: {
      56: '0x3947B992DC0147D2D89dF0392213781b04B25075',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mgoogl: {
    symbol: 'mGOOGL',
    address: {
      56: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mnflx: {
    symbol: 'mNFLX',
    address: {
      56: '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mtsla: {
    symbol: 'mTSLA',
    address: {
      56: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  ltc: {
    symbol: 'LTC',
    address: {
      56: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://litecoin.org/',
  },
  usdc: {
    symbol: 'USDC',
    address: {
      56: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.centre.io/usdc',
  },
  dai: {
    symbol: 'DAI',
    address: {
      56: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  ada: {
    symbol: 'ADA',
    address: {
      56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://www.cardano.org/',
  },
  band: {
    symbol: 'BAND',
    address: {
      56: '0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bandprotocol.com/',
  },
  dot: {
    symbol: 'DOT',
    address: {
      56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://polkadot.network/',
  },
  eos: {
    symbol: 'EOS',
    address: {
      56: '0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://eos.io/',
  },
  link: {
    symbol: 'LINK',
    address: {
      56: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://chain.link/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      56: '0x55d398326f99059fF775485246999027B3197955',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },
  btcb: {
    symbol: 'BTCB',
    address: {
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  xrp: {
    symbol: 'XRP',
    address: {
      56: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://ripple.com/xrp/',
  },
  atom: {
    symbol: 'ATOM',
    address: {
      56: '0x0Eb3a705fc54725037CC9e008bDede697f62F335',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://cosmos.network/',
  },
  yfii: {
    symbol: 'YFII',
    address: {
      56: '0x7F70642d88cf1C4a3a7abb072B53B929b653edA5',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://dfi.money/#/',
  },
  xtz: {
    symbol: 'XTZ',
    address: {
      56: '0x16939ef78684453bfDFb47825F8a5F714f12623a',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://www.tezos.com/',
  },
  bch: {
    symbol: 'BCH',
    address: {
      56: '0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bch.info/',
  },
  yfi: {
    symbol: 'YFI',
    address: {
      56: '0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://yearn.finance/',
  },
  uni: {
    symbol: 'UNI',
    address: {
      56: '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://uniswap.org/',
  },
  fil: {
    symbol: 'FIL',
    address: {
      56: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://filecoin.io/',
  },
  bake: {
    symbol: 'BAKE',
    address: {
      56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.bakeryswap.org/',
  },
  burger: {
    symbol: 'BURGER',
    address: {
      56: '0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://burgerswap.org/',
  },
  bdigg: {
    symbol: 'bDIGG',
    address: {
      56: '0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://badger.finance/',
  },
  bbadger: {
    symbol: 'bBadger',
    address: {
      56: '0x1F7216fdB338247512Ec99715587bb97BBf96eae',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://badger.finance/',
  },
  trade: {
    symbol: 'TRADE',
    address: {
      56: '0x7af173F350D916358AF3e218Bdf2178494Beb748',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://unitrade.app/',
  },
  pnt: {
    symbol: 'PNT',
    address: {
      56: '0xdaacB0Ab6Fb34d24E8a67BfA14BF4D95D4C7aF92',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ptokens.io/',
  },
  mir: {
    symbol: 'MIR',
    address: {
      56: '0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  pbtc: {
    symbol: 'pBTC',
    address: {
      56: '0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ptokens.io/',
  },
  lto: {
    symbol: 'LTO',
    address: {
      56: '0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ltonetwork.com/',
  },
  pcws: {
    symbol: 'pCWS',
    address: {
      56: '0xbcf39F0EDDa668C58371E519AF37CA705f2bFcbd',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://game.seascape.network/',
  },
  zil: {
    symbol: 'ZIL',
    address: {
      56: '0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787',
      97: '',
    },
    decimals: 12,
    projectLink: 'https://www.zilliqa.com/',
  },
  lien: {
    symbol: 'LIEN',
    address: {
      56: '0x5d684ADaf3FcFe9CFb5ceDe3abf02F0Cdd1012E3',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://lien.finance/',
  },
  swth: {
    symbol: 'SWTH',
    address: {
      56: '0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://switcheo.network/',
  },
  dft: {
    symbol: 'DFT',
    address: {
      56: '0x42712dF5009c20fee340B245b510c0395896cF6e',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.dfuture.com/home',
  },
  gum: {
    symbol: 'GUM',
    address: {
      56: '0xc53708664b99DF348dd27C3Ac0759d2DA9c40462',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://gourmetgalaxy.io/',
  },
  dego: {
    symbol: 'DEGO',
    address: {
      56: '0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bsc.dego.finance/home',
  },
  nrv: {
    symbol: 'NRV',
    address: {
      56: '0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://nerve.fi/',
  },
  easy: {
    symbol: 'EASY',
    address: {
      56: '0x7C17c8bED8d14bAccE824D020f994F4880D6Ab3B',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://easyfi.network/',
  },
  oddz: {
    symbol: 'ODDZ',
    address: {
      56: '0xCD40F2670CF58720b694968698A5514e924F742d',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://oddz.fi/',
  },
  hoo: {
    symbol: 'HOO',
    address: {
      56: '0xE1d1F66215998786110Ba0102ef558b22224C016',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://hoo.com/',
  },
  apys: {
    symbol: 'APYS',
    address: {
      56: '0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://apyswap.com/',
  },
  bondly: {
    symbol: 'BONDLY',
    address: {
      56: '0x96058f8C3e16576D9BD68766f3836d9A33158f89',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.bondly.finance/',
  },
  tko: {
    symbol: 'TKO',
    address: {
      56: '0x9f589e3eabe42ebC94A44727b3f3531C0c877809',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.tokocrypto.com/',
  },
  itam: {
    symbol: 'ITAM',
    address: {
      56: '0x04C747b40Be4D535fC83D09939fb0f626F32800B',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://itam.network/',
  },
  arpa: {
    symbol: 'ARPA',
    address: {
      56: '0x6F769E65c14Ebd1f68817F5f1DcDb61Cfa2D6f7e',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://arpachain.io/',
  },
  eps: {
    symbol: 'EPS',
    address: {
      56: '0xA7f552078dcC247C2684336020c03648500C6d9F',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ellipsis.finance/',
  },
  jgn: {
    symbol: 'JGN',
    address: {
      56: '0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://jgndefi.com/',
  },
  tlm: {
    symbol: 'TLM',
    address: {
      56: '0x2222227E22102Fe3322098e4CBfE18cFebD57c95',
      97: '',
    },
    decimals: 4,
    projectLink: 'https://alienworlds.io/',
  },
  perl: {
    symbol: 'PERL',
    address: {
      56: '0x0F9E4D49f25de22c2202aF916B681FBB3790497B',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://perlinx.finance/',
  },
  alpa: {
    symbol: 'ALPA',
    address: {
      56: '0xc5E6689C9c8B02be7C49912Ef19e79cF24977f03',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bsc.alpaca.city/',
  },
  hzn: {
    symbol: 'HZN',
    address: {
      56: '0xC0eFf7749b125444953ef89682201Fb8c6A917CD',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://horizonprotocol.com/',
  },
  suter: {
    symbol: 'SUTER',
    address: {
      56: '0x4CfbBdfBd5BF0814472fF35C72717Bd095ADa055',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://shield.suterusu.io/',
  },
  cgg: {
    symbol: 'CGG',
    address: {
      56: '0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://chainguardians.io/',
  },
  mix: {
    symbol: 'MIX',
    address: {
      56: '0xB67754f5b4C704A24d2db68e661b2875a4dDD197',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mixie.chainguardians.io/',
  },
  hakka: {
    symbol: 'HAKKA',
    address: {
      56: '0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://hakka.finance/',
  },
  xed: {
    symbol: 'XED',
    address: {
      56: '0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.exeedme.com/',
  },
  τbtc: {
    symbol: 'τBTC',
    address: {
      56: '0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://www.btcst.finance/',
  },
  alpaca: {
    symbol: 'ALPACA',
    address: {
      56: '0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.alpacafinance.org/',
  },
  dfd: {
    symbol: 'DFD',
    address: {
      56: '0x9899a98b222fCb2f3dbee7dF45d943093a4ff9ff',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://dusd.finance/',
  },
  lmt: {
    symbol: 'LMT',
    address: {
      56: '0x9617857E191354dbEA0b714d78Bc59e57C411087',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://lympo.io/lmt/',
  },
  btt: {
    symbol: 'BTT',
    address: {
      56: '0x8595F9dA7b868b1822194fAEd312235E43007b49',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.bittorrent.com/',
  },
  trx: {
    symbol: 'TRX',
    address: {
      56: '0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://tron.network/',
  },
  win: {
    symbol: 'WIN',
    address: {
      56: '0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://winklink.org/',
  },
  mcoin: {
    symbol: 'mCOIN',
    address: {
      56: '0x49022089e78a8D46Ec87A3AF86a1Db6c189aFA6f',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  math: {
    symbol: 'MATH',
    address: {
      56: '0xF218184Af829Cf2b0019F8E6F0b2423498a36983',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mathwallet.org/',
  },
  kun: {
    symbol: 'KUN',
    address: {
      56: '0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://chemix.io/home',
  },
  qsd: {
    symbol: 'QSD',
    address: {
      56: '0x07AaA29E63FFEB2EBf59B33eE61437E1a91A3bb2',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://chemix.io/home',
  },
  hyfi: {
    symbol: 'HYFI',
    address: {
      56: '0x9a319b959e33369C5eaA494a770117eE3e585318',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://hyfi.pro/#/',
  },
  oin: {
    symbol: 'OIN',
    address: {
      56: '0x658E64FFcF40D240A43D52CA9342140316Ae44fA',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://oin.finance/',
  },
  doge: {
    symbol: 'DOGE',
    address: {
      56: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://dogecoin.com/',
  },
  fine: {
    symbol: 'FINE',
    address: {
      56: '0x4e6415a5727ea08aAE4580057187923aeC331227',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://refinable.com/',
  },
  one: {
    symbol: 'ONE',
    address: {
      56: '0x04BAf95Fd4C52fd09a56D840bAEe0AB8D7357bf0',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.bigone.com/',
  },
  pmon: {
    symbol: 'PMON',
    address: {
      56: '0x1796ae0b0fa4862485106a0de9b654eFE301D0b2',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://polkamon.com/',
  },
  hotcross: {
    symbol: 'HOTCROSS',
    address: {
      56: '0x4FA7163E153419E0E1064e418dd7A99314Ed27b6',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.hotcross.com/',
  },
  τdoge: {
    symbol: 'τDOGE',
    address: {
      56: '0xe550a593d09FBC8DCD557b5C88Cea6946A8b404A',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://www.btcst.finance/',
  },
  btr: {
    symbol: 'BTR',
    address: {
      56: '0x5a16E8cE8cA316407c6E6307095dc9540a8D62B3',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.bitrue.com/',
  },
  ubxt: {
    symbol: 'UBXT',
    address: {
      56: '0xBbEB90cFb6FAFa1F69AA130B7341089AbeEF5811',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://upbots.com/',
  },
  wmass: {
    symbol: 'WMASS',
    address: {
      56: '0x7e396BfC8a2f84748701167c2d622F041A1D7a17',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://massnet.org/en/',
  },
  rfox: {
    symbol: 'RFOX',
    address: {
      56: '0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.redfoxlabs.io/',
  },
  xend: {
    symbol: 'XEND',
    address: {
      56: '0x4a080377f83D669D7bB83B3184a8A5E61B500608',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://xend.finance/',
  },
  cyc: {
    symbol: 'CYC',
    address: {
      56: '0x810EE35443639348aDbbC467b33310d2AB43c168',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://cyclone.xyz/',
  },
  chr: {
    symbol: 'CHR',
    address: {
      56: '0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://chromia.com/',
  },
  kalm: {
    symbol: 'KALM',
    address: {
      56: '0x4BA0057f784858a48fe351445C672FF2a3d43515',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://kalmar.io/',
  },
  deri: {
    symbol: 'DERI',
    address: {
      56: '0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://deri.finance/#/index',
  },
  well: {
    symbol: 'WELL',
    address: {
      56: '0xf07a32Eb035b786898c00bB1C64d8c6F8E7a46D5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.bitwellex.com/',
  },
  wex: {
    symbol: 'WEX',
    address: {
      56: '0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://wault.finance/',
  },
  waultx: {
    symbol: 'WAULTx',
    address: {
      56: '0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://wault.finance/',
  },
  popen: {
    symbol: 'pOPEN',
    address: {
      56: '0xaBaE871B7E3b67aEeC6B46AE9FE1A91660AadAC5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://opendao.io/',
  },
  ez: {
    symbol: 'EZ',
    address: {
      56: '0x5512014efa6Cd57764Fa743756F7a6Ce3358cC83',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://easyfi.network/',
  },
  vrt: {
    symbol: 'VRT',
    address: {
      56: '0x5F84ce30DC3cF7909101C69086c50De191895883',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://venus.io/',
  },
  tusd: {
    symbol: 'TUSD',
    address: {
      56: '0x14016E85a25aeb13065688cAFB43044C2ef86784',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.trueusd.com/',
  },
  mtrg: {
    symbol: 'MTRG',
    address: {
      56: '0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.meter.io/',
  },
  ktn: {
    symbol: 'KTN',
    address: {
      56: '0xDAe6c2A48BFAA66b43815c5548b10800919c993E',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://kattana.io/',
  },
  qkc: {
    symbol: 'QKC',
    address: {
      56: '0xA1434F1FC3F437fa33F7a781E041961C0205B5Da',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://quarkchain.io/',
  },
  bcfx: {
    symbol: 'bCFX',
    address: {
      56: '0x045c4324039dA91c52C55DF5D785385Aab073DcF',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.confluxnetwork.org/',
  },
  ata: {
    symbol: 'ATA',
    address: {
      56: '0xA2120b9e674d3fC3875f415A7DF52e382F141225',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.ata.network/',
  },
  mbox: {
    symbol: 'MBOX',
    address: {
      56: '0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.mobox.io/#/',
  },
  boring: {
    symbol: 'BORING',
    address: {
      56: '0xffEecbf8D7267757c2dc3d13D730E97E15BfdF7F',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.boringdao.com/',
  },
  marsh: {
    symbol: 'MARSH',
    address: {
      56: '0x2FA5dAF6Fe0708fBD63b1A7D1592577284f52256',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://unmarshal.io/',
  },
  ampl: {
    symbol: 'AMPL',
    address: {
      56: '0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://www.ampleforth.org/',
  },
  o3: {
    symbol: 'O3',
    address: {
      56: '0xEe9801669C6138E84bD50dEB500827b776777d28',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://o3swap.com/',
  },
  hai: {
    symbol: 'HAI',
    address: {
      56: '0xaA9E582e5751d703F85912903bacADdFed26484C',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://hacken.io/',
  },
  htb: {
    symbol: 'HTB',
    address: {
      56: '0x4e840AADD28DA189B9906674B4Afcb77C128d9ea',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.hotbit.io/',
  },
  woo: {
    symbol: 'WOO',
    address: {
      56: '0x4691937a7508860F876c9c0a2a617E7d9E945D4B',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://woo.network/',
  },
  $dg: {
    symbol: '$DG',
    address: {
      56: '0x9Fdc3ae5c814b79dcA2556564047C5e7e5449C19',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://decentral.games/',
  },
  safemoon: {
    symbol: 'SAFEMOON',
    address: {
      56: '0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://safemoon.net/',
  },
  axs: {
    symbol: 'AXS',
    address: {
      56: '0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://axieinfinity.com/',
  },
  c98: {
    symbol: 'c98',
    address: {
      56: '0xaec945e04baf28b135fa7c640f624f8d90f1c3a6',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://coin98.com/',
  },
  pots: {
    symbol: 'POTS',
    address: {
      56: '0x3Fcca8648651E5b974DD6d3e50F61567779772A8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://moonpot.com/',
  },
  jaba: {
    symbol: 'JABA',
    address: {
      56: '0x69C7c30A4a28dCB65d6Dc6a1f2c0AB8F62f21709',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://jaba.fyi/',
  },
  lsphere: {
    symbol: 'LSPHERE',
    address: {
      56: '0x897504Dc693B30c367cdaCfA88578582686C1d95',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://lunaspheretoken.com/',
  },
  cuby: {
    symbol: 'CUBY',
    address: {
      56: '0x488907d99cE2ac919A47AcFac896e825Fd23598f',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://cubyield.com',
  },
  rocket: {
    symbol: 'ROCKET',
    address: {
      56: '0x87374baef80590f5274bAE9C2533e10b6A3A79b8',
      97: '',
    },
    decimals: 9,
    projectLink: 'http://www.rockettothemoon.io',
  },
  skid: {
    symbol: 'SKID',
    address: {
      56: '0x78125A67306DeAaE2Ae4D1d337b19b06c25111F7',
      97: '',
    },
    decimals: 18,
    projectLink: 'http://thesuccesskid.com',
  },
  axpe: {
    symbol: 'AXPE',
    address: {
      56: '0xFc0fEf50213A6Dfd339EdFC3CD71607895930b75',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://apexpepe.cloud',
  },
   fly: {
    symbol: 'FLY',
    address: {
      56: '0x4a28C0f2A7D4dE70Eef1564102e81E9fB82Be0c2',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.flytoken.bio/',
  },
  aaron: {
    symbol: 'AARON',
    address: {
      56: '0x31B5BE085aF875B675392f5B37a1d0B8c3860222',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.aaroncoin.fun/',
  },
   mong2: {
    symbol: 'MONG2.0',
    address: {
      56: '0x42d0c24018162F9c88fB22dAC71Ea70bc00cA770',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mongbnb.io',
  },
  vibra: {
    symbol: 'VBR',
    address: {
      56: '0xb1c137D4ab6d56529efB6E4F3616Ee6558083B7b',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.vibraniumworld.com/pr/whitepaper#whitepaper',
  },
  boai: {
    symbol: 'BOAI',
    address: {
      56: '0x571DBCaA3df80dfebF69feFd084daCe4A22EA7bF',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bolicai.space/',
  },
  pco: {
    symbol: 'PCO',
    address: {
      56: '0xcF75B10C331E54707b1E0932Bb24CB0E0bD5fB1d',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://pintacrypto.shop',
  },
  teeny: {
    symbol: 'TEENY',
    address: {
      56: '0x8c51D12f06C61af01D0D9f80401e8351733D54a0',
      97: '',
    },
    decimals: 18,
    projectLink: 'http://TeenyCapCoin.github.io',
  },
  chame: {
    symbol: 'Chame',
    address: {
      56: '0x5b44B1b9576AfEb8941b01e0aed4aF624cD981DE',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.chameleonmeme.site/',
  },
   ptc: {
    symbol: 'PTC',
    address: {
      56: '0xf382A28AAb0320e48D3D751f696f935B014B49BD',
      97: '',
    },
    decimals: 8,
    projectLink: 'http://www.ptctoken.io/',
  },
   yd: {
    symbol: 'YD',
    address: {
      56: '0x7D1481568c72891bb87A964c3a6E6213Bd73d114',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.youngdegens.fun/',
  },
  wdt: {
    symbol: 'WDT',
    address: {
      56: '0x1D2da66c065683c05B678AEEa70Cb635dEcA491f',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://watchdogs-bsc.com/',
  },
  raky: {
    symbol: 'RAKY',
    address: {
      56: '0x5f7cc946aBF0c853a2367ac436755dE6AA8D48Bd',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.raky.fun',
  },
  bode: {
    symbol: 'BODE',
    address: {
      56: '0xD717Cf06922Fa4d00822d09cFcf90eAE97C85472',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://linktr.ee/bodecoin',
  },
  yatinu: {
    symbol: 'YATINU',
    address: {
      56: '0x20B87004c755D48F84233b37F2458AF8606842d0',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://yatiinu.site/',
  },
  mob: {
    symbol: 'MOB',
    address: {
      56: '0xc18358243294Ecf28955f7029559A253f04B4Ad9',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://topmobster.net',
  },
  cock: {
    symbol: 'COCK',
    address: {
      56: '0x2A23ba69221c5e16c343009ECE4138f2EC5c5A27',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://cockroaches-bsc.fun/',
  },
  alter: {
    symbol: 'ALTER',
    address: {
      56: '0x8b1FbfD453Ede87914CAE9999486406669980281',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://token.alterand.com/',
  },
  rdrs: {
    symbol: 'RDRS',
    address: {
      56: '0xd78FEeae52B50F7927FC76e2eeA7FB10856B8d14',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://raiders-bsc.top',
  },
  trt: {
    symbol: 'TRT',
    address: {
      56: '0x50C7584be73D20760f1947fFcbF7942822C968C8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.trust-ai.io',
  },
  apemax: {
    symbol: 'APEX',
    address: {
      56: '0xb8021F48CaE5200Ee29b687c9b44129e50Ab4E18',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://apemax.club/',
  },
  pepecb: {
    symbol: 'PEPECB',
    address: {
      56: '0x7566730e023C5A735680DB3f782B9C596Ee6Bd64',
      97: '',
    },
    decimals: 12,
    projectLink: 'https://www.pepecb.net/',
  },
  choco: {
    symbol: 'CHOCO',
    address: {
      56: '0xf12F0131DDbf4B92b3D3c05092f93B5FCac7E48E',
      97: '',
    },
    decimals: 10,
    projectLink: 'https://www.chocobo.finance',
  },
  agape: {
    symbol: 'AGAPE',
    address: {
      56: '0xE0Ac1449Fda4Ea53e1A42caF5951112ccb38cEC1',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://agape.network',
  },
  cat: {
    symbol: 'CAT',
    address: {
      56: '0x0173295183685F27C84db046B5F0bea3e683c24b',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.catcattoken.com/',
  },
  icn: {
    symbol: 'ICN',
    address: {
      56: '0xa66b9baCA9681C154890AD703dc5e2766d4ec2C1',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://itscorntoken.com/',
  },
  docswap: {
    symbol: 'DOCSWAP',
    address: {
      56: '0xdE314A065AaaF11E794706F8585C77e3Bb7a2741',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://dexoncrypto.com',
  },
  agapeai: {
    symbol: 'AGAPE',
    address: {
      56: '0xA23e51E642ee692919eA5cC85174b1e4579d66b8',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://agape.network/',
  },
  safo: {
    symbol: 'SAFO',
    address: {
      56: '0x9320bdB3C8F3d0B1313726EFbB0f0061EBf149aD',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://safeonechain.com',
  },
  m420: {
    symbol: 'M420',
    address: {
      56: '0x4b8B1Af70CFc9F5efb13938326Ad4371b51E7c00',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://meme420.shop/',
  },
  clan: {
    symbol: 'CLAN',
    address: {
      56: '0xd9eA86B189e97C6119238D10fa940e23Fb6bD073',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://theclantoken.com',
  },
  rari: {
    symbol: 'RARI',
    address: {
      56: '0xfBcaa62b6e76dDF2e085B1483ec742e8A1474513',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.rari.fun',
  },
  shifo: {
    symbol: 'SHIFO',
    address: {
      56: '0x61d9f522B332d1F2ab25d5803371E5EaC6cf8808',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://www.Shibafomi.com',
  },
  mix2: {
    symbol: 'MX',
    address: {
      56: '0x9F882567A62a5560d147d64871776EeA72Df41D3',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mushee.xyz/',
  },
  chc: {
    symbol: 'chc',
    address: {
      56: '0xe5bE0c405a02120648C219e4378648575aA28F84',
      97: '',
    },
    decimals: 10,
    projectLink: 'https://chefscoins.website',
  },
  crystals: {
    symbol: 'CRYSTAL STONES',
    address: {
      56: '0xe252FCb1Aa2E0876E9B5f3eD1e15B9b4d11A0b00',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://crystalstones.org',
  },
   farm: {
    symbol: 'FARM',
    address: {
      56: '0x0A7b96846aFB37029543d52122a2D2C011A0627c',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://www.farmercoin.space',
  },
   drai: {
    symbol: 'DRAI',
    address: {
      56: '0x9c7884Df791761847Df1E77f71400F3215a88A48',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://dreaperai.tech',
  },
  deencoin: {
    symbol: 'DC',
    address: {
      56: '0x532A252F457BB04127e01cEBe9bF394b93283999',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://deencoin.io/',
  },
  pspay: {
    symbol: 'PSPAY',
    address: {
      56: '0x275fE1709Dc07112BcAF56A3465ECE683c5Fb04c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://paycoin.solutions/',
  },
    clowns: {
    symbol: 'CLOWNS',
    address: {
      56: '0x17F6EFdde59C5e92C106b589fFE5f0480A3B602B',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://Clowncoinbsc.com',
  },
   hada: {
    symbol: 'HADA',
    address: {
      56: '0x7BDaf7a6E6eAa846b69Da14ED2C7CA7457069df3',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://hacienda.tech/en',
  },
   cavea: {
    symbol: 'CAVEA',
    address: {
      56: '0x52f8a735F74857e40562b57cc8Bd2947EA905805',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.cavea.club/',
  },
  cbnb: {
    symbol: 'CBNB',
    address: {
      56: '0x92fE93300624f16EdCC6bC4205E9DC836660Ba3f',
      97: '',
    },
    decimals: 18,
    projectLink: 'http://cbnb.site',
  },
  geck: {
    symbol: 'GECK',
    address: {
      56: '0x3e37964D723c2Ce68C508D0De52936847d1F109a',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.techgecko.xyz/',
  },
   ngd: {
    symbol: 'NGD',
    address: {
      56: '0x646015e0F58e16F8CCB2CA3F52567B4762fCFF65',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://new-gold.club/',
  },
  cmc: {
    symbol: 'CMC',
    address: {
      56: '0x1Ea57CAf3aA077765CDD2d880f5AA91AE65b9f0c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://crypto-monster-clash.ru/',
  },
  wfx: {
    symbol: 'WFX',
    address: {
      56: '0xb28E1b90b983f86BB2Ca94389449173ff8655bB7',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://whitefoxtoken.info/',
  },
  bgcat: {
    symbol: 'BGCAT',
    address: {
      56: '0xc24B983a769Aed490D78708001790f7AC6D62b1F',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://barbiecat.net',
  },
  voc: {
    symbol: 'VOC',
    address: {
      56: '0xf86b9dd76Cc6ab6Becfef564346245836bEdF978',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://voccolonizer.com/',
  },
  xrpgrow: {
    symbol: 'XRPGROW',
    address: {
      56: '0xe8648F4beDaB4064826fE36A67288BbEB69E9b52',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://xrp-grow.com/',
  },
  rickinu: {
    symbol: 'rickinu',
    address: {
      56: '0xAa7947d248bcE1F8D7a99f2081f1AaeAd2143d49',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://rickinu.online/',
  },
  fugc: {
    symbol: 'FUGC',
    address: {
      56: '0x02B90b0f324972B3E9F1F58E71A701DE258f6592',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.fuggingcrabby.site/',
  },
  cpepe: {
    symbol: 'CPEPE',
    address: {
      56: '0x34F68a7f272254431d7e0A64D807D0d177b77bf9',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://captainpepe.army/',
  },
  esso: {
    symbol: 'ESSO',
    address: {
      56: '0x4d1d4b79D8D30cA728BDa332e8699667E7216b1e',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://espresso.com/',
  },
  cusdt: {
    symbol: 'CUSDT',
    address: {
      56: '0x76fA566136cFA5B720D37259cAbe45A9C407116b',
      97: '',
    },
    decimals: 18,
    projectLink: 'http://cbnb.site',
  },
  cxrp: {
    symbol: 'CXRP',
    address: {
      56: '0xeDE11c43598c814D39548423eb2d2a66a4Db3Cc2',
      97: '',
    },
    decimals: 18,
    projectLink: 'http://cbnb.site',
  },
   bulx: {
    symbol: 'BULX',
    address: {
      56: '0xA4BbE200dbE4248aEfaf18E6ECFE17973d9c7688',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ultron.foundation/',
  },
  busdx: {
    symbol: 'BUSD',
    address: {
      56: '0xBf55d5043D9998723087bF0BbCf9532f00ac1d68',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://fakecrypto.online/',
  },
  pipi: {
    symbol: 'PIPI',
    address: {
      56: '0xf86E639Ff387b6064607201A7a98F2c2B2FEB05f',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://cryptopipi.lol/',
  },
  toto: {
    symbol: 'TOTO',
    address: {
      56: '0x508EbA399d39B84e46c2E78cB0580c06A1930E1B',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mytoto.lol/',
  },
  fakeeth: {
    symbol: 'ETH',
    address: {
      56: '0xDe162e9d5F702eF975B390bEeFaa2DAeF3ecA83d',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://fakecrypto.online/',
  },
  flash: {
    symbol: 'FLASH',
    address: {
      56: '0xaf23921f146c1DeB5b436deB3a7FdeAF53f02b3F',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://linktr.ee/theflashtoken',
  },
   crys: {
    symbol: 'CRYS',
    address: {
      56: '0x01C0bD183e7027b421BFF30946f54Bf297713027',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://linktr.ee/cryonicsprojects',
  },
  pepeburnv2: {
    symbol: 'PEPEBURN',
    address: {
      56: '0x6747B9b9fBe031F72826D459c7ECe705b62E1D80',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://pepeburn2.net/',
  },
  chonky: {
    symbol: '$CHONKY',
    address: {
      56: '0xd00138ccf5F0b55351646D5C5FE2D95Ea32A63b9',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://chonkerinu.com/',
  },
  bkp: {
    symbol: 'BKP',
    address: {
      56: '0xe0Ba315045147D62B067Fad15B3A950dc952f37c',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://burnkingprotocol.com',
  },
  dxr: {
    symbol: 'DXR',
    address: {
      56: '0x5fb7097e62979907B4e71a5989cF695D635890C0',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.dexraiden.finance/',
  },
  dbu: {
    symbol: 'DBU',
    address: {
      56: '0x074dc3a727433E774F0F26BEce65fD4D63fa854B',
      97: '',
    },
    decimals: 18,
    projectLink: 'http://www.dragonballztoken.com/',
  },
  lone: {
    symbol: 'LONE',
    address: {
      56: '0xC9B21061e4639a32E028184d31e95aFac888ca2E',
      97: '',
    },
    decimals: 15,
    projectLink: 'https://lonecoin.io/',
  },
  slafac: {
    symbol: 'SlaFac',
    address: {
      56: '0xFba8D4AF65c6D54612bA962Bb3de3fC06B05f20a',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://slafac.com/',
  },
  otl: {
    symbol: 'OTL',
    address: {
      56: '0xEC4bD32a66E0764D18eBF1A2254f9a08F25e5e61',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://optilux.netlify.app/',
  },
  gxm: {
    symbol: 'GXM',
    address: {
      56: '0x666F5Ea07e0062C7D02F55c7Cc52CAA5cEa7523E',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://t.me/GrokXmas_Official',
  },
  nodes7: {
    symbol: '7NODES',
    address: {
      56: '0x9e795bFD0aBcDd942D27D264a3AacEC13b6c32A6',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://seven-nodes.com/',
  },
  haaga420: {
    symbol: 'HAAGA420',
    address: {
      56: '0x136331f3bE5b0F32Fb21a7f19d1D4C47F0671494',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.highasagiraffesass420.com',
  },
  efcr: {
    symbol: 'EFCR',
    address: {
      56: '0x1cC73D96Ff2Cb0D7BEc74eaF4c81f27C9132ee86',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://eflancer.com',
  },
  tah: {
    symbol: 'TAH',
    address: {
      56: '0xa7e5311DC6926d4407b6d20F8Ca5Ce6C92581B35',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://teamaffordahouse.co.uk/',
  },
  bbuck: {
    symbol: 'BBUCK',
    address: {
      56: '0x390BD80f4c8d0d1Bf360392790263b8c7808835D',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://babybuckcoin.netlify.app/',
  },
  groklabs: {
    symbol: 'GrokLabs',
    address: {
      56: '0xce3559f5B5fc02b1cEc6212D1FCEC65E080D8C66',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://grokslabratory.vercel.app/',
  },
  wzm: {
    symbol: 'WZM',
    address: {
      56: '0xd4e17Ad949bB0Fd99A6e7a5F2daD73Baf41D3210',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://winzone.fun/',
  },
  mememint: {
    symbol: 'MEMEMINT',
    address: {
      56: '0xabCAd2648fD27538e44BBd91109835aadaF981Bc',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.mememintcoin.com/',
  },
  mlb: {
    symbol: 'MLB',
    address: {
      56: '0x98aFB2e3F205E583f68a3de31dc9e1a79A0431a5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.mealbuddy.online/',
  },
  nbd: {
    symbol: 'NBD',
    address: {
      56: '0x199D07aa6723e9324F44f89885101FF79e11919A',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://t.me/NBDToken',
  },
  tor: {
    symbol: 'Tor',
    address: {
      56: '0xBFFc63Cf0e844274a9092620a50a15eAb952EC04',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://torwallet.xyz',
  },
  sgrok: {
    symbol: 'SGROK',
    address: {
      56: '0x7d8034e01BBe7Af542a05d5B0d9E8B8ABcd2890d',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://spidergrok.network',
  },
  love69: {
    symbol: 'love69',
    address: {
      56: '0x4F2c8449C6518fAdf8e16Ff0Df2EfAcb13614B71',
      97: '',
    },
    decimals: 4,
    projectLink: 'http://loveplaysex.net/',
  },
  groklabs2: {
    symbol: 'GrokLabs',
    address: {
      56: '0xaFfAcd3E1524AcB6C6C589d0A3c3A498B756AfC1',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://grokslabratory.vercel.app',
  },
  rao: {
    symbol: 'RAO',
    address: {
      56: '0xAe908BA89cE0031D19972F19e863b86AAbB00280',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://rao.cash/',
  },
  dc4: {
    symbol: '4DC',
    address: {
      56: '0x4e7Ef0077a1Bc31FD9BcadD6CA149Dea9C3faeDb',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.4dcoin.us/',
  },
  xex: {
    symbol: 'XEX',
    address: {
      56: '0xfF38e7a487f68152299Db75B244bB26a61E999Bc',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.xex.exchange/',
  },
  msoc: {
    symbol: 'MSOC',
    address: {
      56: '0x0DB3dE7a6F6448E5059A9c570580089f4665077C',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.memesoccer.com',
  },
  nynyc: {
    symbol: 'NYNYC',
    address: {
      56: '0x8A99D529d60f854ff323d4fFE284cc647CbDA5C3',
      97: '',
    },
    decimals: 3,
    projectLink: 'https://www.nynycoins.com',
  },
  fr: {
    symbol: 'FR',
    address: {
      56: '0xe9BEEA8F4448267a151f744572C57A3Cc309fA92',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ferscoin.net/',
  },
  bullstar: {
    symbol: 'BSF',
    address: {
      56: '0x39541a42B5085F3cf69b2258EAEb5bB3Ee8C823c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.bullstarfinance.com/',
  },
}

export default tokens
