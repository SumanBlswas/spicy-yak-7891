import React, { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import axios from 'axios';
  
  export default function Singleproductpage() {

    const {id}  = useParams();
  // console.log(id);
  const [data, setData] = useState({});
  const navigate = useNavigate()

  useEffect(()=>{
    axios(`https://puce-busy-zebra.cyclic.app/MensData/${id}`)
    .then((res)=>{
      console.log(res)
        setData(res.data) 
    })
},[id])

  const {
    brand,
    category,
    discount,
    images,
    keyfeatures,
    mrp,
    title, 
    discounted_price,
    save,
    warranty
    } = data

    let Mrp = +mrp
    let Save = ((Mrp * save)/100).toFixed(0);

    const handleClick = async () => {
      try{
        let res = await axios.post("https://maroon-sea-urchin-tam.cyclic.app/cart/add",data,{
          headers: {
            Authorization: localStorage.getItem('token'),
          }
        })
        console.log(res);

      }catch(err){
        console.log(err);
      }
    }
return (
  <Container maxW={'7xl'}>
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 18, md: 24 }}>
      <Flex>
        <Image
          rounded={'md'}

          alt={'product image'}
          src={
           images

          }
          fit={'fit'}
          align={'center'}
          w={'100%'}
          h={{ base: '100%', sm: '400px', lg: '500px' }}
        />
      </Flex>
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={'header'}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
           {brand} {category}
          </Heading>
          <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={400}
            mt={2}
            display={'flex'}
            fontSize={'2xl'}>
          Deal Price: 
          <Text
            color={useColorModeValue('#003380', 'gray.400')}
            fontWeight={500}
            mt={-1}
            ml={1}
            fontSize={'3xl'}>
          ₹{ discounted_price}.00
          </Text>
          </Text>
          <Text fontSize="m"  color={useColorModeValue('gray.800', 'white')} display={'flex'} >
          MRP: ₹
          <Text fontSize="m" textDecoration={'line-through'} color={useColorModeValue('gray.800', 'white')} >
          {(discounted_price*3).toFixed(2)}
          {/* {1000- 10%} */}
          </Text>
          </Text>
          <Text fontSize="m"  color={useColorModeValue('green', 'white')} >
         You Save: ₹{discounted_price *2}
          
          </Text>
        </Box>

        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={'column'}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.200', 'gray.600')}
            />
          }>
          <VStack spacing={{ base: 4, sm: 6 }}>
            <Text
            //   color={}
              fontSize={'2xl'}
              fontWeight={'300'}>
              {title || "Redmi 10A 32 GB, 3 GB RAM, Charcoal Black, Mobile Phone(492850145)" }
            </Text>
            <Text fontSize={'lg'} textAlign={'left'}  color={useColorModeValue('gray.500', 'gray.400')} >
            <b>Warranty</b>: 3 Months manufacturer warranty
            </Text>
          </VStack>
          <Box>
            <Text
              fontSize={{ base: '16px', lg: '18px' }}
              color={useColorModeValue('#003380', 'yellow.300')}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}>
              Features
            </Text>

            <SimpleGrid >
              <List spacing={2}>
                <ListItem >STRECHABLE</ListItem>
               
              </List>
             
            </SimpleGrid>
          </Box>
          <Box>
            <Text
              fontSize={{ base: '16px', lg: '18px' }}
              color={useColorModeValue('#003380', 'yellow.300')}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}>
              Product Details
            </Text>

            <List spacing={2}>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Brand:
                </Text>{' '}
               {brand}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                 Category:
                </Text>{' '}
                {category}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Emi:
                </Text>{' '}
          
                ₹{(discounted_price/12).toFixed(2)}/month
              </ListItem>
            
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Available color:
                </Text>{' '}
                Black
              </ListItem>
              
            </List>
          </Box>
            <Text>Items are eligible for return within 7 Days of Delivery.</Text>
        </Stack>

        <Button
          rounded={'none'}
          w={'full'}
          mt={8}
          size={'lg'}
          py={'7'}
          onClick={()=>navigate(`/cart/${id}`)}
          bg={useColorModeValue('#99cc33', 'gray.50')}
          color={useColorModeValue('white', 'gray.900')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            bg: "#003380",
            boxShadow: 'lg',
          }} onClick={handleClick}>
          Add to cart
        </Button>

        <Stack direction="row" alignItems="center" justifyContent={'center'}>
          <MdLocalShipping />
          <Text>2-3 business days delivery</Text>
        </Stack>
      </Stack>
    </SimpleGrid>
  </Container>
);
  }

// export default Singleproductpage