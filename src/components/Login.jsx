import { Button, Container, Grid, Box } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "..";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const { auth } = useContext(Context);

  function login() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          style={{ height: 200, width: 400, backgroundColor: "grey" }}
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Button onClick={login} variant="outlined">
              LOGIN FROM GOOGLE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
