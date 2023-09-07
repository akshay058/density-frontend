"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaFacebookF, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      mt={"50px"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={2}
        >
          {" "}
          <Box>
            <Text
              mt={"-10px"}
              fontSize={"30px"}
              fontWeight={"bold"}
              color={"#0d0c22"}
            >
              𝓭𝓻𝓲𝓫𝓫𝓫𝓵𝓮
            </Text>
          </Box>
          <Box as="a" href={"#"} fontWeight={"bold"}>
            For designers
          </Box>
          <Box as="a" href={"#"} fontWeight={"bold"}>
            Hire Talent
          </Box>
          <Box as="a" href={"#"} fontWeight={"bold"}>
            Inspiration
          </Box>
          <Box as="a" href={"#"} fontWeight={"bold"}>
            Advertising
          </Box>
          <Box as="a" href={"#"}>
            ©2023 Dribble &nbsp; &nbsp;Terms &nbsp; &nbsp; Privacy
          </Box>
          <Box as="a" href={"#"} fontWeight={"bold"}>
            About
          </Box>
          <Box as="a" href={"#"} fontWeight={"bold"}>
            Careers
          </Box>
          <Box as="a" href={"#"} fontWeight={"bold"}>
            Support
          </Box>
          <Box as="a" href={"#"} fontWeight={"bold"}>
            <FaTwitter />
          </Box>
          <span></span>
          <Box as="a" href={"#"} fontWeight={"bold"}>
            <FaFacebookF />
          </Box>
          <Box as="a" href={"#"} fontWeight={"bold"}>
            <FaInstagramSquare />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
