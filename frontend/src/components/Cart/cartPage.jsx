import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  // useToast,
} from "@chakra-ui/react";
import { shallowEqual, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { useDispatch } from "react-redux";
import { getCartApi } from "../../redux/CartRedux/cart.action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { delCartApi } from "../../redux/CartRedux/cart.action";
// import { delCartApi } from "../../Redux/Cart/cart.action";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((store) => {
    return {
      cart: store.CartReducer.cart,
      isLoading: store.CartReducer.isLoading,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      dispatch(delCartApi(id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(getCartApi());
  }, [dispatch]);
  // console.log(cart);

  let value = "00";
  let length = cart.length;
  let tax = 200 * length;
  let total = cart.reduce((acc, el, i) => {
    // console.log(el,acc)
    return Number(el.discounted_price) + acc;
  }, 0);

  // console.log(total);
  length === 3 ? (value = 200) : (value = 0);
  total = total - value;

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
        <GridItem
          colSpan={3}
          h="auto"
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          borderRadius={8}
          fontSize={["xs", "sm", "sm", "md", "md", "lg"]}
        >
          <Heading color="green">Cart Item</Heading>
          <Box style={{ overflowY: "scroll" }} h="400px">
            <Box m="auto" mt="20px">
              {cart.map((el) => (
                <Grid
                  key={el.id}
                  templateColumns={"repeat(2,1fr)"}
                  boxShadow={"rgba(0, 0, 0, 0.34) 0px 3px 8px"}
                  mt="5"
                  overflow={"contain"}
                  borderRadius={"10"}
                  ml="2"
                  mr="2"
                >
                  {/* {console.log(el)} */}
                  <GridItem ml={["0", "5", "10", "15", "20"]}>
                    <Image src={el.images[0]} alt={el.brand} h="120px" m="4" />
                  </GridItem>
                  <GridItem
                    fontSize="lg"
                    as="b"
                    mr="10"
                    display="flex"
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Text>{el.title}</Text>
                    <Text>{el.brand}</Text>
                    <Text>{`₹  ${el.discounted_price}`}</Text>
                    <Button
                      colorScheme="red"
                      onClick={() => handleDelete(el._id)}
                      ml="20"
                      mr="20"
                    >
                      Delete
                    </Button>
                  </GridItem>
                </Grid>
              ))}
            </Box>
          </Box>
        </GridItem>
        <GridItem
          colSpan={2}
          h="auto"
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          borderRadius={8}
          fontSize={["xs", "sm", "sm", "md", "md", "lg"]}
        >
          <Heading textAlign={"center"} color="green">
            Summary
          </Heading>
          <Flex justifyContent="space-between" p="4">
            <Text>Total Price</Text>
            <Text>{`₹ ${total}`}</Text>
          </Flex>
          <Flex justifyContent="space-between" p="4">
            <Text>Shipping Charges</Text>
            <Text as="b" color="green.500">
              FREE
            </Text>
          </Flex>
          <Flex justifyContent="space-between" p="4">
            <Text>Coupon Discount</Text>
            <Text as="b" color="green.300">{`₹ ${value}`}</Text>
          </Flex>
          <Flex justifyContent="space-between" p="4">
            <Text>Tax And Charges</Text>
            <Text as="b" color="green.300">
              {`₹ ${tax}`}
            </Text>
          </Flex>
          <Flex justifyContent="space-between" p="4">
            <Text fontSize={["md", "md", "lg", "lg", "xl"]} as="b">
              Payable Amount
            </Text>
            <Text as="b" color="green.700">{`₹ ${total}`}</Text>
          </Flex>
          <Button
            colorScheme="red"
            m="4"
            pl="10"
            pr="10"
            pt="3"
            pb="3"
            onClick={() => navigate("/payment")}
          >
            BUY NOW
          </Button>
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
};

export default CartPage;
