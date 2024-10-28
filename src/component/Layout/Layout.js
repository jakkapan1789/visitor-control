import React from "react";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";
import { Box, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bgcolor="grey.100"
      margin="0 auto"
      sx={{
        width: "100%",
      }}
    >
      <Header />
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <Container
          component="main"
          sx={{ py: 10 }}
          // data-aos="flip-up"
          // data-aos-duration="1000"
          // data-aos-delay="200"
        >
          {children}
        </Container>
      </Box>
      <BottomNav />
    </Box>
  );
};

export default Layout;
