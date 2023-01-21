import { fontSize } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/theme/theme";
export const FakeLogo = () => {
  return (
    <div
      style={{
        fontSize: "35pt",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
      }}
    >
      Path2
    </div>
  );
};

type OptionsProp = {
  options: {
    title: string;
    path: string;
    activeIcon: React.ReactNode;
    inactiveIcon: React.ReactNode;
  }[];
};

export const Options: React.FC<OptionsProp> = ({ options }) => {
  const navigator = useNavigate();
  const path = window.location.pathname;
  const { colors } = useTheme();
  console.log(path);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {options.map(option => (
        <div
          onClick={() => navigator(option.path)}
          key={option.title}
          style={{
            borderRight: `3px solid ${
              path === option.path ? colors.primary.bg : colors.secondary.bg
            }`,
            padding: "5px",
            color: `${colors.secondary.txt}`,
            fontSize: "12pt",
            fontWeight: `${path === option.path ? "bold" : "400"}`,
            display: "grid",
            gridTemplateColumns: "15% auto",
          }}
        >
          <span style={{ textAlign: "center" }}>
            {path === option.path ? option.activeIcon : option.inactiveIcon}
          </span>
          <span style={{ textAlign: "center" }}>{option.title}</span>
        </div>
      ))}
    </div>
  );
};
