import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
{
  /* set width of toolbar to 100% at mobile screens somehow */
}
export default function AppBarButton() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "64px",
        lineHeight: "64px",
        background: "#2196F3",
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{ margin: "0 auto", textAlign: "center" }}
          >
            Calorie Counter
          </Typography>
          <Button color="inherit">Clear All</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
