import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import {shallowEqual, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { cartAPI } from "../../redux/CartRedux/cart.api"; 
import { useDispatch } from "react-redux";

const CartPage = () => {
  const cart = useSelector((store) =>  store.cartReducer.cart)
  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(cartAPI());
  },[dispatch])

  console.log(cart);

  let value = "00";
  let tax = 200;
  
  return (
    <Box>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={4}
        ml="5"
        mr="5"
        objectFit={"contain"}
        pt="28"
      >
        <GridItem colSpan={3} h="auto" bg="tomato">
          <Heading color="green">Cart Item</Heading>
          
        </GridItem>
        <GridItem
          colSpan={2}
          h="auto"
          boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
          borderRadius={8}
          fontSize={["xs", "sm", "sm", "md", "md", "lg"]}
        >
          <Heading textAlign={"center"} color="green">
            Summary
          </Heading>
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
          <Button colorScheme="red" m="4" pl='10' pr='10' pt='3' pb='3'>
            BUY NOW
          </Button>
        </GridItem>
      </Grid>
      <Footer/>
    </Box>
  );
};

export default CartPage;
