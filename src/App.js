import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import Timeline from "./components/Timeline";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing="2" justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Timeline />

          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
