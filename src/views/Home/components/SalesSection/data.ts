import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Discover our NFT.',
  bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a auctor lorem. Nunc porttitor vulputate luctus. Pellentesque fermentum placerat suscipit. Integer egestas nec eros ut elementum. Integer at dignissim est.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Buy Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'Bernard', alt: 'Bernard' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Strong ecosystem.',
  bodyText: 'Bernard Finance provide a powerful synergy for your capital.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Learn',
    external: false,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'SOON Bernardo Fight club.',
  bodyText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu accumsan elit, at congue ipsum. Praesent a nibh ligula',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: 'Learn',
    external: false,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d pancake' },
      { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'coin', alt: 'CAKE token' },
      { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
