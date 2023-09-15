"use client";

import { Flex, Box, Text, RadioGroup } from "@chakra-ui/react";

function Form() {
  return (
    <Box bg="black">
      <Flex
        maxW="container.sm"
        mx="auto"
        py={2}
        px={4}
        align="center"
        pb="35px"
      >
        <Box>
          <Text fontSize="14px" fontWeight="medium" color="#ffffff" pb="3px">
            Services Offer
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="#a3a3a3">
            We are a dedicated team of specialist in our respective fields that
            is passionate about delivering expectional work. Let&apos;s paint a
            new digital landscape for your business.
          </Text>
          <RadioGroup>
            <div></div>
          </RadioGroup>
        </Box>
      </Flex>
    </Box>
  );
}

export default Form;
