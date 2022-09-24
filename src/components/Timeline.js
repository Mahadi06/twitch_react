import { Box, Fab, Tooltip } from "@mui/material";
import Post from "./Post";
import AddPost from "./AddPost";
import React, { useState } from "react";
import { Add } from "@mui/icons-material";

export default function Timeline() {
  const [open, setOpen] = useState(false);

  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add Post"
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          bottom: "10px",
          left: "calc(43%)",
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <AddPost isOpen={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}
