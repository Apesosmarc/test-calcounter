import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ActionTypes } from "@mui/base";
{
  //   todo
  /* set width of toolbar to 100% at mobile screens somehow */
  // create clear all Ac/reducer
}
export default function AppBarButton() {
  return (
    <Box>
      <AppBar sx={{ background: "#2196F3" }} position="static">
        <Toolbar
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",
          }}
          className="toolbar"
        >
          <Typography
            variant="h4"
            component="h4"
            className="title"
            sx={{ margin: "0 auto", textAlign: "center" }}
          >
            Calorie Counter
          </Typography>
          <Button className="btn" sx={{ background: "#90CAF9" }}>
            Clear All
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
