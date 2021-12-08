import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Image, Heading, RowType, Toggle, Text, Button, ArrowForwardIcon, Flex,Box } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import styled from 'styled-components'
import FlexLayout from 'components/Layout/Flex'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'

const BFC: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Outer>
        <Inner style={{textAlign: 'center'}}>
          <img  src="/images/bfc-logo.png" alt="phishing-warning" width="300px"/>
          <Heading as="h2" scale="lg" color="text" mb="24px">
            {t('Coming SOON')}
          </Heading>
        </Inner>
      </Outer>
      <Page>
        <h1>
          <Gradient>{t('Bernardo Fight Club')}</Gradient>
        </h1>
        <Text mb="3" color="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique neque sit amet mi cursus, vel bibendum mauris pharetra. Duis pulvinar luctus elit, a tincidunt sapien viverra ut. Aenean lacinia, nisl sit amet fermentum commodo, est dui porta quam, ac volutpat eros eros eget nibh. Praesent posuere in felis ac sodales. Integer scelerisque id odio non egestas. Etiam at facilisis velit. Donec accumsan scelerisque velit, ut iaculis nisi rhoncus sit amet. Mauris urna arcu, finibus sit amet mi et, congue tristique urna.
        </Text>
        <Text mb="3" color="text">
          Suspendisse ut rhoncus felis. Sed consectetur gravida risus, ac pretium nisl efficitur tristique. Sed sit amet efficitur massa. Sed id lacus at magna vulputate fringilla in non arcu. Donec sit amet ex in enim aliquet egestas vel at nibh. Phasellus a finibus tortor. Phasellus quis quam sit amet erat tincidunt congue quis et ex. Sed imperdiet massa lorem, ullamcorper facilisis tellus tincidunt nec. Donec augue purus, interdum eu bibendum sed, rhoncus vitae lorem. Donec fringilla neque vitae turpis feugiat rhoncus. Fusce ut nunc volutpat, auctor augue vitae, tristique nibh. Ut lorem nisi, sodales eget euismod vel, imperdiet et nibh.
        </Text>
        <Text mb="" color="text">
          Duis malesuada ipsum sapien, venenatis elementum felis laoreet sit amet. Integer rutrum sollicitudin semper. Etiam et est eget arcu euismod hendrerit in at erat. Proin quis commodo urna. Sed a turpis augue. Donec facilisis bibendum nisi ut rhoncus. Curabitur accumsan est at porttitor accumsan. Etiam vitae elit id ex cursus ultrices sed eleifend libero. Sed ultricies, nibh vitae auctor imperdiet, leo sapien interdum justo, molestie tristique neque velit eget felis. Ut fermentum ante eu mi bibendum facilisis.
        </Text>

      </Page>
    </>
  )
}

const Outer = styled(Box)`
  background: linear-gradient(130deg, #2163e2 0%, #22201f 50%, #ee002f 100%);
`

const Inner = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
`

const Gradient = styled('span')(({ theme }) => ({
  background: 'linear-gradient(90deg, #2163e2 30%, #ee002f 100%)',
  '-webkitBackgroundClip': 'text',
  '-webkitTextFillColor': 'transparent',
  fontSize: '65px'
}));

export default BFC
