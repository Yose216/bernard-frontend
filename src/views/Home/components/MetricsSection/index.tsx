import React from 'react'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon, FarmIcon, TicketFillIcon, VoteIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber, formatNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const apr = "480%"
  const lottery = "$120,000"

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <FarmIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <TicketFillIcon color="#008611" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <VoteIcon color="#ffc00b" width="36px" />,
  }

  return (
    <Flex  flexDirection="column">

      <Flex flexDirection="row" justifyContent="space-between" alignItems="space-between">
        <IconCard {...UsersCardData} title="Staking" mr={[null, null, null, '16px']} mb={['0', null, null, '0']}>
          <StatCardContent
            headingText={t('Earn up to %apr%', {apr} )}
            bodyText={t('Try our superfarms now')}
            highlightColor={theme.colors.secondary}
            textBtn="Try It"
          />
        </IconCard>
        <IconCard {...TradesCardData} title="Lottery" mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Amout of prize to win %lottery%', { lottery })}
            bodyText={t('Get your ticket now')}
            highlightColor="#008611"
            textBtn="Try It"
          />
        </IconCard>
        <IconCard {...StakedCardData} title="Bets">
          <StatCardContent
            headingText={t('Your $BONES available 12456', { tvl: tvlString })}
            bodyText={t('Start betting now')}
            highlightColor="#ffc00b"
            textBtn="Try It"
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
