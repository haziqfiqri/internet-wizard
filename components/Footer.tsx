"use client";

import {
  Box,
  Text,
  Flex,
  Link,
  useToast,
  useClipboard,
  Icon,
  Tooltip,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { PiSpotifyLogoDuotone } from "react-icons/pi";
import useSWR from "swr";

function Footer() {
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/spotify", fetcher, {
    revalidateIfStale: true,
  });

  const textToCopy = "_haziq";
  const { onCopy } = useClipboard(textToCopy);
  const toast = useToast();

  const socialLinks: Array<{
    name: string;
    url: string | undefined;
    isExternal: boolean;
    handle: string;
  }> = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/haziqfiqri/",
      isExternal: true,
      handle: "@haziqfiqri",
    },
    {
      name: "Discord",
      url: undefined,
      isExternal: false,
      handle: "_haziq",
    },
  ];

  const handleCopyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onCopy();
    toast({
      title: "Copied",
      description: "Discord id copied to clipboard!",
      status: "success",
      duration: 2000, // duration of toast in milliseconds, `null` means infinite
      isClosable: true,
    });
  };

  return (
    <Box bg="black">
      <Flex maxW="container.sm" mx="auto" py={2} px={4} align="center">
        <Box>
          <Text fontSize="14px" fontWeight="medium" color="#ffffff" pb="3px">
            Internet Links
          </Text>
          <Box mt={7}>
            {socialLinks.map((link, index) => (
              <Box key={index} mt={2}>
                <Text fontSize="14px" fontWeight="medium" color="#a3a3a3">
                  {link.name}
                </Text>
                {link.isExternal ? (
                  <Link
                    href={link.url}
                    isExternal
                    color="#ffffff"
                    fontSize="14px"
                    fontWeight="medium"
                  >
                    {link.handle}
                    <Icon
                      as={FiArrowUpRight}
                      color="#ffffff"
                      ml="3px"
                      fontSize="16px"
                    />
                  </Link>
                ) : (
                  <Tooltip label={link.handle} aria-label={link.handle}>
                    <Link
                      fontSize="14px"
                      color="#ffffff"
                      onClick={handleCopyClick}
                      pr="8px"
                      href="/"
                    >
                      {link.handle}
                      <Icon
                        as={FiArrowUpRight}
                        color="#ffffff"
                        ml="3px"
                        fontSize="16px"
                      />
                    </Link>
                  </Tooltip>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
      <Flex
        display="flex"
        flexDirection="row"
        justifyContent="center"
        align="center"
        pt="40px"
        pb="40px"
        w="100%"
      >
        <Box textAlign="center">
          <Stack display="flex" flexDirection="row">
            <Stack display="flex" flexDirection="row">
              <Text fontSize="14px" fontWeight="bold" color="#ffffff">
                {data?.data?.isPlaying ? data?.data?.artist : "He's Sleeping"}
              </Text>
              {"-"}
              <Text fontSize="14px" fontWeight="medium" color="#a3a3a3">
                - {data?.data?.isPlaying ? data?.data?.title : "Not Listening"}
              </Text>
            </Stack>
            <Icon
              as={PiSpotifyLogoDuotone}
              color={data?.data?.isPlaying ? "green" : "#ffffff"}
              fontSize="24px"
            />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
