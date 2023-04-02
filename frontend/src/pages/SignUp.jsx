import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  // Link,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  let handleSubmit = async () => {
    let payload = {
      name,
      email,
      gender,
      password,
      age: Number(age),
    };
    console.log(payload);
    const sendData = await axios.post(
      `https://maroon-sea-urchin-tam.cyclic.app/users/register`,
      payload
    );
    if (sendData.status === 200) {
      toast({
        title: "Account created.",
        description: `Hello! ${name}. We've created your account Successfully.`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Flex
      minH={"100vh"}
      // minW={"1000vh"}
      // marginTop={"200px"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading marginTop={"70px"} fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          // width={"500px"}
          // minW={"100vh"}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    width={"400px"}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="gender" isRequired>
              <FormLabel>Gender</FormLabel>
              <Input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </FormControl>
            <FormControl id="age" isRequired>
              <FormLabel>Age</FormLabel>
              <Input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#99cc33"}
                color={"white"}
                _hover={{
                  bg: "#99cc33",
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link to="/login" style={{color:"#99cc33", fontSize: "17px", textDecorationLine : "underline"}}  >Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
