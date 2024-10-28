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
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
export default function Home() {
  const router = useRouter();
  const from = router.query.from;

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div
      data-aos={from === "home" ? "fade-left" : "fade-right"}
      data-aos-duration="500"
    >
      <>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          รายการจองของคุณ
        </Typography>

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
            label="กำลังดำเนินการ"
            sx={{
              color: tabValue === 0 ? "#0046AD" : "black",
              fontWeight: "bold",
            }}
          />
          <Tab
            label="เสร็จสิ้น"
            sx={{
              color: tabValue !== 0 ? "#0046AD" : "black",
              fontWeight: "bold",
            }}
          />
        </Tabs>
      </>
      <CustomTabPanel value={tabValue} index={1}>
        {[0].map((item, index) => (
          <Card key={index} sx={{ mb: 1, position: "relative" }}>
            <Chip
              label="อนุมัติแล้ว"
              color="success"
              size="small"
              sx={{
                position: "absolute",
                top: 15,
                right: 12,
                p: 0.5,
              }}
            />
            <CardContent>
              <Stack direction={"column"} spacing={1}>
                <Typography variant="caption" fontWeight={"bold"}>
                  วันที่: 26 ตุลาคม 2567 , เวลา: 12:34 น.
                </Typography>
                <Typography variant="caption" fontWeight={"bold"}>
                  คุณ จักรพันธ์
                </Typography>

                <Typography variant="caption" fontWeight={"bold"}>
                  ทะเบียนรถ: 4ขด 525 กรุงเทพฯ
                </Typography>
                <Typography variant="caption" fontWeight={"bold"}>
                  วัตถุประสงค์: มาเยี่ยมบ้านเพื่อน
                </Typography>
              </Stack>

              <Stack sx={{}} direction={"column"}></Stack>

              <Divider sx={{ mt: 0.5, mb: 0.5 }} />
              <Stack sx={{ mt: 1, mb: -1.3 }} alignItems="center">
                <Button
                  fullWidth
                  size="small"
                  variant="contained"
                  sx={{ bgcolor: "#0046AD", color: "white" }}
                  endIcon={<EastIcon />}
                >
                  รายละเอียด
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={0}>
        {[0, 1].map((item, index) => (
          <Card key={index} sx={{ mb: 1, position: "relative" }}>
            <Chip
              label="รออนุมัติ"
              color="warning"
              size="small"
              sx={{ position: "absolute", top: 15, right: 12, p: 0.5 }}
            />
            <CardContent>
              <Stack direction={"column"} spacing={1}>
                <Typography variant="caption" fontWeight={"bold"}>
                  วันที่: 26 ตุลาคม 2567 , เวลา: 12:34 น.
                </Typography>
                <Typography variant="caption" fontWeight={"bold"}>
                  คุณ จักรพันธ์
                </Typography>
                <Typography variant="caption" fontWeight={"bold"}>
                  ทะเบียนรถ: 4ขด 525 กรุงเทพฯ
                </Typography>
                <Typography variant="caption" fontWeight={"bold"}>
                  วัตถุประสงค์: มาเยี่ยมบ้านเพื่อน
                </Typography>
              </Stack>

              <Stack sx={{}} direction={"column"}></Stack>

              <Divider sx={{ mt: 0.5, mb: 0.5 }} />
              <Stack sx={{ mt: 1, mb: -1.3 }} alignItems="center">
                <Button
                  fullWidth
                  size="small"
                  variant="contained"
                  sx={{ bgcolor: "#0046AD", color: "white" }}
                  endIcon={<EastIcon />}
                >
                  อนุมัติรายการ
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </CustomTabPanel>
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
