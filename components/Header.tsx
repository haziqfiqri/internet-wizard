"use client";

import { Box, Flex, Heading, Button, Image, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bg="black">
      <Flex
        bg="transparent"
        maxW="container.xl"
        mx="auto"
        py={4}
        px={4}
        align="center"
      >
        <Image
          src="/spooky.png"
          alt="logo"
          boxSize="32px"
          objectFit="contain"
          filter="invert(1)"
        />

        <Spacer />

        <Button
          size="sm"
          bg="gray.900"
          color="green.400"
          _hover={{ color: "green.400" }}
          fontSize="10px"
          fontWeight="bold"
          borderRadius="8px"
          textTransform="uppercase"
        >
          online
        </Button>
        {/* <Button
          size="sm"
          bg="gray.900"
          color="white"
          _hover={{ color: "gray.300" }}
          fontSize="10px"
          fontWeight="bold"
          borderRadius="8px"
          textTransform="uppercase"
        >
          offline
        </Button> */}
      </Flex>
    </Box>
  );
}
