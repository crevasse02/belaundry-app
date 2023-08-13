import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Box,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import headImage from "../assets/header.webp";
import cardHead from "../assets/cardHead.webp";
import cardDot from "../assets/cardDot.webp";
import laundry from "../assets/laundry.webp";
import note from "../assets/note.webp";
import CardMost from "../components/cardMost";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import productActions from "../redux/products/actions";
import recent from "../assets/recent.webp";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const mapStateToProps = ({ products }) => ({
  allProducts: products.allProducts,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({ type: productActions.SET_PRODUCTS }),
});

const Dashboard = ({ allProducts, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  console.log(allProducts);
  return (
    <Box
      backgroundImage={headImage}
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      backgroundSize={"contain"}
      py={14}
    >
      <Box px={7} pt={14}>
        <Text color={"white"} fontWeight={500} fontSize={21.43} align={"left"}>
          Welcome Jhon
        </Text>
        <Card borderRadius={20} boxShadow={"md"} mb={10}>
          <CardHeader display="flex" alignItems={"center"} p={0}>
            <Image src={cardHead} alt="head" borderTopLeftRadius={20} />
            <Image
              src={cardDot}
              alt="dot"
              pl={3}
              width={"auto"}
              height={"100%"}
            />
          </CardHeader>
          <CardBody>
            <Text align={"right"} fontSize={18}>
              Your Balance
            </Text>
            <Text
              align={"right"}
              color={"#0099EE"}
              fontWeight={700}
              fontSize={36}
            >
              $ {200.0}
            </Text>
          </CardBody>
        </Card>
        <Text color={"#3B97CB"} fontSize={16} fontWeight={700} align={"left"}>
          PREVIOUS ORDER
        </Text>
        <Card
          mt={2}
          mb={10}
          direction={"row"}
          align={"center"}
          borderRadius={10}
          height={100}
          position={"relative"}
          overflow={"hidden"}
          justifyContent={"space-between"}
        >
          <Image width={"auto"} src={laundry} alt="laundry" my={5} />

          <Stack>
            <CardBody align={"left"}>
              <Heading size="md" color={"#525252"} fontSize={16}>
                Bag of Laundry
              </Heading>

              <Text pt="3" fontSize={12} color={"#535353"}>
                Total order
              </Text>
              <Text color={"#0099EE"} fontWeight={700} fontSize={15}>
                $ 200.00
              </Text>
            </CardBody>
          </Stack>

          <Box
            bgGradient="linear(to-br, #099DEF, #7cc0e6 )"
            height={"100%"}
            p={3}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <NavLink to="/invoice">
              <Image src={note} width={10} />
              <Text color={"white"} fontSize={12}>
                INVOICE
              </Text>
            </NavLink>
          </Box>
        </Card>
        <Text color={"#3B97CB"} fontSize={16} fontWeight={700} align={"left"}>
          YOUR MOST ORDERED
        </Text>
        <Box position="relative" borderRadius="lg" overflow="hidden">
          <Image src={recent} alt="Background Image" w="100%" h="auto" />
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bgGradient="linear(to-t, #099DEF 0%, #099DEF10 50%, #099DEF10 100% )" // Adjust the overlay color and opacity
            opacity="0.7" // Adjust the overlay opacity
          />
          <Box
            position={"absolute"}
            top={"80%"}
            bottom={"0%"}
            left={"40%"}
            right={"0%"}
            textAlign={"left"}
            transform="translate(-50%, -50%)"
          >
            <Text color="white" fontSize={20} fontWeight={700}>
              Dry Cleaning
            </Text>
            <Text color="white" fontSize={11} fontWeight={700}>
              12x | total of $ 4.000
            </Text>
          </Box>
        </Box>
        <Text
          mt={14}
          color={"#3B97CB"}
          fontSize={16}
          fontWeight={700}
          align={"left"}
        >
          OUR LATEST PRODUCT
        </Text>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1.5}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {allProducts.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CardMost item={item} />;
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
