import React from "react";
import { Box, Text, Flex, Heading, Button, Image } from "@chakra-ui/core";
import SafeImage from "../assets/safe-coffee.jpg";


export default function SafeComponent() {
   return (
      <Box
         height="lg"
         className="safe-component"
         background="linear-gradient(
      360deg,
      hsla(0, 0%, 13.33%, 1),
      hsla(0, 0%, 13.33%, 0)
   )"
      >
         <Image
            pos="absolute"
            zIndex="-1"
            height="lg"
            width="100%"
            src={SafeImage}
            objectFit="cover"
         />
         <Flex
            height="full"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-end"
            alignContent="space-between"
            color="white"
            mr={[0,0,5,5]}
         >
            <Heading
               textAlign="right"
               fontSize={["xl","4xl"]}
               as="h2"
               width={["full","md"]}
               m={[2,5]}
               className="safe-heading"
            >
               How we're keeping you safe during COVID-19
            </Heading>
            <Text
               fontSize={["sm","xl"]}
               textAlign="right"
               width={["xs","md"]}
               m={[2,5]}
               className="safe-text"
            >
               When you come into our stores you will see how we care for your
               coffee by caring for your space.
            </Text>
            <Button
               size="md"
               m={5}
               className="safe-button"
               color="teal.500"
               backgroundColor="messenger.900"
            >
               Read Our Coffee Credo
            </Button>
         </Flex>
      </Box>
   );
}
