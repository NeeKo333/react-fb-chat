import React, { useContext } from "react";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/constants";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";
const theme = createTheme({
  palette: {
    primary: {
      main: "#11cb5f",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

const Navbar = () => {
  const { auth } = useContext(Context);
  let [flag] = useAuthState(auth);
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={"flex-end"}>
          {flag ? (
            <Button
              onClick={() => auth.signOut()}
              theme={theme}
              color="secondary"
            >
              Exit
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button theme={theme} color="secondary">
                Login
              </Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
