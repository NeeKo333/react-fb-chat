import React from "react";
import {} from "@mui/material";
import { Container, Grid, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid container alignItems="center" justifyContent="center">
          <CircularProgress></CircularProgress>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
