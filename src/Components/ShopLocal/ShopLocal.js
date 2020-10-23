import React from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/core";
import latteTreat from "../../assets/latte-treat.jpeg";

export default function ShopLocal() {
   return (
      <Box
         className="shop-local-container"
         width="100%"
         display={["block", "block", "flex"]}
         justfiyContent="flex-end"
         p={0}
      >
         <Box
            // p={1}
            minWidth={["100%", "100%", "20%"]}
            className="shop-local-left"
         >
            <Image
               className="image-container"
               height={["sm", "sm", "50%"]}
               minWidth={["100%", "100%", "10rem", "20rem"]}
               width="30%"
               display="block"
               zIndex={3}
               mt={[0, 0, 20]}
               position={["relative", "relative", "absolute"]}
               src={latteTreat}
            />
         </Box>
         <Box
            className="shop-local-right"
            backgroundColor="gray.900"
            p={[8, 8, 10, 20]}
            height={["xl", "xl", "lg"]}
            mt={[0, 0, 10]}
            mb={[0, 0, 10]}
            borderRadius={[null, null, "5%"]}
            maxWidth={[null, null, "80%"]}
         >
            <Heading
               fontSize="6xl"
               as="h1"
               color="whiteAlpha.900"
               size="2xl"
               textAlign="left"
               pl={[null, null, 20]}
            >
               Clean Arabica.
            </Heading>
            <Text
               color="whiteAlpha.900"
               mb={5}
               textAlign="left"
               pr={8}
               pt={5}
               pl={[null, null, 20]}
            >
               We know that during COVID-19, a lot of folks around the city and
               state are feeling uneasy about the future - we’re not sure what
               the future holds either.
            </Text>
            <Text
               color="whiteAlpha.900"
               mb={5}
               textAlign="left"
               pr={8}
               pl={[null, null, 20]}
            >
               But just know that we have one of the cleaneast super energy
               lines that provide us a contact-less experience when it comes to
               shipping your beans.
            </Text>
            <Text
               textAlign="left"
               color="whiteAlpha.900"
               pr={8}
               pl={[null, null, 20]}
            >
               Coffee never tasted to great, You gotta love when a company takes
               ownership over making your product right.{" "}
            </Text>
            <Text color="whiteAlpha.900" textAlign="left" pl={[null, null, 20]}>
               --------
            </Text>
            <Text
               color="whiteAlpha.900"
               textAlign="left"
               fontWeight="bold"
               pl={[null, null, 20]}
            >
               Tasty Brewers
            </Text>
         </Box>
      </Box>
   );
}
