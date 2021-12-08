import React from 'react'
import { Image, Heading, RowType, Toggle, Text, Button, ArrowForwardIcon, Flex,Box} from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import styled from 'styled-components'
import FlexLayout from 'components/Layout/Flex'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'

const Algo: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="primary" mb="24px">
          {t('Algo performance')}
        </Heading>
        <Heading scale="lg" color="text">
          {t('Algorythmic trading account performances.')}
        </Heading>
      </PageHeader>
      <Page>

        <Text mb="3" mt="2" color="text">
          The function of $BARREL algorithm is to bring upward buy pressure via MASSIVE and AUTOMATISED buybacks on the Bernard.finance ecosystem. $BARREL gets to profit from spot trading on the crypto exchange FTX.
        </Text>
        <Text mb="3" color="text">
          <span style={{fontWeight:'bold', fontSize: '20px'}}>Continuous growth</span><br/>
          Thanks to the several burn options, $BARREL is deflationary and its value will increase on each transaction.
        </Text>
        <Text mb="3" color="text">
          <span style={{fontWeight:'bold', fontSize: '20px'}}>HODL to win</span><br/>
          6% of each sell will buy back $BARREL. 50% of algo gains will buy back $BARREL. All the buy-backs will be burned.
        </Text>
        <Text mb="3" color="text">
          <span style={{fontWeight:'bold', fontSize: '20px'}}>Certik audited</span><br/>
          BARREL has been successfully audited by Certik
        </Text>
        <Text mb="3" color="text">
          <span style={{fontWeight:'bold', fontSize: '20px'}}>Exclusivity</span><br/>
          $BARREL holders will be the first to know about the next bernard.finance projects and will be incentivised to participate in future events.
        </Text>
        <Text mb="3" color="text">
          Buybacks are done every 2 weeks
        </Text>
        <Text mb="3" color="text">
          $BARREL trading bot Update of (daydate) :
        </Text>
        <img src="/images/algo_perf.jpg" alt="algo perf" />

      </Page>
    </>
  )
}

export default Algo
