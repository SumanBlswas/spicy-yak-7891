import React, { useState } from 'react'
import { FormControl, Input, Heading, FormLabel, Button, useToast, Flex, Box, Image, Stack, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/Admin/action';

const AddProducts = () => {
  const dispatch = useDispatch();
  const initForm = { title: '', brand: '', img1: '', price: '', size: '', love_count:'',rating:'', category: '' }
  const toast = useToast();
  // If we want to implement isRequired to only specific input then we have to create single FormControl in particular element or input & have to use single state for their values as below:- 
  // const [isNameInvalid,setIsNameInvalid]=false;
  // const [isBrandInvalid,setIsBrandInvalid]=false;
  // const [isImageInvalid,setIsImageInvalid]=false;
  // const [isOriginialPriceInvalid,setIsOriginialPriceInvalid]=false;
  // const [isDiscountPriceInvalid,setIsDiscountPriceInvalid]=false;
  // const [isCategoryInvalid,setIsCategoryInvalid]=false;

  const [form, setForm] = useState(initForm);
  //const price = form.originalPrice.split('-');
  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // const discount = form.originalPrice - form.discountPrice;
    // const discountPercent = discount / form.originalPrice * 100;
    // form.originalPrice = `${form.originalPrice}-${discountPercent.toFixed(2)}%`
    try {
      dispatch(addProduct(form))
      toast({
        title: 'Product Added',
        description: `${form.title} has been added successfully`,
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while adding',
        description: `${form.title} has not added`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    setForm(initForm)
  }

  return (
    <div>
      <Heading size='md'>Add Products</Heading>
      <Flex>
        <Box mr={'5'}>
          <form onSubmit={formSubmitHandler}>
            <FormControl isRequired>
              <FormLabel>Product Title</FormLabel>
              <Input type='text' name='title' background='#fff' htmlSize={45} width='auto' onChange={formChangeHandler} value={form.description} />
              <FormLabel>Product Brand</FormLabel>
              <Input type='text' name='brand' background='#fff' onChange={formChangeHandler} value={form.brand} />
              <FormLabel>Product Image Link</FormLabel>
              <Input type='url' name='img1' background='#fff' onChange={formChangeHandler} value={form.img1} />
              <FormLabel>Product Price</FormLabel>
              <Input type='text' name='price' background='#fff' onChange={formChangeHandler} value={form.price} />
              <FormLabel>Product Size</FormLabel>
              <Input type='text' name='size' background='#fff' onChange={formChangeHandler} value={form.size} />
              <FormLabel>Product Love_count</FormLabel>
              <Input type='text' name='love_count' background='#fff' onChange={formChangeHandler} value={form.love_count} />
              <FormLabel>Product Rating</FormLabel>
              <Input type='text' name='rating' background='#fff' onChange={formChangeHandler} value={form.rating} />
              <FormLabel>Product Category</FormLabel>
              <Input type='text' name='category' background='#fff' onChange={formChangeHandler} value={form.category} />
              <Button type='submit' colorScheme='teal' marginTop='2'>Add</Button>
            </FormControl>
          </form>
        </Box>
        <Flex flexDir={'column'} h={'60vh'} alignItems={'center'} justifyContent='center' textAlign='center' bg='white' w={'full'} maxW={'300px'} role={'group'} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1}>
          <Flex rounded={'lg'} justifyContent={'center'} alignItems={'center'}  width={'16vw'} textAlign={'center'} pos={'relative'} _after={{transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5,   left: 0,   filter: 'blur(15px)',   zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
           {form.img1 && <Image rounded={'lg'} boxSize={250} objectFit={'cover'} src={form.img1} />}
          </Flex>
          <Stack align={'center'}>
            {form.title && <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>{form.title}</Heading>}
            {form.price && <Heading fontSize={'md'} fontFamily={'body'} color={'blue.200'} fontWeight={400}>{form.price}</Heading>}
            {form.category && <Heading fontSize={'md'} fontFamily={'body'} color={'blue.200'} fontWeight={400}>{form.category}</Heading>}
          </Stack>
        </Flex>
      </Flex>
    </div>
  )
}

export default AddProducts;