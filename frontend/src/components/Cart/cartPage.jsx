import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

const CartPage = () => {
  let value = "00";
  let tax = 200;
  return (
    <Box>
      <Navbar/>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={4}
        ml="5"
        mr="5"
        objectFit={"contain"}
        pt="28"
      >
        <GridItem colSpan={3} h="auto" bg="tomato">
          <Heading>Cart Item</Heading>
        </GridItem>
        <GridItem
          colSpan={2}
          h="auto"
          bg="papayawhip"
          fontSize={["xs", "sm", "sm", "md", "md", "lg"]}
        >
          <Text as="b" fontSize="xl" textAlign={"start"}>
            SUMMARY
          </Text>
          <Flex justifyContent="space-between" p="4">
            <Text>Total Price</Text>
            <Text>{"Enter Amount"}</Text>
          </Flex>
          <Flex justifyContent="space-between" p="4">
            <Text>Shipping Charges</Text>
            <Text as="b" color="green.500">
              FREE
            </Text>
          </Flex>
          <Flex justifyContent="space-between" p="4">
            <Text>Coupon Discount</Text>
            <Text as="b" color="green.500">{`₹${value}`}</Text>
          </Flex>
          <Flex justifyContent="space-between" p="4">
            <Text>Tax And Charges</Text>
            <Text as="b" color="green.500">
              {tax}
            </Text>
          </Flex>
          <Flex justifyContent="space-between" p="4">
            <Text fontSize={["md", "md", "lg", "lg", "xl"]} as="b">
              Tax And Charges
            </Text>
            <Text as="b" color="green.500">{`₹${tax}`}</Text>
          </Flex>
          <Button colorScheme="red" m="4">
            BUY NOW
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CartPage;
