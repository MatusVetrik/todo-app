import MenuIcon from "@mui/icons-material/Menu";
import {IconButton, Menu, MenuItem} from "@mui/material";

import React from "react";
import {useNavigate} from "react-router-dom";

const AppNavBar = () => {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/todos");
          }}
        >
          All Todo Lists
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/");
          }}
        >
          New Todo List
        </MenuItem>
      </Menu>
    </>
  );
};

export default AppNavBar;
