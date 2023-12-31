import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Spacer,
} from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import subLogo from "../assets/cardDot.webp";
import {
  FiHome,
  FiFolder,
  FiBarChart2,
  FiSettings,
  FiMenu,
  FiChevronDown,
} from "react-icons/fi";
import { useLocation, NavLink } from "react-router-dom";

// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
//   FiMenu,
//   FiBell,
//   FiChevronDown,
// } from "react-icons/fi";

const LinkItems = [
  {
    name: "Home",
    icon: FiHome,
    link: "",
  },
  {
    name: "Products",
    icon: FiFolder,
    link: "/product",
  },
  {
    name: "Sales",
    icon: FiBarChart2,
    link: "/sales",
  },
  {
    name: "Settings",
    icon: FiSettings,
    link: "/setting",
  },
];

const SidebarContent = ({ onClose, ...rest }) => {
  const location = useLocation();

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("#2D9CDB", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      color={"white"}
      h="full"
      textAlign={"left"}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Flex alignItems={"start"}>
          <Image src={Logo} w={30} />
          <Image src={subLogo} w={30} pl={1} pr={3} />
        </Flex>

        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          BeLaundry
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Text ml={5} mt={5} fontWeight={700}>
        Menu
      </Text>
      {LinkItems.map((item) => {
        return (
          <NavItem
            key={item.name}
            icon={item.icon}
            name={item.name}
            link={item.link}
            active={"/admin" + item.link === location.pathname ? true : false}
          >
            <Text
              as="i"
              display="flex"
              alignSelf="center"
              fontSize="14px"
            ></Text>
            <Text as="span" ml="2" fontSize="14px">
              {item.name}
            </Text>
          </NavItem>
        );
      })}
    </Box>
  );
};

const NavItem = ({ icon, name, link, active, ...rest }) => {
  return (
    <NavLink
      to={"/admin" + link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          bgColor={active ? "white" : ""}
          color={active ? "#3B97CB" : ""}
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr={4}
              fontSize={25}
              _groupHover={{ color: "white" }}
              as={icon}
            />
          )}
          {name}
        </Flex>
      </Box>
    </NavLink>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Spacer />
      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      bgColor={"#CAECFF"}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
};

export default Sidebar;
