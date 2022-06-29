import {AppBar, Box, Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "./NavBar";

const AppHeader = () => {
  return (
    <Box sx={{flexGrow: 1}} color="#A6D1C9">
      <AppBar position="static">
        <Toolbar>
          <NavBar></NavBar>
          <Typography
            variant="h4"
            component="div"
            sx={{flexGrow: 1, fontWeight: "550"}}
            align="center"
          >
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
