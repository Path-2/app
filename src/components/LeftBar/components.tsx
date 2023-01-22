import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/theme/theme";
import { PagesEnum } from "../../models/enums";

const title = (title: string) => (document.title = `Path2 | ${title}`);

export const FakeLogo = ({ color, unLinked }: any) => {
  const navigator = useNavigate();
  return (
    <div
      style={{
        fontSize: "35pt",
        color: color ? color : "#fff",
        textAlign: "center",
        padding: "10px",
        cursor: unLinked ? "default" : "pointer",
      }}
      onClick={() => {
        if (!unLinked) {
          navigator("/");
          title(PagesEnum.Home);
        }
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
  const [showText, setShowText] = React.useState(true);

  React.useEffect(() => {
    setShowText(document.body.clientWidth > 430);

    window.addEventListener("resize", (ev) => {
      setShowText(document.body.clientWidth > 430);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        cursor: "pointer",
      }}
    >
      {options.map((option) => (
        <div
          onClick={() => {
            navigator(option.path);
            title(option.title);
          }}
          key={option.title}
          style={{
            borderRight: `3px solid ${
              path === option.path ? colors.primary.txt : colors.secondary.bg
            }`,
            padding: "5px",
            color: `${colors.secondary.txt}`,
            fontSize: "12pt",
            fontWeight: `${path === option.path ? "bold" : "400"}`,
            display: "flex",
            justifyContent: `${showText ? "flex-start" : "center"}`,
          }}
        >
          <span
            style={{
              textAlign: "center",
              width: `${showText ? "20%" : "100%"}`,
            }}
          >
            {path === option.path ? option.activeIcon : option.inactiveIcon}
          </span>
          {showText ? (
            <span
              style={{
                textAlign: "center",
                width: "100%",
              }}
            >
              {option.title}
            </span>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};
