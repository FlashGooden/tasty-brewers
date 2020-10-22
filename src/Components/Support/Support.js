import React from "react";
import { Box, Text, Heading, Flex, Icon } from "@chakra-ui/core";

export default function Support() {
   const boxItems = [
      {
         cardnum: "01",
         title: "SHOP PRODUCTS",
         description:
            "Our full product line is still available online here on our site! Hit our store to order some of the best beans around.",
      },
      {
         cardnum: "02",
         title: "DONATE",
         description:
            "Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.",
      },
      {
         cardnum: "03",
         title: "BUY GIFT CARDS",
         description:
            "Feeling generous and what someone to experience the great flavors? Buy a gift card for someone looking to get a kick.",
      },
   ];

   const boxContainer = ({ cardnum, title, description }) => {
      return (
         <Box
            className="box"
            backgroundColor="whiteAlpha.50"
            p={0}
            m={2}
            display="block"
            width={["full", "full", "full", "lg"]}
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
                  {cardnum}
               </Heading>
               <Heading textAlign="center" size="lg" as="h2" margin="auto">
                  {title}
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
               {description}
            </Text>
         </Box>
      );
   };

   return (
      <Box
         className="support-container"
         color="gray.700"
         mt={5}
         backgroundColor="whiteAlpha.900"
         minHeight="550px"
      >
         <Flex
            className="suport-heading"
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
                  COVID-19 has forced us to close some of our retail space, but
                  we need support from patrons like yourself now more than ever.
                  Below, we’ve listed the best ways to help us through this
                  season.
               </Text>
            </Box>
         </Flex>
         <Flex
            className="support-card-container"
            width="100%"
            flexDirection={["column", "column", "row"]}
            justifyContent="center"
            height={["6xl", "6xl", "lg"]}
            px={[4, 4, 10, 32]}
            alignItems="stretch"
            backgroundColor="whiteAlpha.900"
         >
            {boxItems.map((item) => {
               return boxContainer(item);
            })}
         </Flex>
      </Box>
   );
}
