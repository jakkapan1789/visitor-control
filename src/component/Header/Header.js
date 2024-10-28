import React, { useState } from "react";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Stack,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  ListItemIcon,
  Button,
  LinearProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNavigation = (href, mobile) => {
    if (mobile) setIsMenuOpen(!isMenuOpen);
    router.push(href);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItems = [
    { text: "หน้าหลัก", href: "/" },
    { text: "ประวัติ", href: "/history" },
  ];
  return (
    <Box
      style={{
        position: "fixed",
        width: "100%", // Set width to 100% for auto adjustment
        zIndex: 10,
      }}
    >
      <AppBar
        position="fixed"
        color="inherit"
        elevation={1}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Stack
              direction="row"
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <AutoAwesomeMosaicIcon sx={{ color: "#0046AD", mr: 0.3 }} />
              <Typography
                variant="h6"
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: "none",
                  color: "#0046AD",
                  fontWeight: "bold",
                }}
              >
                Visitor Village
              </Typography>
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, ml: 2 }}>
                {menuItems.map((item) => (
                  <Typography
                    key={item.text}
                    sx={{
                      color: "#4b5563",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#0046AD",
                        backgroundColor: "#e0e7ff",
                        transition: "background-color 0.3s, transform 0.3s",
                      },
                      transition: "color 0.3s",
                      cursor: "pointer",
                      padding: "2px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    {item.text}
                  </Typography>
                ))}
              </Box>
            </Stack>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Stack direction={"row"} spacing={1}>
                <Button
                  onClick={handleProfileMenuOpen}
                  sx={{
                    color: "#0046AD",
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                  endIcon={<LoginIcon />}
                >
                  Sign In
                </Button>
                <Button
                  onClick={handleProfileMenuOpen}
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: "#0046AD",
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                  startIcon={<PersonAddIcon />}
                >
                  Register
                </Button>
              </Stack>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
