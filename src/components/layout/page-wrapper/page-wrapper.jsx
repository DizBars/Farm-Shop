import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import OrderPage from "/src/components/pages/order-page/order-page";
import { Main } from "./styles";
import { Outlet } from "react-router-dom";

function PageWrapper({ children, features, products }) {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
