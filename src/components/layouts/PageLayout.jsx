import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import GrayBox from "../GrayBox";

// eslint-disable-next-line react/prop-types
function PageLayout({ children }) {
  return (
    <>
    <GrayBox/>
    <Navbar />
      <Box
        maxW="100%"
        mx="auto"
        px={{ base: "16px", md: "60px" }} >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default PageLayout;
