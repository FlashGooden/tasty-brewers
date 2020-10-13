import React from 'react'
import {
  Box,
  Text,
  Heading,
  Flex,
  Icon,
} from "@chakra-ui/core";

export default function Support() {
  return (
    <Box color="gray.700" mt={5} backgroundColor="whiteAlpha.900" minHeight="550px">
    <Flex
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="stretch"
      p={2}
    >
      <Box p={2} display="block" flexDirection="column">
        <Text>WAYS TO SUPPORT</Text>
        <Heading>Tasty Brewers.</Heading>
      </Box>
      <Box maxWidth="50%" p={0}>
        <Text overflow="visible" fontSize="sm">
          COVID-19 has forced us to close some of our retail space, but we need
          support from patrons like yourself now more than ever. Below, we’ve
          listed the best ways to help us through this season.
        </Text>
      </Box>
    </Flex>
    <Flex
      width="100%"
      flexDirection="row"
      justifyContent="center"
      height="lg"
      px={10}
      alignItems="stretch"
      backgroundColor="whiteAlpha.900"
    >
      <Box
        backgroundColor="whiteAlpha.50"
        p={0}
        m={2}
        display="block"
        width="lg"
        flexGrow={1}
      >
        <Box
          height="70%"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="stretch"
          backgroundColor="blackAlpha.700"
          color="whiteAlpha.900"
          borderRadius="5%"
        >
          <Heading textAlign="left" mt={5} ml={2}>
            01
          </Heading>
          <Heading textAlign="center" size="lg" as="h2" margin="auto">
            SHOP PRODUCTS
          </Heading>
          <Icon
            name="copy"
            textAlign="left"
            display="block"
            margin="auto"
            mb={5}
          />
        </Box>
        <Text
          textAlign="left"
          fontSize="sm"
          display="block"
          margin="auto"
          pt={5}
          color="gray.700"
        >
          Our full product line is still available online here on our site! Hit
          our store to order some of the best beans around.{' '}
        </Text>
      </Box>
      <Box
        backgroundColor="whiteAlpha.50"
        p={0}
        m={2}
        width="lg"
        display="block"
        flexGrow={1}
      >
        <Box
          height="70%"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="stretch"
          backgroundColor="blackAlpha.700"
          color="whiteAlpha.900"
          borderRadius="5%"
          textAlign="left"
        >
          <Heading textAlign="left" mt={5} ml={2}>
            02
          </Heading>
          <Heading textAlign="center" size="lg" margin="auto">
            DONATE
          </Heading>
          <Icon
            name="copy"
            textAlign="left"
            display="block"
            margin="auto"
            mb={5}
          />
        </Box>
        <Text
          fontSize="sm"
          textAlign="left"
          display="block"
          margin="auto"
          pt={5}
          color="gray.700"
        >
          Since we've changed the way we operate to online only, and to ensure
          your safety, not all our staff is working. Donate to keep them afloat.
        </Text>
      </Box>
      <Box backgroundColor="whiteAlpha.50" p={0} m={2} width="lg" flexGrow={1}>
        <Box
          height="70%"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="stretch"
          backgroundColor="blackAlpha.700"
          color="whiteAlpha.900"
          borderRadius="5%"
        >
          <Heading textAlign="left" mt={5} ml={2}>
            03
          </Heading>
          <Heading textAlign="center" size="lg" margin="auto">
            BUY GIFT CARDS
          </Heading>
          <Icon
            name="copy"
            textAlign="left"
            display="block"
            margin="auto"
            mb={5}
          />
        </Box>
        <Text
          display="block"
          textAlign="left"
          fontSize="sm"
          margin="auto"
          pt={5}
          color="gray.700"
        >
          Feeling generous and what someone to experience the great flavors? Buy
          a gift card for someone looking to get a kick.{' '}
        </Text>
      </Box>
    </Flex>
  </Box>
  )
}
