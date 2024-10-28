import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  Box,
  CardContent,
  Stack,
  Button,
  Chip,
  Divider,
  Tabs,
  Tab,
  CardMedia,
  Skeleton,
  TextField,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useRouter } from "next/router";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PropTypes from "prop-types";

export default function Home() {
  const router = useRouter();
  const from = router.query.from;

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <div data-aos="fade-left" data-aos-duration="500">
      {/* <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        โปรไฟล์
      </Typography> */}
      <Tabs
        textColor="inherit"
        value={tabValue}
        onChange={handleTabChange}
        sx={{ mb: 2 }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#0046AD",
          },
        }}
      >
        <Tab
          label="เข้าสู่ระบบ"
          sx={{
            color: tabValue === 0 ? "#0046AD" : "black",
            fontWeight: "bold",
          }}
        />
        <Tab
          label="ลงทะเบียน"
          sx={{
            color: tabValue !== 0 ? "#0046AD" : "black",
            fontWeight: "bold",
          }}
        />
      </Tabs>

      <div>
        <Card sx={{ mb: 1 }}>
          <CardContent>
            <Box>
              <Stack direction={"column"} spacing={1}>
                <Typography
                  variant="h5"
                  align="center"
                  fontWeight={"bold"}
                  sx={{ color: "#0046AD", mb: 2, mt: 2 }}
                >
                  Village System
                </Typography>
                <TextField
                  fullWidth
                  label="ชื่อผู้ใช้งาน"
                  size="small"
                  variant="outlined"
                  margin="normal"
                  // {...register("name")}
                  // error={!!errors.name}
                  // helperText={errors.name?.message}
                />
                <TextField
                  fullWidth
                  label="รหัสผ่าน"
                  size="small"
                  variant="outlined"
                  margin="normal"
                  // {...register("name")}
                  // error={!!errors.name}
                  // helperText={errors.name?.message}
                />
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: "#0046AD",
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                  // startIcon={<PersonAddIcon />}
                >
                  เข้าสู่ระบบ
                </Button>
              </Stack>
            </Box>
            {/* <Stack direction={"column"} spacing={1}>
              <Typography variant="body" fontWeight={"bold"}>
                หมู่บ้าน: นราวดี อิลิแกนซ์
              </Typography>
              <Typography variant="body1" fontWeight={"bold"}>
                บ้านเลขที่ 300/226
              </Typography>
              <Typography variant="body1" fontWeight={"bold"}>
                เจ้าบ้าน: จักรพันธ์
              </Typography>
            </Stack> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
