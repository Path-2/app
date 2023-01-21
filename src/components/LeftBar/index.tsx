import { useTheme } from "../../contexts/theme/theme";
import { FakeLogo, Options } from "./components";
import { Container } from "./styles";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { PagesEnum } from "../../models/enums";

export default function LeftBar() {
  const { colors } = useTheme();

  const options = [
    {
      title: PagesEnum.Home,
      path: "/",
      activeIcon: <AiFillHome color={colors.secondary.txt} size={20} />,
      inactiveIcon: <AiOutlineHome color={colors.secondary.txt} size={20} />,
    }
  ];
  
  return (
    <Container background={colors.secondary.bg}>
      <FakeLogo />
      <Options options={options} />
    </Container>
  );
}


