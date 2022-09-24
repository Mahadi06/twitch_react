import { useState } from "react";
import { Mail, Notifications } from "@mui/icons-material";
import {
  Box,
  AppBar,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  padding: "2px 10px",
  width: "40%",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  display: "none",
  gap: "15px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" },
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          className="logo"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          Twitch
        </Typography>
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <IconContainer>
          <Badge badgeContent={4} color="warning">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="warning">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            alt="Remy Sharp"
            src="https://previews.123rf.com/images/ann24precious/ann24precious1810/ann24precious181000002/108953289-cute-panda-face-isolated-on-white.jpg"
          />
        </IconContainer>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            alt="Remy Sharp"
            src="https://previews.123rf.com/images/ann24precious/ann24precious1810/ann24precious181000002/108953289-cute-panda-face-isolated-on-white.jpg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
