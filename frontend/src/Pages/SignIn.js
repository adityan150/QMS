import * as React from "react";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Box, CssBaseline, Grid, Typography } from "@mui/material";
import SignInForm from "../Components/SignInForm";

export default function SignIn() {
  return (
    <Grid
      container
      component="main"
      direction="column"
      alignItems="center"
      justifyContent="center"
      maxWidth="xs"
    >
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          marginTop: 8,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          <QuestionAnswerIcon fontSize="inherit" />
          QMS
        </Typography>
        <Typography variant="h5" fontWeight="bold" margin="2rem">
          Sign in
        </Typography>
        <SignInForm />
      </Box>
    </Grid>
  );
}
