import React, { useEffect, useState } from "react";
import { Text, Box, Image, Tag, Flex, Button, Card } from "@chakra-ui/react";
import recent from "../assets/noImage.png";
import { NavLink, useParams } from "react-router-dom";
import { ChevronLeftIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { connect } from "react-redux";
import productActions from "../redux/products/actions";

const mapStateToProps = ({ products }) => ({
  detailProducts: products.detailProducts,
});

const mapDispatchToProps = (dispatch) => ({
  getDetailProducts: (id) =>
    dispatch({ type: productActions.SET_DETAIL_PRODUCTS, id }),
});

const Detail = ({ detailProducts, getDetailProducts }) => {
  const [countProduct, setCountProduct] = useState(0);
  let { id } = useParams();

  useEffect(() => {
    getDetailProducts(id);
  }, [getDetailProducts]);

  const getCategory = (id) => {
    switch (id) {
      case "1":
        return "Wash and Fold";
      case "2":
        return "Dry Clean";
      case "3":
        return "Home";
      case "4":
        return "Others";
      default:
        return "";
    }
  };

  return (
    <div>
      <Box textAlign={"left"} pt={4} zIndex={3} position={"absolute"}>
        <NavLink to={"/"}>
          <ChevronLeftIcon color={"#2D9CDB"} fontSize={50} />
        </NavLink>
      </Box>
      <Box
        position="relative"
        borderRadius="lg"
        overflow="hidden"
        height={455}
        borderBottomRadius={30}
      >
        <Image
          src={detailProducts?.image ? detailProducts?.image : recent}
          alt="Background Image"
          w="100%"
          h="100%"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgGradient="linear(to-t, #099DEF 0%, #099DEF10 50%, #099DEF10 100% )" // Adjust the overlay color and opacity
          opacity="0.7" // Adjust the overlay opacity
        />
      </Box>
      <Box px={5} pt={10} textAlign={"left"}>
        <Tag bgColor={"#CAECFF"} color={"#0099EE"}>
          {getCategory(detailProducts?.category_id)}
        </Tag>
        <Text color={"#3B97CB"} fontWeight={700} fontSize={44}>
          {detailProducts?.name}
        </Text>
        <Text color={"#0099EE"} fontWeight={500} fontSize={27}>
          $ {detailProducts?.price}/pc
        </Text>
        <Text color={"#838383"} fontWeight={400} fontSize={16}>
          {detailProducts?.description}
        </Text>
      </Box>
      <Flex p={7} justifyContent={"center"} alignItems={"center"}>
        <Button
          colorScheme={"linkedin"}
          isDisabled={countProduct === 0}
          borderRadius={"50px"}
          onClick={() => setCountProduct(countProduct - 1)}
        >
          <MinusIcon />
        </Button>
        <Card mx={5} px={10} py={4} borderColor={"#3B97CB"} borderWidth={"1px"}>
          {countProduct}
        </Card>
        <Button
          colorScheme={"linkedin"}
          borderRadius={"50px"}
          onClick={() => setCountProduct(countProduct + 1)}
        >
          <AddIcon />
        </Button>
      </Flex>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
