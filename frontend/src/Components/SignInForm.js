import React from "react";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import GoogleButton from "./GoogleButton";

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
};

function SignInForm() {
  return (
    <Card
      component="form"
      onSubmit={handleSubmit}
      noValidate
      backgroundColor="primary.main"
      sx={{ padding: "2rem", width: "30%" }}
    >
      <GoogleButton />
      <Typography
        variant="h6"
        component="h2"
        color="text.light"
        sx={{ marginY: "1rem", textAlign: "center" }}
      >
        OR
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            {"Forgot password?"}
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SignInForm;
