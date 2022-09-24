import React from "react";
import {
  Box,
  styled,
  Modal,
  Typography,
  Avatar,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { EmojiEmotions, Photo, VideoCameraBack } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function AddPost({ isOpen, handleClose }) {
  return (
    <>
      <StyledModal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
          p={2}
          sx={{ width: { xs: 350, sm: 500 }, height: { xs: 350, sm: 400 } }}
        >
          <Typography
            variant="h6"
            textAlign="center"
            fontWeight={400}
            color="gray"
          >
            Create Post
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              width="100px"
              alt="Remy Sharp"
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"
            />
            <Typography
              fontWeight={500}
              fontSize="1.2rem"
              color={grey[700]}
              variant="span"
            >
              Remy Sharp
            </Typography>
          </Box>
          <TextField
            sx={{ width: "100%", marginTop: "20px" }}
            multiline
            rows={6}
            placeholder="Whats on your mind, Remy"
            variant="standard"
          />
          <Stack direction="row" gap={1} mb={2} mt={2}>
            <Photo color="primary" cursor="pointer" />
            <VideoCameraBack color="secondary" cursor="pointer" />
            <EmojiEmotions color="warning" cursor="pointer" />
          </Stack>
          <Button variant="contained" sx={{ width: "100%" }}>
            Post
          </Button>
        </Box>
      </StyledModal>
    </>
  );
}
