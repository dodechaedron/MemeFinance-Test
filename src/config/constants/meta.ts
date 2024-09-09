import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MelegaSwap',
  description:
    'The most popular AMM on BSC by user count! Earn MARCO through yield farming or win it in the Lottery, then stake it in MARCO Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MelegaSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://melega.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MelegaSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MelegaSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MelegaSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MelegaSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MelegaSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MelegaSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('MelegaSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MelegaSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MelegaSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('MelegaSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MelegaSwap')}`,
      }
    default:
      return null
  }
}
