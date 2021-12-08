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
    href: '/lottery',
    icon: 'Earn',
    items: [
      {
        label: t('Lottery'),
        href: '/lottery',
      },
      {
        label: t('Bets'),
        href: '/pools',
      },
      {
        label: t('BFC'),
        href: '/bfc',
      },
    ],
  },
  {
    label: t('Ecosystem'),
    href: '/infos',
    icon: 'Earn',
    items: [
      {
        label: t('Infos'),
        href: '/infos',
      },
      {
        label: t('Algo perfs'),
        href: '/algo',
      },
      {
        label: t('Barry Foundation'),
        href: '/barry-foundation',
      },
    ],
  },
]

export default config
