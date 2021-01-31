import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useHistory } from "react-router-dom";

import Copyright from "../components/Copyright";
import useFormValidation from "../hooks/useFormValidation";
import validatePasswordReset from "../components/Auth/validatePasswordReset";
import { useSnackbar } from "notistack";

import firebase from "../apis/firebase";
const INITIAL_STATE = {
  email: "",
};
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function Forgot() {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const {
    handleSubmit,
    handleChange,
    values,
    isSubmitting,
  } = useFormValidation(
    INITIAL_STATE,
    validatePasswordReset,
    handleResetPassword
  );

  async function handleResetPassword() {
    const { email } = values;
    try {
      await firebase.resetPassword(email);
      enqueueSnackbar("Password Rest Email has been sent.", {
        variant: "success",
      });
      history.push("/login");
    } catch (err) {
      console.error("Password Reset Error", err);
      enqueueSnackbar(err.message, { variant: "error" });
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Forgot 😵
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          paragraph
        >
          Enter your email address, we will send you a password change request.
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={values.email}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            Confirm
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
