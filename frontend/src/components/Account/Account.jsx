import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const Account = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState([]);

  const toast = useToast();

  const handleSaveChanges = async () => {
    if (name.trim() === "" || email.trim() === "") {
      toast({
        title: "Please enter your name and email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    let payload = {
      name,
      email,
      age: Number(age),
      gender,
      password,
    };

    try {
      let data = await axios.patch(
        `https://maroon-sea-urchin-tam.cyclic.app/users/account_update`,
        payload
      );
      if (data.status === 200) {
        toast({
          title: "Changes saved.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Wrong Info",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteAccount = () => {
    onOpen();
  };

  const handleConfirmDelete = async () => {
    onClose();
    //account_delete
    try {
      let data = await axios.delete(
        `https://maroon-sea-urchin-tam.cyclic.app/users/account_delete`
      );
      if (data.status === 200) {
        toast({
          title: "Account deleted.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Can't Delete",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const get = async () => {
    try {
      let data1 = await axios.get(
        "https://maroon-sea-urchin-tam.cyclic.app/users/account",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setData(data1.data);
      setName(data1.data[0].name);
      setEmail(data1.data[0].email);
      setAge(data1.data[0].age);
      setGender(data1.data[0].gender);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  useEffect(() => {
    get();
  }, []);

  const [name, setName] = useState(data.length > 0 ? data[0].name : "");
  const [email, setEmail] = useState(data.length > 0 ? data[0].email : "");
  const [age, setAge] = useState(data.length > 0 ? data[0].age : "");
  const [gender, setGender] = useState(data.length > 0 ? data[0].gender : "");

  return (
    <Flex direction="column" alignItems="center" pt={"8%"}>
      {data.length > 0 && (
        <>
          <Avatar
            size="xl"
            name={name}
            src={`https://ui-avatars.com/api/?name=${name}&background=random&color=fff`}
            my={8}
          />

          <Stack spacing={8} w="full" maxW="md">
            <Box>
              <Heading size="md">Personal Information</Heading>
              <Divider my={4} />
              <Stack spacing={4}>
                <Input
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
                <Input
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <Input
                  defaultValue={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                />
                <Input
                  defaultValue={gender}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="Gender"
                />
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                />
              </Stack>
            </Box>
            {/* <Box>
              <Heading size="md">Billing Information</Heading>
              <Divider my={4} />
              <Text>No billing information on file.</Text>
            </Box> */}
            <Box>
              <Flex justify={"space-around"} flexWrap={"wrap"} gap={6}>
                <Button
                  colorScheme="green"
                  p={"20px"}
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </Button>
                <Box>
                  <Button colorScheme="red" onClick={handleDeleteAccount}>
                    Delete Account
                  </Button>
                </Box>
              </Flex>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Delete Account</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>Are you sure you want to delete your account?</Text>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="gray" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="red" onClick={handleConfirmDelete}>
                      Delete
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Stack>
        </>
      )}
    </Flex>
  );
};

export default Account;
