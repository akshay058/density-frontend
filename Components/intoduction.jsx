import { Box, Flex, Text, chakra } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <Flex justifyContent={["left", "left", "left", "center", "center"]}>
      <Box width={["100%", "100%", "100%", "48%", "48%"]} padding={"15px"}>
        <Text fontSize={"20px"} lineHeight={"32px"} color={"black"} mb={"17px"}>
          Hey all,
        </Text>

        <Text fontSize={"20px"} lineHeight={"32px"} color={"black"} mb={"17px"}>
          I have decided to make a redesign and animation for the Ahead app.
          Please review and happy to read your feedback!
        </Text>

        <Text fontSize={"20px"} lineHeight={"32px"} color={"black"}>
          Design — Figma
        </Text>
        <Text fontSize={"20px"} lineHeight={"32px"} color={"black"}>
          Illustrations — Adobe Illustrator
        </Text>
        <Text fontSize={"20px"} lineHeight={"32px"} color={"black"} mb={"20px"}>
          Animation — Adobe After Effects
        </Text>

        <Text fontSize={"20px"} lineHeight={"32px"} color={"black"} mb={"4px"}>
          ************{" "}
        </Text>
        <Text fontSize={"20px"} lineHeight={"32px"} color={"black"} mb={"4px"}>
          💌 I am open to new projects!{" "}
          <chakra.span
            as="span"
            textDecoration="underline"
            _hover={{ color: "pink.500", textDecoration: "underline" }}
            transition="color 0.3s"
          >
            jainakshay058@gmail.com
          </chakra.span>
        </Text>
        <Text fontSize={"20px"} lineHeight={"32px"} color={"black"} mb={"8px"}>
          ************{" "}
        </Text>

        <Text fontSize={"20px"} lineHeight={"32px"} color={"black"} mb={"4px"}>
          <chakra.span
            as="span"
            textDecoration="underline"
            _hover={{ color: "pink.500", textDecoration: "underline" }}
            transition="color 0.3s"
          >
            Instagram
          </chakra.span>{" "}
          |{" "}
          <chakra.span
            as="span"
            textDecoration="underline"
            _hover={{ color: "pink.500", textDecoration: "underline" }}
            transition="color 0.3s"
          >
            <a href="https://www.linkedin.com/in/akshay-jain-99085a76/">
              Linkedin
            </a>
          </chakra.span>{" "}
          |{" "}
          <chakra.span
            as="span"
            textDecoration="underline"
            _hover={{ color: "pink.500", textDecoration: "underline" }}
            transition="color 0.3s"
          >
            UI8
          </chakra.span>
        </Text>
      </Box>
    </Flex>
  );
};

export default Introduction;
