import React from "react";
import "./Nav.scss";
import {
   ThemeProvider,
   CSSReset,
   theme,
   Grid,
   Box,
   Text,
   InputGroup,
   Flex,
   Icon,
} from "@chakra-ui/core";

export default function Nav() {
   return (
      <div className="nav-section">
         <div className="container">
            <div className="nav-wrapper">
               <div className="brand">
                  <img alt="tasty-icon"></img>
                  <p className="tasty-text">Tasty Brewers</p>
               </div>
               <div className="cart-nav-wrapper">
                  <div className="nav-menu">
                     <a className="nav-links" href="/">
                        Home
                     </a>
                     <a className="nav-links" href="/">
                        About
                     </a>
                     <a className="nav-links" href="/">
                        Shop
                     </a>
                     <a className="nav-links" href="/">
                        Donate
                     </a>
                  </div>
                  <div className="cart-button">cart</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export const Nav2 = () => (
   <Box width="100%" mt="0.5%" mb="2" opacity={1} overflow="visible" p={0}>
      <Flex
         flexDirection="row"
         justifyContent="space-between"
         alignItems="stretch"
         p={2}
         color="blackAlpha.500"
         backgroundColor="whiteAlpha.900"
      >
         <Flex
            flexDirection="row"
            width={["50%", "50%", "30%"]}
            justifyContent="flex-start"
            alignItems="center"
            color="blackAlpha.900"
            ml={4}
         >
            <Icon name="copy" fontSize="3xl" />
            <Text ml={3}>Tasty Brewers</Text>
         </Flex>
         <Flex
            flexDirection="row"
            width="60%"
            justifyContent={[
               "flex-end",
               "flex-end",
               "flex-end",
               "space-between",
            ]}
            display="flex"
            p={0}
            mr={2}
            alignItems="center"
         >
            <Flex
               justifyContent="space-between"
               alignItems="stretch"
               flexDirection="row"
               width="90%"
               color="pink.500"
               display={["none", "none", "none", "flex"]}
            >
               <Text>Home</Text>
               <Text>About</Text>
               <Text>Shop</Text>
               <Text>Donate</Text>
               <Text>Contact</Text>
            </Flex>
            <Icon name="copy" fontSize="2xl" color="blackAlpha.900" />
         </Flex>
      </Flex>
   </Box>
);
