import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "cyan.100",
                zIndex: -1,
              }}
            >
              Thank you !
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Visit Us Again
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The project is built to showcase my tech skills using{" "}
            <strong> ReactJS</strong> and <strong>Chakra UI</strong> . Hopefully
            you like it. If you have any message for me please reach me.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "#404258",
              }}
              
            >
              <Link href="https://github.com/SouravBandyopadhyay" isExternal>
           
                Github
              </Link>
            </Button>{" "}
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "#404258",
              }}
            >
              <Link href="https://www.linkedin.com/in/souravbandyopadhyay" isExternal>
           
          LinkedIn
         </Link>
            </Button>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "#404258",
              }}
            >
              <Link href="https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view?usp=sharing" isExternal>
           
        Resume
         </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <iframe
          title="food_illlustrtion"
          objectFit={"cover"}
          src="https://embed.lottiefiles.com/animation/4762"
        ></iframe>
      </Flex>
    </Stack>
  );
}
