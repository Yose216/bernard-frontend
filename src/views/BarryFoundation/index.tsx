import React from 'react'
import { Image, Heading, RowType, Toggle, Text, Button, ArrowForwardIcon, Flex,Box} from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import styled from 'styled-components'
import FlexLayout from 'components/Layout/Flex'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'

const BarryFoundation: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader style={{textAlign: 'center'}}>
        <img src="/images/barry_fondation.png" alt="logo barry fondation" width="400px"/>
        <Heading as="h1" scale="md" color="text" mt="10px" textAlign="center">
          <Button as="a" href="https://fondation-barry.ch/FR/" target="_blank" width="20%" variant="secondary">
            Discover
          </Button>
        </Heading>
      </PageHeader>
      <Page>

        <Text mb="3" mt="2" color="text">
        Following its creation in January 2005, the Barry Foundation took over the breeding kennel from the Great Saint Bernard Pass Hospice (Holy Order of the Great Saint Bernard Monastery) together with the kennel’s famous Saint Bernard dogs. Since April 2005, our foundation has been the owner of the 300-year-old breeding kennel, making us the oldest and most important Saint Bernard kennel in the world. The Barry foundation currently owns 27 bitches and 8 dogs. In accordance with the tradition of Saint Bernard breeding at Great Saint Bernard, we mainly breed short-haired dogs.
        Only 8 of the Saint Bernards in our possession are long-haired. An average of 20 pedigree puppies are born in our breeding kennel each year. A team consisting of a vet, a breed specialist and 10 keepers is responsible for ensuring the dogs’ comfort and optimal development as well as providing professional training. The Barry Foundation is a member of the Swiss Saint Bernard Club and is a recognised non-profit making association.
        </Text>
        <Text mb="3" color="text">
          Main missions
        </Text>

        <Text mb="3" color="text">
          Ensure the survival of the famous, legendary Saint Bernard dog breed by providing a breeding kennel founded on ethical and scientific knowledge
        </Text>
        <Text mb="3" color="text">
          Preserve the typical hospice dog
        </Text>
        <Text mb="3" color="text">
          Keep our dogs in their place of origin on the Great Saint Bernard Pass
        </Text>
        <Text mb="3" color="text">
          Gain recognition as a reference on breeding issues in Switzerland and worldwide
        </Text>
        <Text mb="3" color="text">
          Make the public aware of the fact that the Saint Bernards from the hospice are both a Swiss cultural asset and a symbol of the friendship between man and dog.
        </Text>

        <Heading as="h1" scale="md" color="text" mt="50px" textAlign="center">
          Total donations from bernard.finance
        </Heading>
        <Text textAlign="center">
          <Gradient>$200,000</Gradient>
        </Text>
      </Page>
    </>
  )
}

const Gradient = styled('span')(({ theme }) => ({
  background: 'linear-gradient(90deg, #FFF099 0%, #FFD700 50%, #E6C300 100%)',
  '-webkitBackgroundClip': 'text',
  '-webkitTextFillColor': 'transparent',
  fontSize: '65px'
}));

export default BarryFoundation
