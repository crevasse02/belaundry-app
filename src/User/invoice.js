import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  VStack,
  StackDivider,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import laundry from "../assets/laundry.webp";
import { ChevronLeftIcon, ChatIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const invoice = () => {
  return (
    <div>
      <Box>
        <Box textAlign={"left"} pt={4}>
          <NavLink to={"/"}>
            <ChevronLeftIcon color={"#2D9CDB"} fontSize={50} />
          </NavLink>
        </Box>
        <Card m={7}>
          <CardHeader
            borderTopRadius={10}
            bgColor={"#0099EE"}
            color={"white"}
            fontSize={25}
            fontWeight={700}
          >
            ORDER SUMMARY
          </CardHeader>
          <CardBody px={0}>
            <Text px={4} color={"#0099EE"} textAlign={"right"}>
              ORDER #21340
            </Text>
            <Box textAlign={"left"} px={4} pb={4}>
              <Text fontWeight={700} fontSize={15}>
                John Doe
              </Text>
              <Text fontSize={13}>
                123 Pasir Ris, <br /> 13810, Singapore
              </Text>
            </Box>
            <VStack
              divider={<StackDivider borderWidth={2} borderColor="#3B97CB" />}
              align="stretch"
            >
              <Card
                px={4}
                boxShadow={0}
                direction={"row"}
                align={"center"}
                position={"relative"}
                overflow={"hidden"}
                justifyContent={"space-between"}
              >
                <Flex align={"center"}>
                  <Image width={"auto"} src={laundry} alt="laundry" />

                  <Stack>
                    <CardBody align={"left"}>
                      <Heading size="md" color={"#525252"} fontSize={16}>
                        Bag of Laundry
                      </Heading>

                      <Text color={"#0099EE"} fontWeight={700} fontSize={15}>
                        Qty: 2
                      </Text>
                    </CardBody>
                  </Stack>
                </Flex>

                <Box>
                  <Heading size="md" color={"#525252"} fontSize={14}>
                    Total
                  </Heading>

                  <Text color={"#0099EE"} fontWeight={700} fontSize={15}>
                    $ 180.00
                  </Text>
                </Box>
              </Card>
              <Card
                px={4}
                boxShadow={0}
                direction={"row"}
                align={"center"}
                position={"relative"}
                overflow={"hidden"}
                justifyContent={"space-between"}
              >
                <Flex align={"center"}>
                  <Image width={"auto"} src={laundry} alt="laundry" />

                  <Stack>
                    <CardBody align={"left"}>
                      <Heading size="md" color={"#525252"} fontSize={16}>
                        Dry Cleaning
                      </Heading>

                      <Text color={"#0099EE"} fontWeight={700} fontSize={15}>
                        Qty: 3
                      </Text>
                    </CardBody>
                  </Stack>
                </Flex>

                <Box>
                  <Heading size="md" color={"#525252"} fontSize={14}>
                    Total
                  </Heading>

                  <Text color={"#0099EE"} fontWeight={700} fontSize={15}>
                    $ 10.00
                  </Text>
                </Box>
              </Card>
              <Card
                px={4}
                boxShadow={0}
                direction={"row"}
                align={"center"}
                position={"relative"}
                overflow={"hidden"}
                justifyContent={"space-between"}
              >
                <Flex align={"center"}>
                  <Image width={"auto"} src={laundry} alt="laundry" />

                  <Stack>
                    <CardBody align={"left"}>
                      <Heading size="md" color={"#525252"} fontSize={16}>
                        Rug
                      </Heading>

                      <Text color={"#0099EE"} fontWeight={700} fontSize={15}>
                        Qty: 1
                      </Text>
                    </CardBody>
                  </Stack>
                </Flex>

                <Box>
                  <Heading size="md" color={"#525252"} fontSize={14}>
                    Total
                  </Heading>

                  <Text color={"#0099EE"} fontWeight={700} fontSize={15}>
                    $ 14.00
                  </Text>
                </Box>
              </Card>
            </VStack>
          </CardBody>
          <CardFooter
            borderBottomRadius={10}
            bgColor={"#0099EE"}
            color={"white"}
            fontSize={25}
            fontWeight={700}
            justifyContent={"space-between"}
          >
            <Text fontSize={15}>TOTAL ORDER</Text>
            <Text fontSize={17}>$ 204.00</Text>
          </CardFooter>
        </Card>
        <Box px={7} mb={7}>
          <Button
            borderRadius={"16px"}
            leftIcon={<ChatIcon />}
            bg="#56E4A0"
            color={"white"}
            width={"100%"}
            size={"lg"}
          >
            WHATSAPP US
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default invoice;
