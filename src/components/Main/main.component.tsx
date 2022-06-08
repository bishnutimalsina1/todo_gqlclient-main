import React from "react";
import { CssBaseline, Paper, Typography, Container } from "@mui/material";
import AppBar from "../AppBar/appbars.component";
import { useQuery } from "@apollo/client";
import GET_ALL from "../../graphql/queries/getAll";
import Columns from "../Columns/column.component";

function Main() {
  const { data } = useQuery(GET_ALL);
  return (
    <div>
      <CssBaseline />
      <AppBar />
      <Container component="main" maxWidth={false}>
        <Columns />
      </Container>
    </div>
  );
}

export default Main;
