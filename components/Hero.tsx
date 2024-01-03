"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Hero() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box bg="black">
      <Flex
        maxW="container.sm"
        mx="auto"
        py={2}
        px={4}
        align="center"
        pt="35px"
        pb="35px"
      >
        <Image
          src="/killua.jpeg" // Adjust this path to your image in the public folder
          alt="Avatar"
          boxSize={["80px", "102px"]}
          borderRadius="full"
          objectFit="contain"
          mr="20px"
          ml="20px"
        />
        <Box>
          <Text fontSize="20px" fontWeight="medium" color="#ffffff">
            Haziq
          </Text>
          <Text fontSize="14px" color="#a3a3a3" fontWeight="medium" mb="-4px">
            Internet Wizard
          </Text>
          <Text fontSize="13px" color="#7f7f7f">
            Malaysia,{" "}
            {currentTime
              ? currentTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : ""}
          </Text>
        </Box>
      </Flex>

      <Flex
        maxW="container.sm"
        mx="auto"
        py={2}
        px={4}
        align="center"
        pb="45px"
      >
        <Box>
          <Text fontSize="14px" fontWeight="medium" color="#ffffff" pb="3px">
            Introduction
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="#a3a3a3">
            I&apos;m specialize in crafting applications that seamlessly bridge
            the gap between cutting-edge technology and your business needs,
            fostering growth and innovation.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;
