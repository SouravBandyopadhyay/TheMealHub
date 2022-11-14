import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Input,
    IconButton,
    useColorModeValue
  } from "@chakra-ui/react";
  import { BiMailSend } from "react-icons/bi";
  import { MdFastfood } from "react-icons/md";
  import { Link } from "react-router-dom";
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
                <MdFastfood size="3rem" /> TheMealHub
              </Box>
              <Text fontSize={"md"}>© 2022 TheMealHub. All rights reserved</Text>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link to="/about">About us</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Contact us</Link>
              <Link href={"#"}>Testimonials</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Legal</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Status</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={"row"}>
                <Input
                  placeholder={"Your email address"}
                  bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300"
                  }}
                />
                <IconButton
                  bg={useColorModeValue("green.400", "green.800")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "green.600"
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  