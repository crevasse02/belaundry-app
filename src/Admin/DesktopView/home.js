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

  return (
    <Box>
      <Card m={7} p={7}>
        <CardHeader>
          <Flex justifyContent={"space-between"} alignItems={"center"} mb={5}>
            <Text>Product Sold</Text>
            <Card variant={"outline"} p={2}>
              <Flex>
                <Text>This week</Text>
                <ChevronDownIcon />
              </Flex>
            </Card>
          </Flex>
        </CardHeader>
        <Divider color={"grey"}></Divider>
        <Flex justifyContent={"space-around"} alignItems={"end"}>
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
                <Card bgColor={"#3E7DAB"} w={70} h={item.total + 100 + "px"}>
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

      <Card w={"30%"} m={7} p={7}>
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
              {allReport.map((item, index) => {
                return (
                  <Tr>
                    <Td>Item {index} </Td>
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
