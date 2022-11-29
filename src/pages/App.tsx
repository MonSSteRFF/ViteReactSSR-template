import React from "react";
import { Header } from "../components/Header";

import "./App.module.scss";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export { App };
