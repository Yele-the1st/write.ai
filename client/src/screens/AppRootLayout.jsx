import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Footer } from "../components";

const AppRootLayout = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppRootLayout;
