import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MenuBookIcon />
            <span style={{ marginLeft: "1em" }}>Book Recommendation</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
