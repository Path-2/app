import React from "react";
import "./App.css";
import Router from "./routes";
import LeftBar from "./components/LeftBar";
import { Container } from "./styles";
import { ThemeProvider } from "./contexts/theme/theme";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, useToken } from "./contexts/auth";

function App() {
  const { token } = useToken();
  return (
    <AuthProvider>
      <ThemeProvider>
        <Container>
          <BrowserRouter>
            {token ? <LeftBar /> : <></>}
            <Router />
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
