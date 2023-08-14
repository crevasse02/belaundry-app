import React, { useEffect } from "react";

import {
  Box,
  Card,
  CardHeader,
  Text,
  Flex,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { connect } from "react-redux";
import reportAction from "../../redux/report/actions";

const mapStateToProps = ({ report, products }) => ({
  allReport: report.allReport,
});

const mapDispatchToProps = (dispatch) => ({
  getReports: () => dispatch({ type: reportAction.SET_REPORTS }),
});

const Home = ({ allReport, getReports }) => {
  useEffect(() => {
    getReports();
  }, [getReports]);
  console.log(allReport);
  const income = [...allReport].sort((a, b) => b.income - a.income);
  return (
    <Box textAlign={"left"}>
      <Text
        px={7}
        fontWeight={700}
        display={{ base: "none", md: "block" }}
        fontSize={41}
      >
        Home
      </Text>
      <Card m={7} p={7}>
        <CardHeader>
          <Flex justifyContent={"space-between"} alignItems={"center"} mb={5}>
            <Text fontWeight={700} fontSize={20}>
              Product Sold
            </Text>
            <Card variant={"outline"} p={2}>
              <Flex>
                <Text>This week</Text>
                <ChevronDownIcon />
              </Flex>
            </Card>
          </Flex>
        </CardHeader>
        <Divider color={"grey"}></Divider>
        <Flex
          justifyContent={"space-around"}
          gap={{ base: "3", md: "0" }}
          alignItems={"end"}
        >
          {allReport.map((item) => {
            const dateString = item.created_at;
            const date = new Date(dateString);
            const formattedDate = date
              .toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
              })
              .replace(/\//g, "/");
            return (
              <Box pt={10}>
                <Text color={"#B2C5D4"} fontWeight={400} fontSize={13}>
                  {item.total} Item
                </Text>
                <Card
                  bgColor={"#3E7DAB"}
                  w={{ base: "100%", md: "70px" }}
                  h={item.total + 100 + "px"}
                >
                  <div></div>
                </Card>
                <Text color={"#B2C5D4"} fontWeight={400} fontSize={13}>
                  {formattedDate}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Card>

      <Card
        w={{ base: "100%", md: "30%" }}
        m={{ base: "0", md: "7" }}
        p={{ base: "5", md: "7" }}
      >
        <CardHeader>
          <Flex justifyContent={"space-between"} alignItems={"center"} mb={5}>
            <Text>Top selling product</Text>
            <Card variant={"outline"} p={2}>
              <Flex>
                <Text>This week</Text>
                <ChevronDownIcon />
              </Flex>
            </Card>
          </Flex>
        </CardHeader>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              {income.map((item, index) => {
                return (
                  <Tr>
                    <Td>Item {index + 1} </Td>
                    <Td>$ {item.income}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
