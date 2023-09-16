"use client";

import { Box, Flex, Link, Text, Icon, Badge } from "@chakra-ui/react";
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
    position: string;
  }> = [
    {
      company: "Photobook",
      link: "https://www.photobook.com.my/",
      startDate: "Apr 2023",
      endDate: "present",
      title: "L3 Software Engineer",
      description:
        "Donning two hats currently with orchestration team. Leveraging software engineering and cloud orchestrating.",
      stacks: ["Laravel", "PHP", "ReactJs", "AWS Cloud", "SQL"],
      position: "full-time",
    },
    {
      company: "Clazzy",
      link: "https://www.clazzy.my/",
      startDate: "Jun 2023",
      endDate: "Sep 2023",
      title: "L3 Software Engineer",
      description:
        "A distinguished endeavor with the satellite team on a paramount outsourced recruitment platform project for Petronas.",
      stacks: ["Loopback", "TypeScript", "VueJs", "Quasar", "Tanstack"],
      position: "part-time",
    },
    {
      company: "Carsome",
      link: "https://www.carsome.my/",
      startDate: "Nov 2021",
      endDate: "Apr 2023",
      title: "L1 Software Engineer",
      description:
        "Part of the core team to pioneered microservice for a seamless translations across pillars. Bolstered inter-departmental collaboration and 3rd party integration.",
      stacks: ["NestJs", "TypeScript", "VueJs", "AWS Cloud", "NoSQL"],
      position: "full-time",
    },
    {
      company: "Hatio",
      link: "https://www.hatiolab.com/",
      startDate: "Apr 2021",
      endDate: "Jul 2021",
      title: "L1 Software Engineer",
      description:
        "A brief yet enjoyable experience that exposed me to the tech field. I worked closely with a hand-picked team of managers, engineers, customer supports and testers.",
      stacks: ["NodeJs", "TypeScript", "PolymerJs", "Docker", "GraphQL"],
      position: "full-time",
    },
    // {
    //   company: "Fragbit Studio",
    //   link: "https://www.hatiolab.com/",
    //   startDate: "Apr 2021",
    //   endDate: "Jul 2021",
    //   title: "L1 Software Engineer",
    //   description:
    //     "A brief yet enjoyable experience that exposed me to the tech field. I worked closely with a hand-picked team of engineers, supports and testers.",
    //   stacks: ["NodeJs", "TypeScript", "PolymerJs", "Docker", "GraphQL"],
    //   position: "internship",
    // },
  ];

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
            Career Journey
          </Text>
          {workExperiences.map((experience, index) => (
            <Box mt={7} key={index}>
              {/* TODO: make two cols for size > sm */}
              {/* <Flex flexDirection={["column", "column", "column", "row"]}>
                <Box maxW={["30%"]}> */}
              <Text fontSize="14px" fontWeight="medium" color="#a3a3a3">
                {experience.startDate} - {experience.endDate}{" "}
                <Badge ml="2" fontSize={10} variant={"solid"}>
                  {experience.position}
                </Badge>
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
