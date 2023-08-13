import React from "react";
import { Text, Box, Image } from "@chakra-ui/react";
import recent from "../assets/noImage.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import productActions from "../redux/products/actions";

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = () => ({});

const cardMost = ({ item, key }) => {
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
  // console.log(cat);
  return (
    <div key={key}>
      <NavLink to={"/detail/" + item?.id}>
        <Box
          position="relative"
          borderRadius="lg"
          overflow="hidden"
          width={"200px"}
        >
          <Image
            src={item?.image ? item?.image : recent}
            alt="Background Image"
            w="100%"
            h="214px"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bgGradient="linear(to-t, #099DEF 0%, #099DEF70 50%, #099DEF10 100% )" // Adjust the overlay color and opacity
            opacity="0.7" // Adjust the overlay opacity
          />
          <Box
            position={"absolute"}
            top={"75%"}
            bottom={"0%"}
            left={"38%"}
            right={"0%"}
            textAlign={"left"}
            transform="translate(-50%, -50%)"
          >
            <Text color="white" fontSize={10} fontWeight={400}>
              {getCategory(item?.category_id)}
            </Text>
            <Text
              color="white"
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              fontSize={18}
              fontWeight={700}
            >
              {item?.name}
            </Text>
            <Text color="white" fontSize={18} fontWeight={400}>
              ${item?.price}/pc
            </Text>
          </Box>
        </Box>
      </NavLink>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(cardMost);
