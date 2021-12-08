import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BernardFinance',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BernardFinance), NFTs, and more, on a platform you can trust.',
  image: 'https://BernardFinance.finance/images/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BernardFinance')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('BernardFinance')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('BernardFinance')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('BernardFinance')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('BernardFinance')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('BernardFinance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BernardFinance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BernardFinance')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('BernardFinance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BernardFinance')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('BernardFinance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BernardFinance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BernardFinance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BernardFinance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BernardFinance')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('BernardFinance')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('BernardFinance')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('BernardFinance')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('BernardFinance Info & Analytics')}`,
        description: 'View statistics for BernardFinance exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('BernardFinance Info & Analytics')}`,
        description: 'View statistics for BernardFinance exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('BernardFinance Info & Analytics')}`,
        description: 'View statistics for BernardFinance exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('BernardFinance')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('BernardFinance')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('BernardFinance')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('BernardFinance')}`,
      }
    default:
      return null
  }
}
