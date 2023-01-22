import { Input } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ButtonLogin, Container, FormLogin, InputContainer } from "./styles";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/theme/theme";
import { FakeLogo } from "../../components/LeftBar/components";
import { primary } from "../../colors";

export default function Login() {
  const size = { width: 35, height: 35 };
  const { colors } = useTheme();

  return (
    <Container>
      <FormLogin style={{ background: colors.primary.bg }}>
        <FakeLogo color={primary} unLinked />
        <InputContainer>
          <label
            htmlFor="username"
            style={{ marginBottom: "10px", color: colors.primary.txt }}
          >
            Username
          </label>
          <Input
            id="username"
            name="username"
            sx={{ marginBottom: "10px", color: colors.primary.txt }}
            placeholder="Username ou email"
            title="Username ou email"
          />
          <label
            htmlFor="password"
            style={{ marginBottom: "10px", color: colors.primary.txt }}
          >
            Password
          </label>
          <Input
            id="password"
            name="password"
            sx={{ marginBottom: "10px", color: colors.primary.txt }}
            placeholder="Password"
            title="Password"
            type="password"
          />
          <ButtonLogin>Entrar</ButtonLogin>
        </InputContainer>
        <span
          style={{
            width: "100%",
            textAlign: "center",
            color: colors.primary.txt,
          }}
        >
          Ou entre com...
        </span>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <IconButton>
            <GoogleIcon {...size} />
          </IconButton>
          <IconButton>
            <FacebookIcon {...size} />
          </IconButton>
        </div>
        <span
          style={{
            width: "100%",
            textAlign: "center",
            color: colors.primary.txt,
          }}
        >
          É novo no Path? <Link to={"/signup"}>Criar conta</Link>
        </span>
      </FormLogin>
    </Container>
  );
}
