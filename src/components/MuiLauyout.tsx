import { Box, Stack, Divider } from "@mui/material";
import React from "react";

export const MuiLauyout = () => {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      {/* Box */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "error.light",
          },
        }}
      ></Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </Stack>
  );
};
