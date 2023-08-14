import React from "react";
import Sidebar from "../../components/sidebar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const admin = () => {
  return (
    <div>
      <React.Fragment>
        <Sidebar />
        <Box
          ml={{ base: 0, md: 60 }}
          position={"absolute"}
          top={"10%"}
          bgColor={"#CAECFF"}
          w={"-webkit-fill-available"}
        >
          <Outlet />
        </Box>
      </React.Fragment>
      {/* <Card>
        <CardHeader>
          <Text>Product Sold</Text>
          <Card>
            <Flex>
              <Text>This week</Text>
              <ChevronDownIcon />
            </Flex>
          </Card>
        </CardHeader>
      </Card> */}
    </div>
  );
};

export default admin;
