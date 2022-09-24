import {
  AddBox,
  ContactEmergency,
  DarkMode,
  Group,
  Home,
  Pages,
  Person,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import React, { useState } from "react";
import AddPost from "./AddPost";

export default function Sidebar({ mode, setMode }) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactEmergency />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            onClick={() => setOpen(true)}
            disablePadding
            sx={{
              display: { xs: "none", sm: "block" },
              color: "navy",
              backgroundColor: "skyblue",
              mt: 4,
              borderRadius: "10px",
            }}
          >
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "navy",
                }}
              >
                <AddBox />
              </ListItemIcon>
              <ListItemText primary="ADD POST" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <AddPost isOpen={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}
