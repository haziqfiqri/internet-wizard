"use client";

import { Box, Flex, Link, Text, Icon } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

function Work() {
  const workExperiences: Array<{
    company: string;
    link: string;
    title: string;
    startDate: string | number;
    endDate: string | number;
    description: string;
    stacks: Array<string>;
  }> = [
    {
      company: "Photobook",
      link: "https://www.photobook.com.my/",
      startDate: 2023,
      endDate: "present",
      title: "L3 Software Engineer",
      description:
        "Building something awesome in the orchestration team. Lately I've been thinkering and getting my hands dirty with cloud.",
      stacks: ["Laravel", "PHP", "ReactJs", "AWS Cloud", "SQL"],
    },
    {
      company: "Carsome",
      link: "https://www.carsome.my/",
      startDate: 2021,
      endDate: 2023,
      title: "L1 Software Engineer",
      description:
        "Part of the core team to pioneered microservice for a seamless translations across pillars. Bolstered inter-departmental collaboration and 3rd party integration.",
      stacks: ["NestJs", "TypeScript", "VueJs", "AWS Cloud", "NoSQL"],
    },
  ];

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
            Career Journey
          </Text>
          {workExperiences.map((experience, index) => (
            <Box mt={7} key={index}>
              {/* TODO: make two cols for size > sm */}
              {/* <Flex flexDirection={["column", "column", "column", "row"]}>
                <Box maxW={["30%"]}> */}
              <Text fontSize="14px" fontWeight="medium" color="#a3a3a3">
                {experience.startDate} - {experience.endDate}
              </Text>
              {/* </Box>
                <Box maxW={["70%", "100%"]}> */}
              <Link
                href={experience.link}
                isExternal
                color="#ffffff"
                fontSize="14px"
                fontWeight="medium"
              >
                {experience.title} – {experience.company}
                <Icon
                  as={FiArrowUpRight}
                  color="#ffffff"
                  ml="3px"
                  fontSize="16px"
                />
              </Link>

              <Text mt={2} fontSize="14px" fontWeight="medium" color="#8a8a8a">
                {experience.description}
              </Text>
              <Text mt={2} fontSize="14px" color="#a3a3a3">
                {experience.stacks.join(" • ")}
              </Text>
              {/* </Box> */}
              {/* </Flex> */}
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}

export default Work;
