import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRouts } from "../route/routes";
import { AuthContext } from "../context/context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((r) => (
        <Route
          key={r.path}
          path={r.path}
          element={<r.component />}
          exact={r.exact}
        />
      ))}

      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRouts.map((r) => (
        <Route
          key={r.path}
          path={r.path}
          element={<r.component />}
          exact={r.exact}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
