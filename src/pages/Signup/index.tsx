import { Input } from "@mui/material";
import { ButtonSignup, Container, FormSignup, InputContainer } from "./styles";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/theme/theme";
import { FakeLogo } from "../../components/LeftBar/components";
import { primary } from "../../colors";
import { GoogleButton, FacebookButton } from "../../components";

export default function Signup() {
  const { colors } = useTheme();

  return (
    <Container>
      <FormSignup style={{ background: colors.primary.bg }}>
        <FakeLogo color={primary} unLinked />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <GoogleButton />
          <FacebookButton />
        </div>
        <span
          style={{
            width: "100%",
            textAlign: "center",
            color: colors.primary.txt,
          }}
        >
          Ou registe-se com...
        </span>
        <InputContainer>
          <label
            htmlFor="name"
            style={{ marginBottom: "10px", color: colors.primary.txt }}
          >
            Nome completo
          </label>
          <Input
            id="name"
            name="name"
            sx={{ marginBottom: "10px", color: colors.primary.txt }}
            placeholder="Nome completo"
            title="Nome completo"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <label
              htmlFor="email"
              style={{ marginRight: "10px", color: colors.primary.txt }}
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              sx={{ marginRight: "10px", color: colors.primary.txt }}
              placeholder="Email"
              title="Email"
              type="email"
            />
            <label
              htmlFor="phone"
              style={{ marginRight: "10px", color: colors.primary.txt }}
            >
              Telefone
            </label>
            <Input
              id="phone"
              name="phone"
              sx={{ color: colors.primary.txt }}
              placeholder="Telefone (+244)"
              title="Telefone"
              componentsProps={{
                input: { maxLength: 9, type: "tel", pattern: "[0-9]*" },
              }}
              type="tel"
            />
          </div>
          <label
            htmlFor="password"
            style={{ marginBottom: "10px", color: colors.primary.txt }}
          >
            Password
          </label>
          <Input
            id="password"
            name="password"
            sx={{ marginBottom: "25px", color: colors.primary.txt }}
            placeholder="Password"
            title="Password"
            type="password"
          />
          <ButtonSignup>Criar</ButtonSignup>
        </InputContainer>

        <span
          style={{
            width: "100%",
            textAlign: "center",
            color: colors.primary.txt,
          }}
        >
          Já tens conta? <Link to={"/login"}>Login</Link>
        </span>
      </FormSignup>
    </Container>
  );
}
