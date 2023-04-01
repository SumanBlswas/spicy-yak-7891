import React, { useRef, useState } from "react";
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

const Account = () => {
  const nameRef = useRef("John Doe");
  const emailRef = useRef("johndoe@example.com");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const toast = useToast();
  const [name, setName] = useState(nameRef.current.value);
  const [email, setEmail] = useState(emailRef.current.value);

  const handleSaveChanges = () => {
    const newName = nameRef.current.value;
    const newEmail = emailRef.current.value;
    const newPassword = passwordRef.current.value;
    const newConfirmPassword = confirmPasswordRef.current.value;

    if (newName.trim() === "" || newEmail.trim() === "") {
      toast({
        title: "Please enter your name and email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (newPassword !== newConfirmPassword) {
      toast({
        title: "Passwords do not match.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // TODO: implement logic to save changes
    nameRef.current.value = newName;
    emailRef.current.value = newEmail;
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
    setName(newName);
    setEmail(newEmail);
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

  return (
    <Flex
      direction="column"
      alignItems="center"
      pt={["30%", "20%", "15%", "10%"]}
    >
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
              ref={nameRef}
              defaultValue={nameRef.current.value}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              ref={emailRef}
              defaultValue={emailRef.current.value}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input ref={passwordRef} type="password" placeholder="Password" />
            <Input
              ref={confirmPasswordRef}
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
