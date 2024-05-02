import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="brand.900" p={4} color="white">
      <Flex justifyContent="space-around">
        <Link as={RouterLink} to="/about-us">
          About Us
        </Link>
        <Link as={RouterLink} to="/our-apples">
          Our Apples
        </Link>
        <Link as={RouterLink} to="/gallery">
          Gallery
        </Link>
        <Link as={RouterLink} to="/contact-us">
          Contact Us
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
