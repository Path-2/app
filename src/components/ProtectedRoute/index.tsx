import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { PagesEnum } from "../../models/enums";

type ProtectedRouteProps = {
  component: JSX.Element;
};

export default function ProtectedRoute({ component }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? component : <Navigate to={`/${PagesEnum.Login.toLowerCase()}`}/>;
}
