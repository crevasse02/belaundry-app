import {
  Box,
  Text,
  Input,
  Grid,
  GridItem,
  Textarea,
  Flex,
  Button,
  ButtonGroup,
  Card,
  Image,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import reportAction from "../../redux/report/actions";
import ImageUpload from "../../assets/upload.png";

const mapStateToProps = ({ report }) => ({
  allCategory: report.allCategory,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: () => dispatch({ type: reportAction.SET_CATEGORY }),
});

const Product = ({ getCategory, allCategory }) => {
  const [product, setProduct] = useState("");
  const [desc, setDesc] = useState("");
  const [sku, setSku] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  const handleChange = (event) => setProduct(event.target.value);
  const handleChangeDesc = (event) => setDesc(event.target.value);
  const handleChangeSku = (event) => setSku(event.target.value);
  const handleChangeStock = (event) => setStock(event.target.value);
  const handleChangePrice = (event) => setPrice(event.target.value);

  return (
    <Box>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        textAlign={"left"}
        h={"100vh"}
        mt={-3}
      >
        <GridItem
          rowSpan={{ base: "1", md: "2" }}
          colSpan={{ base: "5", md: "4" }}
          bg="#CAECFF"
          p={10}
        >
          <Text fontSize={41} fontWeight={700}>
            Add New Product
          </Text>
          <Text mb={"8px"} mt={10} color={"#3B97CB"}>
            Product Name
          </Text>
          <Input
            value={product}
            onChange={handleChange}
            size="lg"
            bgColor={"white"}
            borderColor={"#3B97CB"}
          />
          <Text mb={"8px"} mt={10} color={"#3B97CB"}>
            Product Name
          </Text>
          <Textarea
            value={desc}
            onChange={handleChangeDesc}
            size="lg"
            bgColor={"white"}
            borderColor={"#3B97CB"}
          />

          <Flex gap={10}>
            <Box w={{ base: "50%", md: "30%" }}>
              <Text mb={"8px"} mt={10} color={"#3B97CB"}>
                SKU
              </Text>
              <Input
                value={sku}
                onChange={handleChangeSku}
                size="lg"
                bgColor={"white"}
                borderColor={"#3B97CB"}
              />
            </Box>
            <Box w={{ base: "50%", md: "30%" }}>
              <Text mb={"8px"} mt={10} color={"#3B97CB"}>
                Stock
              </Text>
              <Input
                value={stock}
                onChange={handleChangeStock}
                size="lg"
                bgColor={"white"}
                borderColor={"#3B97CB"}
              />
            </Box>
          </Flex>
          <Flex>
            <Box>
              <Text mb={"8px"} mt={10} color={"#3B97CB"}>
                Category
              </Text>
              <Flex gap={5} flexWrap={"wrap"}>
                {allCategory.map((item) => {
                  return (
                    <Button
                      key={item.id}
                      bgColor={"#E7F5FD"}
                      color={"#3B97CB"}
                      _hover={{ bgColor: "#3B97CB", color: "white" }}
                      _focus={{ bgColor: "#3B97CB", color: "white" }}
                      variant="solid"
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </Flex>
            </Box>
          </Flex>
          <Box w={{ base: "60%", md: "30%" }}>
            <Text mb={"8px"} mt={10} color={"#3B97CB"}>
              Price
            </Text>
            <Input
              value={price}
              onChange={handleChangePrice}
              size="lg"
              bgColor={"white"}
              borderColor={"#3B97CB"}
            />
          </Box>
        </GridItem>
        <GridItem
          rowSpan={{ base: "1", md: "2" }}
          colSpan={{ base: "5", md: "1" }}
          bg="#E7F5FD"
        >
          <Box p={5}>
            <Card
              color={"white"}
              variant={"outline"}
              p={5}
              textAlign={"center"}
            >
              <Image src={ImageUpload} />
              <Text
                color={"#3B97CB"}
                fontSize={20}
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
                fontWeight={700}
              >
                Upload Image Here
              </Text>
            </Card>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
