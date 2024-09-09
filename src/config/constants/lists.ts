const PANMARCO_EXTENDED = 'https://tokens.melega.finance/pancakeswap-extended.json'
const PANMARCO_TOP100 = 'https://tokens.melega.finance/pancakeswap-top-100.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  PANMARCO_TOP100,
  PANMARCO_EXTENDED,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
