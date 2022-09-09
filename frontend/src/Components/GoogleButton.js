import React from "react";
import { Button, Box, Typography } from "@mui/material";
import googleIcon from "./../Assets/googleIcon.png";

function GoogleButton() {
  return (
    <Button
      variant="contained"
      sx={{
        height: "2.5rem",
        width: "100%",
        padding: "0.2rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        textTransform: "none",
      }}
    >
      <Box
        backgroundColor="#fff"
        component="img"
        sx={{
          height: "2.2rem",
          padding: "0.4rem",
          borderRadius: "0.2rem",
        }}
        src={googleIcon}
      />
      <Typography variant="body" width="100%" textAlign="center">
        Sign in using Google
      </Typography>
    </Button>
  );
}

export default GoogleButton;
