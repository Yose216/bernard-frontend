import React from 'react'
import { Image, Heading, RowType, Toggle, Text, Button, ArrowForwardIcon, Flex,Box} from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import styled from 'styled-components'
import FlexLayout from 'components/Layout/Flex'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'

const Info: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="primary" mb="24px">
          {t('Infos')}
        </Heading>
        <Heading scale="lg" color="text">
          {t('Understand our ecosystem.')}
        </Heading>
      </PageHeader>
      <Page>
        <img src="/images/info.jpg" alt="info" />

        <Text mb="3" mt="5" color="text">
          Bernard.finance is a complete DEFI ecosystem that allows for multiple tokens and a complete swap, farming, NFT marketplace and Gaming platform.
        </Text>
        <Text mb="3" color="text">
          The ecosystem launched with $BERN, a community token using a reflection tax. This allowed us to set up the next product : $BARREL, which brought a financial aspect to the project.
        </Text>
        <Text mb="" color="text">
          We proceeded with a presale launch to raise funds which are now in an unleveraged algorithmic trading account. The benefits of the algorithm are both used to compound the account but also proceed to buyback $BERN and $BARREL tokens.
        </Text>
        <Text mb="" color="text">
          The last token is $BONES. It is the fuel of the BernardSwap DEX. it will allow to reward holders of $BERN and $BARREL and is used to interact with the platform (lottery, gaming etc..)
        </Text>

        <Flex flexDirection="column">
          <FlexToken>
            <CardBodyToken className="bern">
              <Wrapper mb="12px">
                <Image src="images/bern.png" alt="logo" width={60} height={60} />
                <Flex flexDirection="column" >
                  <Heading mb="4px" ml="3" style={{fontSize:'33px'}}>$BERN</Heading>
                </Flex>
              </Wrapper>
              <Wrapper mb="12px" style={{minHeight: '100px'}}>
                <Text fontSize="15px">$BERN is a community meme coin with a reflection tax to grow holders bags. It is bought back by our NFT sells.</Text>
              </Wrapper>
              <Wrapper mb="12px" style={{minHeight: '20px'}}>
                <Text fontSize="15px">10% tax on transactions.</Text>
              </Wrapper>

              <Flex justifyContent='space-between' mb="4">
                <Text>Tax:</Text>
                <Text>5% to holders<br/>5% burned</Text>
              </Flex>

              <Flex justifyContent='center'>
                <Button as="a" href="https://google.com" mt="8px" width="50%" variant="primary">
                  BUY
                </Button>
              </Flex>
            </CardBodyToken>
            <CardBodyToken className="barrel">
              <Wrapper mb="12px">
                <Image src="images/barrel.png" alt="logo" width={60} height={60} />
                <Flex flexDirection="column" >
                  <Heading mb="4px" ml="3" style={{fontSize:'33px'}}>$BARREL</Heading>
                </Flex>
              </Wrapper>
              <Wrapper mb="12px" style={{minHeight: '100px'}}>
                <Text fontSize="15px">$BARREL is our second pillar, backed by an algorithmic trading account and a buyback tax. Steady growth over time, this is the perfect store of value.</Text>
              </Wrapper>
              <Wrapper mb="12px" style={{minHeight: '20px'}}>
                <Text fontSize="15px">10% tax on sells only.</Text>
              </Wrapper>

              <Flex justifyContent='space-between' mb="4">
                <Text>Tax:</Text>
                <Text>6% auto buyback<br/>4% to marketing</Text>
              </Flex>

              <Flex justifyContent='center'>
                <Button as="a" href="https://google.com" mt="8px" width="50%" style={{background: '#E65409', borderColor: '#E65409'}}>
                  BUY
                </Button>
              </Flex>
            </CardBodyToken>
            <CardBodyToken className="bones">
              <Wrapper mb="12px">
                <Image src="images/bones.png" alt="logo" width={60} height={60} />
                <Flex flexDirection="column" >
                  <Heading mb="4px" ml="3" style={{fontSize:'33px'}}>$BONES</Heading>
                </Flex>
              </Wrapper>
              <Wrapper mb="12px" style={{minHeight: '100px'}}>
                <Text fontSize="15px">$BONES is the currency of bernardswap. It is earned via high reward staking and farming, and spent to play on our platform.</Text>
              </Wrapper>
              <Wrapper mb="12px" style={{minHeight: '20px'}}>
                <Text fontSize="15px">10% tax on sells only.</Text>
              </Wrapper>

              <Flex justifyContent='space-between' mb="4">
                <Text>Tax:</Text>
                <Text>5% to algo<br/>1% to charity<br/>4% to marketing</Text>
              </Flex>

              <Flex justifyContent='center'>
                <Button as="a" href="https://google.com" mt="8px" width="50%" style={{background: '#d4a96f', borderColor: '#d4a96f'}}>
                  BUY
                </Button>
              </Flex>

            </CardBodyToken>
          </FlexToken>
        </Flex>


      </Page>
    </>
  )
}

const CardBodyToken = styled.div`
  &.bern {
    background: linear-gradient(180deg, #27262cb3 15%, #548d65 100%);
  },
  &.barrel {
    background: linear-gradient(180deg, #27262cb3 15%, #FD7C02 100%);
  },
  &.bones {
    background: linear-gradient(180deg, #27262cb3 15%, #856a46 100%);
  },
  align-self: baseline;
  border-radius: 32px;
  width: 30%;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (max-width:968px) {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 90%;
  }
`

const FlexToken = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  @media screen and (max-width:968px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
  align-items: center;
`

export default Info
