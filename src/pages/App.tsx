import React from "react";

import { Header } from "../components/Header";
import { Aside } from "../components/Aside";

import "./App.module.scss";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <Aside />
        {children}
      </main>
    </>
  );
};

export { App };
