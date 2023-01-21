import React from "react";
import "./App.css";
import Router from "./routes";
import LeftBar from "./components/LeftBar";
import { Container } from "./styles";
import { ThemeProvider } from "./contexts/theme/theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Container>
        <BrowserRouter>
          <LeftBar />
          <Router />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
