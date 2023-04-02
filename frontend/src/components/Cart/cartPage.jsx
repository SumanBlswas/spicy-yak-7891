import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Footer } from "../footer/Footer";

const CartPage = () => {
  const products = useSelector((store) => console.log(store.cart.cart))
  const [data,setData] = useState([]);
  // console.log(products);
  const navigate = useNavigate();
  const toast = useToast();

  const getCartData = async () => {
    try{
      let res = await axios.get('https://maroon-sea-urchin-tam.cyclic.app/cart',{
        headers: {
          Authorization: localStorage.getItem('token'),
        }
      })
      console.log(res);
      setData(res.data);
    }catch(err){
      console.log(err);
      console.log('Cannot get the Data')
    }
  }
  useEffect(()=>{
    getCartData();
  },[])

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
