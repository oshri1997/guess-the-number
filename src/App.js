import React from "react";
import Form from "./components/Form";
import { Grid, Typography, Paper, Divider } from "@material-ui/core";
import Guesses from "./components/Guesses";
import Results from "./components/results";

function App() {
  return (
    <Grid
      container
      style={{ height: "100vh" }}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={10} md={8} lg={4}>
        <Paper
          style={{ padding: "50px", background: "rgba(250,250,250,0.8)" }}
          elevation={6}
        >
          <Typography align="center" variant="h6" gutterBottom>
            Guess The Number between 0-20
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Form />
          <Guesses />
          <Results />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
