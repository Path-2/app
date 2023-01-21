import { useTheme } from "../../contexts/theme/theme";
import { FakeLogo, Options } from "./components";
import { Container } from "./styles";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";

export default function LeftBar() {
  const { colors } = useTheme();


  const options = [
    {
      title: "Home",
      path: "/",
      activeIcon: <AiFillHome color={colors.secondary.txt} size={20} />,
      inactiveIcon: <AiOutlineHome color={colors.secondary.txt} size={20} />,
    },
    {
      title: "Search",
      path: "/home/search",
      activeIcon: <AiFillHome color={colors.secondary.txt} size={20} />,
      inactiveIcon: <AiOutlineHome color={colors.secondary.txt} size={20} />,
    },
  ];
  
  return (
    <Container background={colors.secondary.bg}>
      <FakeLogo />
      <Options options={options} />
    </Container>
  );
}


