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
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

function Footer() {
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
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/_haziqfiqri",
    //   isExternal: true,
    //   handle: "@_haziqfiqri",
    // },
    // {
    //   name: "Instagram",
    //   url: "https://instagram.com/_haziqfiqri",
    //   isExternal: true,
    //   handle: "@_haziqfiqri",
    // },
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
      <Flex
        maxW="container.sm"
        mx="auto"
        py={2}
        px={4}
        align="center"
        pb="160px"
      >
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
    </Box>
  );
}

export default Footer;
