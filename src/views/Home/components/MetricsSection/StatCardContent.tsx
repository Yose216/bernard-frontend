import React from 'react'
import { Heading, Flex, Text, Button, useMatchBreakpoints } from '@pancakeswap/uikit'

const StatCardContent: React.FC<{ headingText: string; bodyText: string; highlightColor: string, textBtn?: string }> = ({
  headingText,
  bodyText,
  highlightColor,
  textBtn
}) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const isSmallerScreen = isMobile || isTablet
  const split = headingText.split(' ')
  const lastWord = split.pop()
  const remainingWords = split.slice(0, split.length).join(' ')

  return (
    <Flex
      minHeight={[null, null, null, '250px']}
      minWidth="232px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading scale="md">{remainingWords}</Heading>
      ) : (
        <Heading scale="lg">{remainingWords}</Heading>
      )}
      <Heading color={highlightColor} scale="xl" mb="24px">
        {lastWord}
      </Heading>

      <Text color="textSubtle">{bodyText}</Text>

      <Button variant="tertiary" mt="20px" width="50%" style={{color: highlightColor}}>
        {textBtn}
      </Button>
    </Flex>
  )
}

export default StatCardContent
