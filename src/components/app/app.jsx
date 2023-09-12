import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import advatages from "../../mocks/advantagesList";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "../pages/main-page/main-page";
import OrderPage from "../pages/order-page/order-page";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage advantages={advatages} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<OrderPage products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
