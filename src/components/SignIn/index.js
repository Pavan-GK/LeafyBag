import React from "react";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { UpdateCredData } from "../../actions";

const SignIn = ({ getUserCredentials, sendcreddata }) => {
  const [checked, setChecked] = React.useState(true);
  const [userName, setUserName] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [CredBool, setCredBool] = React.useState(null);
  const [credentials, setCredentials] = React.useState({});

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const SetUserNameValue = (value) => {
    setUserName(value);
  };

  const SetPassWordValue = (value) => {
    setPassword(value);
  };

  const checkusercred = () => {
    getUserCredentials.forEach(({ Name, Password }) => {
      debugger;
      Name === userName && Password == password && setCredBool(true);
      Name === userName &&
        Password == password &&
        sendcreddata({ name: userName, loggedin: true });
    });

    // {
    //   setCredBool === true
    //     ? sendcreddata({ name: userName, loggedin: true })
    //     : "";
    // }
  };

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField
              onChange={(e) => SetUserNameValue(e.target.value)}
              label="Username/Email"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => SetPassWordValue(e.target.value)}
              label="Password"
              type={"password"}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={"Keep me logged in"}
                  inputProps={{ "aria-label": "primary checkbox" }}
                  style={{ color: "#0F0" }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={checkusercred}
              style={{ backgroundColor: "black", color: "white" }}
              fullWidth
            >
              Sign in
            </Button>

            {CredBool ? <Redirect to="/"></Redirect> : ""}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const mapStateToProps = (store) => ({
  getUserCredentials: store.userDetails,
});

const mapDischargeToProps = (discharge) => ({
  sendcreddata: (data) => discharge(UpdateCredData(data)),
});

export default connect(mapStateToProps, mapDischargeToProps)(SignIn);
