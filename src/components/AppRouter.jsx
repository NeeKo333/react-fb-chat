import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import MainLayOut from "./MainLayOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

const AppRouter = () => {
  const { auth } = useContext(Context);
  let [flag] = useAuthState(auth);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          {flag
            ? privateRoutes.map((el) => (
                <Route key={el.path} path={el.path} element={el.Component} />
              ))
            : publicRoutes.map((el) => (
                <Route key={el.path} path={el.path} element={el.Component} />
              ))}
          <Route
            path="*"
            element={<Navigate to={flag ? "chat" : "login"} replace />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
