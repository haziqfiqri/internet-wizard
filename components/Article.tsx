"use client";

import { Box, Text, Flex, Image, Link, Icon, Skeleton } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { getArticles } from "@/sanity/sanity-utils";
import { useEffect, useState } from "react";
import { Article } from "@/types/Article";
import moment from "moment";

export default function Article() {
  const [isLoading, setLoading] = useState(true);
  const [blogArticles, setBlogArticles] = useState<Article[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchArticles() {
      const articles = await getArticles();
      const articlesByLatestDate = articles.sort(
        (a: any, b: any) =>
          new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
      );

      setBlogArticles(articlesByLatestDate);
    }

    fetchArticles();
  }, []);

  return (
    <Box bg="black">
      <Flex maxW="container.sm" mx="auto" py={2} px={4} pb="35px">
        <Box>
          <Text fontSize="14px" fontWeight="medium" color="#ffffff" pb="3px">
            Digital Garden
          </Text>

          {isLoading || blogArticles.length === 0 ? (
            <Box mt={7}>
              {Array.from({ length: 3 }).map((_, index) => (
                <Box mt={7} key={index}>
                  <Flex>
                    <Skeleton borderRadius="8px" height="80px" width="110px" />
                    <Box pl="10px">
                      <Skeleton height="20px" width="120px" mb="4px" />
                      <Skeleton height="20px" width="220px" mb="4px" />
                      <Skeleton height="20px" width="90px" />
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Box>
          ) : (
            blogArticles.slice(0, 3).map((article) => (
              <Box mt={7} key={article._id}>
                <Flex>
                  <Image
                    // src="https://picsum.photos/110/80"
                    src={article.image}
                    alt="article"
                    objectFit="contain"
                    maxH="80px"
                    maxW="110px"
                    borderRadius="8px"
                  />
                  <Box pl="10px">
                    <Link
                      href={""}
                      isExternal
                      color="#ffffff"
                      fontSize="14px"
                      fontWeight="medium"
                    >
                      {article.title}
                      <Icon
                        as={FiArrowUpRight}
                        color="#ffffff"
                        ml="3px"
                        fontSize="16px"
                      />
                    </Link>

                    <Text
                      pb="3px"
                      fontSize="14px"
                      fontWeight="medium"
                      color="#a3a3a3"
                    >
                      {moment(article._createdAt).fromNow()}
                    </Text>

                    <Text fontSize="14px" fontWeight="medium" color="#7f7f7f">
                      5 mins read
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))
          )}
        </Box>
      </Flex>
    </Box>
  );
}
