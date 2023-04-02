import React, { useState } from "react";
import styles from "./Product.module.css";
import SingleCard from "../components/SingleCard";
import {
  Box,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getFilterdProducts,
  getMainData,
  getMensProducts,
  getMensProductsSorted,
} from "../redux/Product/Product.action";
import Loading from "./Loading";
// import PageNotFound from "./PageNotFound";
import Pagination from "../components/Pagination";
import { useCallback } from "react";

import SampleBrand from "./SampleBrands";

import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/footer/Footer";

let brands = [
  "HRX by Hrithik Roshan",
  "Roadster",
  "The Indian Garage Co",
  "HIGHLANDER",
  "LOCOMOTIVE",
  "United Colors of Benetton",
  "IVOC",
  "H&M",
  "Mast & Harbour",
  "Lee",
  "DENNISON",
  "HERE&NOW",
  "Levis",
  "WROGN",
  "Urbano Fashion",
  "High Star",
]; /**
,
*/

const Product = () => {
  const { loading, error, totalPages, products, filteredBrandData } =
    useSelector((store) => store.mens);
  // page state
  /* current page is for pagination */
  const [currentPage, setCurrentPage] = useState(1);

  /* SValue  is for sorting */
  const [sValue, setSValue] = useState("");

  /* brand is for brand filter */
  const [brand, setBrand] = useState();

  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  //console.log(products, currentPage);

  useEffect(() => {
    // if (products.length === 0) {
    dispatch(getMensProducts(currentPage));
    dispatch(getMainData());
    // }
  }, [dispatch, currentPage]);

  //console.log(brands);

  // pagination starts here

  useEffect(() => {
    dispatch(getMensProducts(currentPage));
  }, [dispatch, currentPage]);

  const handlePage = (val) => {
    setCurrentPage((prev) => prev + val);
  };
  // pagination ends here

  // sorting filter start
  useEffect(() => {
    //console.log(sValue);
    dispatch(getMensProductsSorted(sValue, currentPage));
  }, [dispatch, sValue, currentPage]);

  const handleChange = (e) => {
    setSValue(e.target.value);
  };

  // sorting filter ends here

  /*brand filter starts here */

  useEffect(() => {
    dispatch(getFilterdProducts(brand));
  }, [brand, dispatch]);

  const handleCheck = (e) => {
    e.preventDefault();
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
      setBrand(e.target.value);
    }
  };
  //console.log("isChecked", checked);

  /*brand filter ends here */

  /* handleClear starts here*/

  const handleClear = useCallback(() => {
    dispatch(getMensProducts(currentPage));
  }, [dispatch, currentPage]);

  /* handleClear ends here*/

  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  if (error) return <>{/* <PageNotFound /> */}</>;

  return (
    <div>
      <div className={styles.product_nav}>
        <Navbar />
      </div>

      <Box
        className={styles.product_container}
        mt={{ base: "5rem", sm: "5rem", md: "3.9rem", lg: "11.2rem" }}
        // mt={"170px"}
      >
        <Flex
          position={"relative"}
          padding={"0 1rem 0.5rem 1rem"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box
            border={"0px solid red"}
            backgroundColor={"white"}
            textAlign={"left"}
            zIndex={"100"}
            w={"20%"}
            position={"fixed"}
            top={"7rem"}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "inline-block",
            }}
          >
            <Text
              display={"inline-block"}
              fontSize={"1.2rem"}
              fontWeight={"bold"}
              color={"black.400"}
            >
              {" "}
              Mens -
            </Text>{" "}
            ({totalPages})
          </Box>
          <Box
            display={{
              sm: "none",
              base: "none",
              md: "none",
              lg: "inline-block",
            }}
            position={"fixed"}
            w={"20%"}
            top={"9rem"}
            zIndex={"100"}
            backgroundColor={"#FFF"}
            border={"0px solid red"}
            className={styles.brands}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems={"baseline"}
              pl={"0.1rem"}
            >
              <Text fontSize={"1.2rem"} fontWeight={700} textAlign={"left"}>
                Filters
              </Text>
              <Text
                onClick={() => handleClear()}
                fontSize={"0.9rem"}
                fontWeight={"700"}
                color={"red"}
              >
                Clear All
              </Text>
            </Flex>

            <Box border={"0px solid gray"}>
              <Heading
                fontSize={"1rem"}
                textAlign="left"
                mb={"0.5rem"}
                pt={"1rem"}
                pl={"0.5rem"}
              >
                Brands
              </Heading>

              <Flex flexDirection={"column"} textAlign={"left"}>
                {brands?.map((brand, i) => (
                  <Checkbox
                    textAlign={"left"}
                    fontSize={"0.7rem"}
                    key={i}
                    pl={"1rem"}
                    value={brand}
                    // isChecked
                    onChange={(e) => handleCheck(e)}
                  >
                    {brand}
                  </Checkbox>
                ))}
              </Flex>
            </Box>
          </Box>
          {/* filters end */}

          <Box
            border={"0px solid gray"}
            w={{ lg: "80%", sm: "100%", md: "100%", base: "100%" }}
            ml={{ base: 0, sm: 0, md: 0, lg: "22%" }}
            marginTop={"-70px"}
          >
            <div className={styles.products}>
              <Flex
                justifyContent={"space-between"}
                borderBottom={"0px solid gray"}
                zIndex={14}
                backgroundColor={"white"}
              >
                <Box
                  w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                  m={"0.5rem"}
                  display={"flex"}
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  px={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                  border={"0px solid gray"}
                  boxShadow={"sm"}
                >
                  <Box width={"100%"} border={"0px solid red"}>
                    <Text ml={2} textAlign={"left"}>
                      <b>Sort By :</b>
                    </Text>
                    <Select
                      variant="solid"
                      placeholder="All"
                      p={2}
                      bg={"gray.200"}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="rating">Rating </option>
                      <option value="discount">Better Discount</option>
                      <option value="PriceLTH">Price:Low To High</option>
                      <option value="PriceHTL">Price:High To Low</option>
                    </Select>
                  </Box>
                  {/* filters */}
                  <Box border={"1px solid black"} width={"0%"}>
                    <Text
                      ml={2}
                      textAlign={"left"}
                      display={{
                        base: "flex",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                      }}
                    >
                      <b>Filters :</b>
                    </Text>
                    <Stack
                      display={{
                        base: "flex",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                      }}
                    >
                      <SampleBrand brands={brands} handleCheck={handleCheck} />
                    </Stack>
                  </Box>
                  <Box
                    border={"0px solid green"}
                    width={"100%"}
                    display={{
                      base: "inline-block",
                      sm: "inline-block",
                      md: "inline-block",
                      lg: "none",
                    }}
                    justifyContent={"flex-end"}
                    textAlign={{ base: "center", sm: "center", md: "right" }}
                  >
                    <Text
                      display={"inline-block"}
                      fontSize={"1.2rem"}
                      fontWeight={"bold"}
                      color={"black"}
                    >
                      {" "}
                      Mens -
                    </Text>{" "}
                    ({totalPages})
                  </Box>
                </Box>
              </Flex>

              <Grid
                gridTemplateColumns={{
                  base: "repeat (1,1fr)",
                  lg: "repeat(4 ,1fr) ",
                  sm: "repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                }}
                gap={"0.9rem"}
                m={"auto"}
                mt={{ lg: "0rem", sm: "1rem", md: "1rem" }}
              >
                {checked ? (
                  <>
                    {filteredBrandData &&
                      filteredBrandData?.map((prod) => (
                        <SingleCard key={prod.id} prod={prod} />
                      ))}
                  </>
                ) : (
                  <>
                    {products &&
                      products?.map((prod) => (
                        <SingleCard key={prod.id} prod={prod} />
                      ))}
                  </>
                )}
              </Grid>
            </div>
            <Box>
              <Pagination
                handlePage={handlePage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </Box>
          </Box>
        </Flex>

        {/* </div> */}
      </Box>
    </div>
  );
};

export default Product;
