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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState([]);
  const toast = useToast();

  const handleSaveChanges = () => {
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
    toast({
      title: "Changes saved.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteAccount = () => {
    onOpen();
  };

  const handleConfirmDelete = () => {
    onClose();
    // TODO: implement logic to delete account
    toast({
      title: "Account deleted.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
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
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  useEffect(() => {
    get();
  }, []);

  const handleNameChange = (event) => {
    if (data.length > 0) {
      setName(data[0].name);
    } else {
      setName(event.target.value);
    }
  };

  const handleEmailChange = (event) => {
    if (data.length > 0) {
      setEmail(data[0].email);
    } else {
      setEmail(event.target.value);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Flex direction="column" alignItems="center" pt={"8%"}>
      <Avatar size="xl" name={name} src="https://bit.ly/broken-link" my={8} />
      <Stack spacing={8} w="full" maxW="md">
        <Box>
          <Heading size="md">Personal Information</Heading>
          <Divider my={4} />
          <Stack spacing={4}>
            <Input
              value={name}
              onChange={handleNameChange}
              placeholder="Full Name"
            />
            <Input
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
            <Input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
            <Input
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              type="password"
              placeholder="Confirm Password"
            />
          </Stack>
        </Box>
        <Box>
          <Heading size="md">Billing Information</Heading>
          <Divider my={4} />
          <Text>No billing information on file.</Text>
        </Box>
        <Box>
          <Flex justify={"space-around"} flexWrap={"wrap"} gap={6}>
            <Button colorScheme="green" p={"20px"} onClick={handleSaveChanges}>
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
    </Flex>
  );
};

export default Account;
