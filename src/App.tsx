import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, useToken } from "./contexts/auth";
import { ThemeProvider } from "./contexts/theme/theme";
import Router from "./routes";
import { Container } from "./styles";

import "./App.css";
import { LeftBar } from "./components";

function App() {
  const { token } = useToken();

  //to clean all console.log
  //console.log = () => {}

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
