import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { Person } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";

const BottomNav = () => {
  const router = useRouter();
  const [selectedPath, setSelectedPath] = useState(router.pathname);

  const navItems = [
    { paths: ["/"], label: "หน้าหลัก", icon: <HomeIcon /> },
    {
      paths: ["/history"],
      label: "ประวัติ",
      icon: <HistoryIcon />,
    },
    { paths: ["/profile"], label: "โปรไฟล์", icon: <Person /> },
  ];

  const handleNavigationChange = (newValue) => {
    setSelectedPath(newValue);

    // Set up query parameter based on the current path
    if (newValue === "/history") {
      const from =
        selectedPath === "/"
          ? "home"
          : selectedPath === "/profile"
          ? "profile"
          : "";
      router.push({ pathname: newValue, query: { from } });
    } else {
      router.push(newValue);
    }
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        margin: "0 auto",
        boxShadow: "none",
        display: { md: "none", xs: "block" },
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ height: "58px" }}
        value={selectedPath}
        onChange={(event, newValue) => handleNavigationChange(newValue)}
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.paths[0]}
            label={item.label}
            icon={item.icon}
            value={item.paths[0]}
            showLabel
            sx={{
              color: item.paths.includes(selectedPath) ? "#0046AD" : "gray",
              "& .MuiBottomNavigationAction-label": {
                color: item.paths.includes(selectedPath) ? "#0046AD" : "gray",
              },
              "& .MuiSvgIcon-root": {
                color: item.paths.includes(selectedPath) ? "#0046AD" : "gray",
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
