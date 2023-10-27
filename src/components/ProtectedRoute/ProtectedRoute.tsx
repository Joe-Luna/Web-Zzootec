import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAllowed: boolean;
  children?: React.ReactNode;
  redirectTo?: string;
}

const ProtectedRoute = ({
  isAllowed,
  children,
  redirectTo = "/login",
}: Props) => {
    if (!isAllowed) {
        return <Navigate
        to={redirectTo}
        state={{ from: window.location.pathname }}
        />
    }

    return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
