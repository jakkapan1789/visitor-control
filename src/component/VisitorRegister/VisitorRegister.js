import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Dialog,
  DialogContent,
  DialogActions,
  CircularProgress,
  Autocomplete,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { yupResolver } from "@hookform/resolvers/yup";

import provinces from "@/data/thailand_province.json";
import * as yup from "yup";
import axios from "axios";

const homes = [{ name: "จักรพันธ์", no: "300/226" }];

const schema = yup.object().shape({
  name: yup.string().required("กรุณากรอกชื่อ"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง")
    .required("กรุณากรอกเบอร์โทรศัพท์"),
  carPlate: yup.string().required("กรุณากรอกทะเบียนรถ"),
  homeNo: yup.object().shape({
    no: yup.string().required("กรุณาเลือกบ้านเลขที่"),
  }),
  message: yup.string().required("กรุณากรอกวัตถุประสงค์"),
});

const VisitorRegister = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [loading, setLoading] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post("/api/mail/contact", data);
      setOpenSuccessDialog(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
    window.location.reload();
  };

  return (
    <Box id="contact" sx={{ py: 2, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="md">
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          direction="column"
        >
          <Typography variant="h4" align="center" gutterBottom>
            สำหรับผู้มาติดต่อ
          </Typography>
          {/* <DirectionsCarIcon fontSize="large" sx={{ color: "#0046AD" }} /> */}
          <Typography variant="body1" align="center" paragraph>
            โปรดตรวจสอบข้อมูลก่อนดำเนินรายการ
          </Typography>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} direction={"column"}>
            <TextField
              fullWidth
              label="หมวด (เช่น กก)"
              size="small"
              variant="outlined"
              margin="normal"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              fullWidth
              label="เลข (เช่น 1234)"
              type="tel"
              size="small"
              variant="outlined"
              margin="normal"
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
            <Controller
              name="homeNo"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  size="small"
                  options={provinces}
                  sx={{ mt: 2 }}
                  getOptionLabel={(option) => option.province_name || ""}
                  value={field.value || null} // Ensuring it's controlled
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="จังหวัด"
                      error={!!errors.homeNo}
                      helperText={errors.homeNo?.no?.message}
                    />
                  )}
                />
              )}
            />

            <Stack direction="row" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  textTransform: "none",
                  bgcolor: "#0046AD",
                  width: { xs: "100%", md: "auto" },
                  borderRadius: 3,
                }}
              >
                ค้นหา / ลงทะเบียน
              </Button>
            </Stack>
          </Stack>
        </form>

        <Dialog
          open={loading}
          PaperProps={{
            sx: { alignItems: "center", justifyContent: "center" },
          }}
        >
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CircularProgress />
            <Typography variant="body1" sx={{ mt: 2 }}>
              กำลังส่งข้อความ...
            </Typography>
          </DialogContent>
        </Dialog>

        <Dialog open={openSuccessDialog} onClose={handleCloseSuccessDialog}>
          <DialogContent sx={{ textAlign: "center" }}>
            <Typography variant="h6">
              ข้อความของคุณถูกส่งเรียบร้อยแล้ว!
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center" }}>
            <Button
              onClick={handleCloseSuccessDialog}
              sx={{ bgcolor: "#0046AD", color: "white" }}
            >
              ตกลง
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default VisitorRegister;
