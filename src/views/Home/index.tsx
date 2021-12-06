import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import { Flex, Text, Heading, Button } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import Row from 'components/Layout/Row'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'


const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const DivCarousel = styled("div") `
  height: 500px;
  @media screen and (max-width: 768px) {
    height: 150px;
  }
`

const ImgCarousel = styled("img") `
  borderRadius: '10%';
  @media screen and (max-width: 768px) {
    height: 150px;
  }
`
const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  return (
    <>
      <PageMeta />
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{ style: { margin: '0', width: '100%' } }}
        background='linear-gradient(180deg, #111 22%, #191919 100%)'
        index={2}
        hasCurvedDivider={false}
      >
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <img src="/images/logo.png" width="250px" height="250px" alt="logo bernard finance"/>
          <Heading scale="xxl" color="text" mb="15px">

            Bernard Finance
          </Heading>
          <Text mb="" color="textSubtle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum vulputate tellus vitae tincidunt. Proin vel condimentum sapien.<br/>
          </Text>
          <Text mb="" color="textSubtle">
            Nullam condimentum vulputate tellus vitae tincidunt. Proin vel condimentum sapien.<br/>
          </Text>
        </Flex>
      </PageSection>

      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{ style: { margin: '0', width: '100%' } }}
        background='linear-gradient(180deg, #191919 22%, #548d65 100%)'
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill='#548d65'>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData} />
      </PageSection>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradients.cardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.colors.background}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...earnSectionData} />
      </PageSection>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >

        <SalesSection {...cakeSectionData} />
      </PageSection>
    </>
  )
}

export default Home
