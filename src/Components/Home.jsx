import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Make Food for <br />
            <Text as={"span"} color={"green.400"}>
              your loved ones{" "}
              <span aria-label="img" role="img">
                ❤️❤️
              </span>
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            <strong>TheMealDB</strong> is a React project to provide a free
            recipes online in the hope that users would build yummy food from
            recipe provided in <strong> Meal Section </strong>.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              <Link to="/meal">Get Started</Link>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
