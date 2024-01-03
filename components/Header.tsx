"use client";

import {
  Box,
  Flex,
  Heading,
  Button,
  Image,
  Stack,
  Spacer,
  useColorMode,
  PopoverTrigger,
  Popover,
  IconButton,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  BsSun,
  BsMoonStarsFill,
  BsThreeDotsVertical,
  BsChatSquareQuote,
  BsPlus,
  BsPencil,
  BsUniversalAccess,
} from "react-icons/bs";
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from "react-icons/ri";
import {
  FiArrowUpRight,
  FiMoreVertical,
  FiHome,
  FiPlus,
  FiBox,
  FiTerminal,
  FiFeather,
  FiAperture,
  FiCamera,
} from "react-icons/fi";
import { GrGallery } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
import Link from "next/link";
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
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
        <Button
          size="sm"
          bg="gray.900"
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          _focus={{ boxShadow: "none" }}
          w="fit-content"
        >
          {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
        </Button>
        <Spacer />

        <Menu>
          <MenuButton
            size="sm"
            as={IconButton}
            bg="gray.900"
            aria-label="Options"
            icon={<FiMoreVertical />}
          />
          <MenuList bg="gray.900">
            <Link href="/">
              <MenuItem
                bg="gray.900"
                icon={<FiHome />}
                command="⌘Q"
                _hover={{ color: "gray.300" }}
              >
                Go to home
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem
                bg="gray.900"
                icon={<FiPlus />}
                command="⌘Q"
                _hover={{ color: "gray.300" }}
              >
                Quote service
              </MenuItem>
            </Link>
            <Link href="/experience">
              <MenuItem
                bg="gray.900"
                icon={<FiBox />}
                command="⌘W"
                _hover={{ color: "gray.300" }}
              >
                Career history
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem
                bg="gray.900"
                icon={<FiFeather />}
                command="⌘⇧D"
                _hover={{ color: "gray.300" }}
              >
                Visit blog
              </MenuItem>
            </Link>
            <Link href="/gallery">
              <MenuItem
                bg="gray.900"
                icon={<TfiGallery />}
                command="⌘L"
                _hover={{ color: "gray.300" }}
              >
                View gallery
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem
                bg="gray.900"
                icon={<FiTerminal />}
                command="⌘L"
                _hover={{ color: "gray.300" }}
              >
                Open shell
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
