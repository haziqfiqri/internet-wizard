"use client";

import { Box, Flex, Text, Image, Skeleton } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const srces = [
  "https://source.unsplash.com/user/wsanter",
  "https://source.unsplash.com/user/zorzf",
  "https://source.unsplash.com/user/f_meloni",
  "https://source.unsplash.com/user/ideasboom",
  "https://source.unsplash.com/user/jsilll",
  "https://source.unsplash.com/user/kopidanny",
  "https://source.unsplash.com/user/drewjohncollins",
  "https://source.unsplash.com/user/infernisvox",
  "https://source.unsplash.com/user/tom__rmn",
];

function Masonry() {
  const [urls, setUrls] = useState<string[]>([]);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchImages = async () => {
      const newUrls = await Promise.all(
        srces.map((src) => fetch(src).then((res) => res.url))
      );
      setUrls(newUrls);
      setLoaded(
        newUrls.reduce((acc: Record<string, boolean>, src) => {
          acc[src] = false;
          return acc;
        }, {})
      );
    };

    fetchImages();
  }, []);

  const handleLoad = (src: string) => {
    setLoaded((prevState) => ({
      ...prevState,
      [src]: true,
    }));
  };

  return (
    <Box bg="black">
      <Flex
        maxW="container.sm"
        mx="auto"
        py={10}
        px={4}
        align="center"
        pb="35px"
      >
        <Box>
          <Text fontSize="20px" fontWeight="medium" color="#ffffff" pb="3px">
            Unsplash wallpapers
          </Text>
          <Box
            padding={4}
            w="100%"
            maxW="900px"
            mx="auto"
            bg="black"
            px={0}
            py={0}
            mt={7}
            sx={{ columnCount: [2, 3, 3], columnGap: "8px" }}
          >
            {urls.map((src) => (
              <Skeleton isLoaded={loaded[src]} key={src}>
                <Image
                  w="100%"
                  borderRadius="xl"
                  mb={2}
                  src={src}
                  alt="Alt"
                  onLoad={() => handleLoad(src)}
                />
              </Skeleton>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Masonry;
