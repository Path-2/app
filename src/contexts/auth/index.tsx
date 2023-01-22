import React from "react";

const AuthContext = React.createContext({
    isAuthenticated: false,
  username: "",
  setAuth: (token: string) => {},
});

export const AuthProvider = (props: any) => {
  const { token } = useToken();

  const [isAuthenticated, setIsAuthenticated] = React.useState(token !== null);

  const defaultValue = React.useMemo(
    () => ({
      isAuthenticated,
      username: "",
      setAuth: (token: string) => {

        if (token) localStorage.setItem("token", JSON.stringify({ token }));
        else localStorage.removeItem('token')

        setIsAuthenticated(token ? true : false);
      },
    }),
    [isAuthenticated]
  );
  return (
    <AuthContext.Provider value={defaultValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useToken = () => {
  const token = localStorage.getItem("token");

  return token
    ? (JSON.parse(token) as { token: string; username: string })
    : { token: null, username: "" };
};

export const useAuth = () => React.useContext(AuthContext);
