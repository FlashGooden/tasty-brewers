import React from "react";
import "./Hero.scss";
import HeroImage from "../../assets/hero-pour.jpg";
import {
   Box,
   Text,
   Flex,
   Image,
   Heading,
   Button,
} from "@chakra-ui/core";

export default function Hero() {
   return (
      <div className="hero-section">
         <div className="container">
            <div className="hero-wrapper">
               <h1 className="hero-heading">Brewing Coffee Since 1959.</h1>
               <p className="hero-paragraph">
                  We have shops located in all 50 states so you can get your
                  bean and drink it too!
               </p>
               {/* <button>the button will go here</button> */}
            </div>
         </div>
      </div>
   );
}

export const Hero1 = () => (
   <Box
   zIndex='4'
      height="550px"
      background="linear-gradient(
    360deg,
    hsla(0, 0%, 13.33%, 1),
    hsla(0, 0%, 13.33%, 0)
 )"
      color="white"
   >
      <Image
         pos="absolute"
         zIndex="-1"
         height="550px"
         width="100%"
         src={HeroImage}
         objectFit="cover"
      />
      <Flex
         ml={8}
         width="50%"
         minHeight="100%"
         flexDirection="column"
         justifyContent="center"
      >
         <Heading as="h1" size="xl" textAlign="left" width="70%">
            Brewing Coffee Since 1959.
         </Heading>
         <Text textAlign="left" mt={5} width="70%">
            We have shops located in all 50 states so you can get your bean and
            drink it too!
         </Text>
         <Button
            size="md"
            width={32}
            color="teal.500"
            backgroundColor="messenger.900"
            mt={5}
         >
            Vist the store!
         </Button>
      </Flex>
   </Box>
);
