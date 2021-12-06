import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Stake'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Play!'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Lottery'),
        href: '/farms',
      },
      {
        label: t('Bets'),
        href: '/pools',
      },
      {
        label: t('BFC'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Ecosystem'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Infos'),
        href: '/farms',
      },
      {
        label: t('Algo perfs'),
        href: '/pools',
      },
      {
        label: t('Barry Foundation'),
        href: '/pools',
      },
    ],
  },
  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('#BERNARMY'),
        href: '/info',
      },
      {
        label: t('Infos'),
        href: '/ifo',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        label: t('Merch'),
        href: '/teams',
      },
    ],
  },
]

export default config
