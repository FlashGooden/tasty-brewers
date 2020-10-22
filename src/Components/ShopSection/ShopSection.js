import React from "react";
import { Box, Text, Flex, Heading, Button, Image } from "@chakra-ui/core";
import bossMug from '../../assets/boss-mug.jpg'
import fillMeTea from '../../assets/fill-me-tea.jpg'
import lifeBegins from '../../assets/life-begins.jpg'

const products = () => {
   return [
      { name: "Life Begins Mug", price: "$ 20.00 USD", img: lifeBegins },
      { name: "Fill Me Tea Mug", price: "$ 35.00 USD", img: fillMeTea },
      { name: "Who The Boss Mug", price: "$ 45.00 USD", img: bossMug },
   ];
};

const productCard = ({name, price, img}) => {
   return (
      <Box
         display="flex"
         minWidth="30%"
         p={0}
         flexDirection="column"
         justifyContent="center"
         alignItems="center"
         className="product-container"
      >
         <Image height="xs" width="sm" className="product-image" src={img} />
         <Text
            textAlign="center"
            mt={3}
            fontWeight="bold"
            fontSize="lg"
            className="product-name"
         >
            {name}
         </Text>
         <Text
            textAlign="center"
            fontWeight="bold"
            fontSize="sm"
            className="product-price"
         >
           {price}
         </Text>
         <Button
            mt={5}
            size="sm"
            width="30%"
            overflow="visible"
            variant="solid"
            mb={2}
            className="product-button"
         >
            Details
         </Button>
      </Box>
   );
};

export default function ShopSection() {
   return (
      <Box p={1} className="shop-section" mt={5} display="block">
         <Flex flexDirection="column" className="shop-section-header"  alignItems="flex-start">
            <Text>SHOP PRODUCTS</Text>
            <Heading>Open 24/7/365.</Heading>
         </Flex>
         <Flex
            className="product-list"
            justifyContent="space-between"
            flexWrap="wrap"
            m={10}
         >
            {products().map((product)=> {
             return productCard(product)
            })}
         </Flex>
         <Button textAlign="center" m="auto" display="block" mb={10}>
            View All Products
         </Button>
      </Box>
   );
}
